




fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(responsed_data=>responsed_data.forEach(element => { document.getElementById('data').innerHTML+=
    
    <div class="col-sm-3  my-3 fs-6">
    <div class="card w-100 ">
    <img src="${element.image}" class="card-img-top" alt=""  style="height:150px;   ">
    <div class="card-body">
      <h5 class="card-title " style="min-height:100px;" >${element.title}</h5>
      <p class="card-text text-truncate">${element.description}</p>
      <a href="#" class="btn btn-primary btn-sm">Add</a>
    </div>
    </div>
  </div> 
    
    
}))




for(let i=0; i<+10;i++){
  setTimeout(() => {console.log(i)}, i*1000);
}



