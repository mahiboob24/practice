


// let data = `
//     {
//     "name":"maahi",
//     "roll":20,
//     "adress":"banglore",
//     },
//     {
//     "name":"nayana",
//     "roll":30,
//     "adress":"vartur",
//     },
//     {
//     "name":"mk",
//     "roll":40,
//     "adress":"marathalli"
//     }
// `
//  console.log(data)

// let convert_json = JSON.parse(data)
// console.log(convert_json)



// let data =[
//     {
//         name:"John",
//          age:30, 
//          city:"New York"
//     },
//     {
//         name:"John", 
//         age:30, city:
//         "New York"
//     },
//     {
//         name:"John", 
//         age:30, 
//         city:"New York"
//     }]
    


// let c_data=JSON.stringify(data)
// console.log(typeof(c_data))

// let obj = JSON.parse(c_data);
// console.log(typeof(obj));




//  synchronus

// console.log('najeer')
// console.log('nayana')
// console.log('suleman')


//  asynchronus

// function x(){
//     setTimeout(()=>console.log("hello"),3000)
//     console.log("hello344")
// }
// function y(){
//     console.log("good morning")   
// }
// y(x())


// function balance(){
//     function exe(){
//         function exe1(){
//             function exe2(){
//                setTimeout(()=>console.log('nayana'),8000) 
//             }exe2()
//             console.log('najeer sab')
//         }
//         exe1()
//         console.log('this is a 2nd function')
//     }
//     console.log('check your balance')
//     exe()
//     console.log('thank you')
// }
// console.log('enter the amount')
// setTimeout(balance,6000)



// promises   

// Promise()

// status
// resolve         sucess
// reject          rejection
// pending 


// let promise = new Promise(function (resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });
 
// promise.
//     then(function () {
//         console.log('Success, You are a GEEK');
//     })
   

// let promise=new Promise((resolve,reject) =>
// { let file_uploaded=false
//     if (file_uploaded){
//         resolve(console.log('sucessfully done'))
//     }else{
//         reject(console.log(' not uploaded'))
//     }
//  }
// )
// promise
//         .then(()=>console.log('thank you'))
//         .catch(()=>console.log('check again'))




// let p=new Promise((resolve)=>{setTimeout(()=>resolve(console.log('please wait najeer')),6000)})

// p.then(()=>console.log(' thank you'))



// async function f_name(){
//     await p

//     console.log('najeer sab waited 6 sec')
// }
// f_name()



// try{
//     throw('pleease enter capital')
// }
// catch (error){
//     console.error('not sufficient data')
// }



// finally{
//    console.log('done')
// }






