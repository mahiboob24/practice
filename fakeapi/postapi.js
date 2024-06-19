




fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => data.forEach((el) => {
        document.getElementById('para').innerHTML +=
            `

        
            <div class="col-md-4 my-1">
                <div class="card" w-100>
                    <div class="card-body">
                    <h5 class="card-title" style="min-height:100px">${el.title}</h5>
                    <p class="card-text text-truncate">${el.body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
       `



    }))