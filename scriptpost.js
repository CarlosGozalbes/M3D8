/* let myobject = {
    name: document.getElementById("name-input").value,
    description: document.getElementById("description-input").value,
    brand: document.getElementById("brand-input").value,
    imageUrl: document.getElementById("image-input").value,
    price: document.getElementById("price-input").value
} */


const postProduct = async () => {
    
    
    
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
})}