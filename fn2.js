
// let power =(function(num){console.log(num**3)})(5)

// let  (a,b)

// let c=num=>num**2
// console.log(c(3))


//  let power2=function(num){
//     console.log( num**3)
//     }
//  power2(3)

// let c=(a,b)=>[(a**2),(b**2)]
// console.log(c(2,8))
// console.log(c(4,9))


// let arr = [1,213,31,42,21];
// let largest = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > largest) {
//         largest = arr[i]
//   } 
// }

// console.log(largest)



// largest value

// let arr =[20,30,2,4,56,77,44,37,60]
// let num =arr[0]               
// for(let i = 0; i<arr.length-1; i++){        
             
//     if(arr[i]>num){ 
//         num=arr[i]
//     }
// }
// console.log(num)


// 2nd largest and 2nd smallest

// let arr =[20,30,2,4,60]


// function a(arr){
// let max = arr[0]                             
// let sec_max= arr[0]                        
// for(let i = 0;i<arr.length;i++){        
//     if(arr[i]>max){                      
//         sec_max=max 
//         max=arr[i]      
//     }
// }
// return max,sec_max
// }
// console.log(a([20,30,2,4,60]))
// console.log(a([20,30,2,4,60]))



// let a=[10,20,30,40,50,60]
// let max=a[0]
// let sec_max=a[0]
// let third=a[0]
// let min=a[0]
// let sec_min=a[0]
// for(let i=0;i<a.length;i++){
//     if(a[i]>max){
//         sec_max=max
//     max=a[i]
// }
//     if(a[i]<min){
//     sec_min=min
//     min=a[i]
// }
// }
// console.log(`${max},is largest value`)
// console.log(`${sec_max},is 2nd largest value`)
// console.log(`${min},is lowest value`)
// console.log(`${sec_min},is 2nd lowest value`)





// var a=[1,2,[3,4,[4,5],8,9,10]]
// function flatarr(arr){
//     let result=[]
//     for(i=0;i<arr.length;i++){
//         if(typeof arr[i]==="object"){
//             result=result.concat(flatarr(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }
//   console.log(flatarr(a))

// var a=[2,[4,5,6],3,4,[6,4,2,[2,5,6,7]]]
  
// function flattenarray(arr){
//     let result=[]
//     for(i=0;i<arr.length;i++){
//         if(typeof arr[i]==='object'){
//             result=result.concat(flattenarray(arr[i]))
//         }
//         else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(flattenarray(a))




