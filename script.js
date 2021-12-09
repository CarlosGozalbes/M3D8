function displayproducts(products) {
    const row = document.querySelector(".row");
    row.innerHTML = ""
  
        products.forEach((product) => {
          const col = document.createElement("div");
          col.classList.add("mb-3")
          col.classList.add("col-md-3");
          col.innerHTML = `
                      <div class="parent card h-100 mb-4 shadow-sm">
                      <img src="${product.imageUrl}" alt="..." class="card-img-top img-fluid" style="width: 100%;
                      height: 15vw;
                      object-fit: cover;">
  
                      <div class="card-body">
                      <p class="card-name">
                          ${product.name}
                      </p>
                      <p class="card-description">
                      ${product.description}
                      </p>
                      <div id="card-info" class="d-flex justify-content-between align-items-bottom">
                          
                          <span>${product.brand}</span>
                          <span>${product.price}€</span>
                          <span><a href="./postpage.html?id=${product._id}">Edit</a></span>           
                      </div>
                      </div>
                      </div>
                      `;
          row.appendChild(col);
        });
  }





const getproducts = async () => {
    try{
     const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0"
           
        },
    }
    );
         if (response.ok) { 
        const products = await response.json()
        console.log(products)
        displayproducts(products);
         } 
    }
      catch (err) { 
        console.error(err)
    }
}
  
  
window.onload = async () => {
   await getproducts()
   
};


