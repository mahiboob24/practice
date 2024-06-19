

document.getElementById('btn').addEventListener('click',makerequest)
function makerequest(){
    console.log('btn clicked')
    
    fetch('ft.txt')
    .then((res)=>{
                                                          
        console.log(res);
         return res.text()})

    .then((data)=>{console.log(data)
         document.getElementById('demo').innerText=data
        })

}







