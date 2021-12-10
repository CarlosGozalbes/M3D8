/* let myobject = {
    name: document.getElementById("name-input").value,
    description: document.getElementById("description-input").value,
    brand: document.getElementById("brand-input").value,
    imageUrl: document.getElementById("image-input").value,
    price: document.getElementById("price-input").value
} */


const productId = new URLSearchParams(location.search).get("id")
const url = productId ? "https://striveschool-api.herokuapp.com/api/product/" + productId : "https://striveschool-api.herokuapp.com/api/product/"





const postProduct = async (event) => {
    event.preventDefault()
    
    try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: 'POST',   
    body: JSON.stringify({
            name: document.getElementById("name-input").value,
            description: document.getElementById("description-input").value,
            brand: document.getElementById("brand-input").value,
            imageUrl: document.getElementById("image-input").value,
            price: document.getElementById("price-input").value
        }),
    
    headers:  {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0",
        "Content-Type": "application/json"
    } 
    })
    if (response.ok) {
        const serverResp = await response.json()
        alert("Product posted successfully with an id of: " + serverResp._id)
        setTimeout(() => { window.location.assign("postpage.html") }, 1000)
    }   
    if (!response.ok) throw new Error("User Generated Error")
    } catch (err) {
        alert(err)
    }   
}

const editProduct = async (event) => {
    
    
    try {
    const response = await fetch(url, {
    method: 'PUT',   
    body: JSON.stringify({
            name: document.getElementById("name-input").value,
            description: document.getElementById("description-input").value,
            brand: document.getElementById("brand-input").value,
            imageUrl: document.getElementById("image-input").value,
            price: document.getElementById("price-input").value
        }),
    
    headers:  {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0",
        "Content-Type": "application/json"
    } 
    })
    if (response.ok) {
        const serverResp = await response.json()
        alert("Edit done successfully")
        setTimeout(() => { window.location.assign("postpage.html") }, 1000)
    }   
    if (!response.ok) throw new Error("User Generated Error")
    } catch (err) {
        alert(err)
    }   
}


const deleteproduct = async () => {
    const hasAccepted = confirm("Do you really want to delete this product?")

    if (hasAccepted) {
        try {
            const response = await fetch(url, {
    method: 'DELETE',   
    headers:  {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0",
            } 
    })
            if (response.ok) {
                const deletedObj = await response.json()
                alert("Product " + deletedObj.name + " got deleted successfully")
                setTimeout(() => { window.location.assign("postpage.html") }, 1000)
            }
            if (!response.ok) throw new Error("Error")
        } 
        
        
        
        catch (err) {
            alert(err)
        }
    }
}




window.onload = async () => {
    const response = await fetch(url, {
    headers:  {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0",
        
    }
    })
    const productDetails = document.getElementById("product-details")
    
    if (response.ok && productId) {
        const product = await response.json()

        
        productDetails.innerHTML= `
        <div class="input-box">
                <span class="details">Name</span>
                <input id="name-input" type="text" placeholder="name..." value="${product.name}" required>
              </div>
              <div class="input-box">
                <span class="details">Description</span>
                <input id="description-input" type="text" placeholder="description..." value="${product.description}" required>
              </div>
              <div class="input-box">
                <span class="details">Brand</span>
                <input id="brand-input" type="text" placeholder="brand..." value="${product.brand}" required>
              </div>
              <div class="input-box">
                <span class="details">Image</span>
                <input id="image-input" type="text" placeholder="image url..." value="${product.imageUrl}" required>
              </div>
              <div class="input-box">
                <span class="details">Price</span>
                <input id="price-input" type="text" placeholder="price..." value="${product.price}" required>
              </div>
        `
    }
    
    
    console.log("URL", url)
    
}