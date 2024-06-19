
// the largest length of the word in a sentance

// let st=`the largest length of the word in a sentance`
// let word=st.split(' ')
// let output=[0]
// let largest=[0]
// setTimeout(console.log(word),5000) 
// for (let i=0; i<word.length;i++){
//     if (word[i].length>output){
//         output=word[i].length
//         largest=output
//     }
// }
// console.log(output)
// console.log(largest)


// function f1(){
//     function f2(){
//         function f3(){
//             function f4(){
//                 function f5(){
//                     function f6(){
//                         function f7(){
            
//                         }
//                         f7()
//                     }
//                     f6()
//                 }
//                 f5()
//             }
//             f4()
//         }
//         f3()
//     }
//     f2()
// }
// f1()

// Promise---Promise(resolve,reject)

// status   fullfiled|resolve  reject  pending


// let appication=new Promise((resolve,reject)=>{
//     let age=50
//     if(age>18){
//         resolve(console.log(`your eligilbe for vote`))
//     }else{
//         reject(console.log(`your not eligilbe for vote`))

//     }
// })
// appication  
//             .then(`take your voter id and vote in the election`)

//             .catch(`wait untill your age became 18`)

//             .finally(`am finally block`)



// async await


// async function f1(){
//     await.appication
//     await.appication
//     await.appication
//     await.appication
//     await.appication
//     await.appication
//     await.appication
//     await.appication
// }

// key:"value"

// let a={k1:'v1',k2:'v2',k3:'v3',k4:'v4'}
// let a1={k1:'v1',k2:'v2',k3:'v3',k4:'v4'}
// let a2={k1:'v1',k2:'v2',k3:'v3',k4:'v4'}

// console.log(Object.keys(a))
// console.log(Object.values(a))
// console.log(Object.entries(a))


// JSON = javascript object notation

let data=[
    {k1:'v1',k2:'v2',k3:'v3',k4:'v4'},
    {k1:'v1',k2:'v2',k3:'v3',k4:'v4'},
    {k1:'v1',k2:'v2',k3:'v3',k4:'v4'},
]


// console.log(data)
let st=JSON.stringify(data)
console.log(st)
let converted_data=JSON.parse(st)
console.log(converted_data)














