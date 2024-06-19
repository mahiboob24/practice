




// remove duplicate elements from array

// let a=[1,4,6,7,8,4,6]
// let ar=a.sort()
// let out=[]
// for (let i=0;i<=ar.length-1;i++){
//     if (ar[i]!=ar[i+1]){
//         out.push(ar[i])
//     }
// }
// console.log(out)



// function duplicate(arr){
//     let out=[]
//     let array=arr.sort()
//     for (let i=0;i<=array.length-1;i++){
//         if(array[i]!=array[i+1]){
//             out.push(array[i])
//         }
//     }
//     return out
// }
// console.log(duplicate([1,4,6,7,8,4,6]))




// sorting without using sort()   

// let a=[1,3,4,77,43,70,84]
// for (let i=0; i<=a.length-1;i++){
//     if(a[i]<a[i+1]){
//         let temp=a[i]
//         a[i]=a[i+1]
//         a[i+1]=temp
//         i=-1
//     }
// }
// console.log(a)



// function sor(a){
//     for (let i=0;i<=a.length-1;i++){
//         if (a[i]>a[i+1]){
//             let temp=a[i]
//             a[i]=a[i+1]
//             a[i+1]=temp
//             i=-1
//         }
//     }
//    return a
// }

// console.log(sor([1,3,4,77,43,70,84]))





// let a=[1,2,3,4,7]
// let b=[1,2,8,4,8]
// let output=a.filter((el)=>b.includes(el))
// console.log(output)










// let num=90
// let i;
// let flag = true;
// if (num == 1) {
//     flag = false;
// } else {
//     i = 2;
//     while (i < num / 2) {
//         if (num % i == 0) {
//             flag = false;
//             break;
//         }
//         i++;
//     }
// }
// if (flag == true) {
//     console.log('prime')
// }else{
//     console.log('not')
// }


// let n='121'
// let temp=n
// let rev=0
// let digit=0
// while(n>0){
//     digit=n%10
//     rev=rev*10+digit
//     n= parseInt(n/10)
// }
// if(rev==temp){
//     console.log('palindrome')
// }else{
//     console.log('not')
// }







// removing duplicate num from array


// let ar=[12,34,55,34,12,67]
// let arr=ar.sort()
// let out=[]
//   for(let i=0; i<arr.length;i++){
//     if (arr[i]!=arr[i+1]){
//         out.push(arr[i])
//     }
// }
// console.log(out)



// function duplicatenum(arr){
//     let ar=arr.sort()
//     let out=[]
//     for(let i=0; i<ar.length;i++){
//         if (ar[i]!=ar[i+1]){
//             out.push(ar[i])
//         }
//     }
//     return out
// }
// console.log(duplicatenum([12,34,55,34,12,67]))







