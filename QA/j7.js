



fetch('https://fakestoreapi.com/users')

.then((res)=>res.json())
.then((data)=>data.forEach((el)=> 
    document.getElementById('para').innerHTML+=
    `
    
      <td class='col-sm'>${el.id}</td>
      <td class='col-sm'>${el.email}</td>
      <td class='col-sm'>${el.username}</td>
      <td class='col-sm'>${el.password}</td>
      <td class='col-sm'>${el.phone}</td>

    `
    ))





