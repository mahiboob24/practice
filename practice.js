// reverse a string
//  function reverseString(str){
//     let output=''
//     for(let i=str.length-1;i>=0;i--){
//         output+=str[i]
//     }
//     return output
//  }

// console.log(reverseString("welcome"))

// function reverseString(str){
//     return str.split('').reverse().join("")
// }
// console.log(reverseString("welcome"))


// palindrome

// function isPalindrome(str){
//     const reversed=str.split('').reverse().join("")
//     return reversed===str
// }
// console.log(isPalindrome('mom'))

// function isPalindrome(str){
//     const toLowerStr=str.toLowerCase()
//     const reversed=toLowerStr.split('').reverse().join('')
//     return reversed===str
// }
//  console.log(isPalindrome('RacerCArr'))



// function isPalindrome(str){
//     const reversed=str.split('').reverse().join("")
//     if(reversed===str) {
//         console.log("palindrome")
//     }else(
//         console.log(" not a palindrome")
//     )
//     return reversed
// }
// console.log(isPalindrome('mom'))


// factorial
// function fact(n){
//     if(n==0 || n==1){
//         return 1
//     }else{
//        let result= n*fact(n-1)
//        console.log(result)
//         return result
//     }
// }
// fact(5)


// fobinacci series

// function fib(n) {
//     if (n == 0) {
//         return 0
//     }
//     else if (n == 1 || n == 2) {
//         return 1
//     }
//     else {
//         let output=fib(n - 1) + fib(n - 2)
//         return output
//     }
// }
// console.log(fib(11))

// function fib(n){
//     let series=[0,1]
//     for(let i=2;i<n;i++){
//         series[i]=   series[i-1]+   series[i-2]

//     }
//     return series
// }

// console.log(fib(9))


// const arr = [4, 5, 6, 33,999, 55,444, 22, 664, 64]
// function tMaxno(arr){
//     let fmax = 0
//     let smax = 0
//     let tmax = 0
//     for (let num of arr) {
//         if (num > fmax) {
//             tmax = smax
//             smax = fmax
//             fmax = num
//         } else if (num > smax ) {
//             tmax = smax
//             smax = num
//         } else if (num > tmax ) {
//             tmax = num
//         }
//     }
//     return tmax
// }
// console.log(tMaxno(arr))

// function tMinno(arr){
//     let fmin=0
//     let smin=0
//     let tmin=0
//     for(let num of arr){
//         if(num<fmin){
//             tmin=smin
//             smin=fmin
//             fmin=num
//         }
//         else if(num>smin && num < fmin){
//             tmin=smin
//             smin=num
//         }
//         else if(num>tmin && num < smin){
//             tmin=num
//         }
//     }
//     return tmin
// }
// console.log(tMinno(arr))


// function sum(n){
//     if(n==0){
//         return 0
//     }else{
//         return n+sum(n-1)
//     }
// }
// console.log(sum(2))


// function sqrsum(num){
//     // let output=0
//     for(let i=0;i<=num;i++){
//         let x=i*i
//         let result=x.toString().split("")
//         console.log(result)
//         // output=output+result
//     }
//     return 
// }
// sqrsum(4)

// sorting array without using inbuilt fn

// const arr = [4, 5, 6, 33,999, 55,444, 22, 664, 64]
// let arr=['green','yellow','blue','apple']
// function sortArr(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             i=-1
//         }
//     }
//     return arr
// }
// console.log(sortArr(arr))


// remove duplicate number in the array
// const arr = [4, 5,22,5, 6, 33,999, 55,444, 22, 664, 64]
// function dup(x){
//     let arr=x.sort()
//     let output=[]
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]!=arr[i+1]){
//             output.push(arr[i])
//         }
//     }
//     return output
// }
// console.log(dup(arr))

// remove duplicates and sorting the Array in ascending order

// let arr=[4,5,1,4,5,6,34,85,7,1,0,34,0,85]
// let arr=['green','yellow','blue','apple','yellow']


// function sortArray(arr){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//       let temp=arr[i]
//       arr[i]=arr[i+1]
//       arr[i+1]=temp
//       i=-1
//     }
//   }
//   let output=[]
//   for(i=0;i<arr.length;i++){
//     if(arr[i]!=arr[i+1]){
//       output.push(arr[i])
//     }
//   }
//     return output
//   }
// console.log(sortArray(arr))








// flatten given array
// function flatarr(arr) {
//     return arr.reduce((pre, cur) => 
//     Array.isArray(cur) ?
//     pre.concat(flatarr(cur)) :
//     pre.concat(cur), []
//     )
// }
// console.log(flatarr([2, 3, 4, 5, [5, 7, 9, 3, [4, 5, 6, 7],[55,66]]]))

// swapping 2 no without 3rd variable
// let x = 10
// let y = 20
// x = x + y
// y = x - y
// x = x - y

// let temp=x
// x=y
// y=temp


// console.log(" x=", x, "y=", y)


// let x = 1;
// let y = 2;

// [x, y] = [y, x];

// console.log(x,y)



// count the reapted elemetnts in the array

// let arr=[1,2,3,3,5,7,2,2]
// function reapted_value(arr){
// let out={}
// for(i=0;i<arr.length;i++){
//     if(out[arr[i]]){
//         out[arr[i]]++
//     }else{
//         out[arr[i]]=1
//     }
// }return out
// }
// console.log(reapted_value([1,2,3,3,5,7,2,2]))



// reverse number
// function reverseFunction(num, reversed = 0) {
//     if (num === 0) {
//         return reversed;
//     }
//     return reverseFunction(Math.floor(num / 10),
//         reversed * 10 + num % 10);
// };

// let number = 123456789;
// let result = 0;

// while(number>0){
//     digit = number%10;
//     result = result*10 + digit;
//     number = Math.floor(number/10);
// }
// console.log(result)





// const arr = [1, 2, 3, 4];
// const output = [];

// for (let i = 0; i < arr.length; i++) {
//   let product = 1;
//   for (let j = 0; j < arr.length; j++) {
//     if (i !== j) {
//       product *= arr[j];
//     }
//   }
//   output.push(product);
// }

// console.log(output);
    
// const output=[ 24, 12, 8, 6 ]





// function findImmediateNeighbors(arr, value) {
//     const greaterThanValue = arr.filter(num => num > value);
//     const lessThanValue = arr.filter(num => num < value);
  
//     const immediateGreater = Math.min(...greaterThanValue);
//     const immediateLesser = Math.max(...lessThanValue);
  
//     return [immediateLesser, immediateGreater];
//   }
  
//   const arr = [5, 8, 6, 3, 9, 7, 4, 2, 1];
//   const value = 6;
//   const output = findImmediateNeighbors(arr, value);
  
//   console.log(output);  Output: [6, 8]
  
 
  
  
//   function findImmediateNeighbors(arr, value) {
//     let immediateGreater = Infinity;
//     let immediateLesser = -Infinity;
  
//     arr.forEach(num => {
//       if (num > value && num < immediateGreater) {
//         immediateGreater = num;
//       }
//       if (num < value && num > immediateLesser) {
//         immediateLesser = num;
//       }
//     });
  
//     return [immediateLesser, immediateGreater];
//   }
  
//   const arr = [5, 8, 6, 3, 9, 7, 4, 2, 1];
//   const value = 7;
//   const output = findImmediateNeighbors(arr, value);
  
//   console.log(output); 
  
// function encodeString(input) {
//   let result = '';
//   let count = 1;
//   const length = input.length;

//   for (let i = 1; i <= length; i++) {
//     if (i < length && input[i] === input[i - 1]) {
//       count++;
//     } else {
//       result += count + input[i - 1];
//       count = 1;
//     }
//   }

//   return result;
// }

// const inputString = "aaabbc";
// const encodedString = encodeString(inputString);
// console.log(encodedString); 
// Output: "3a2b1c"





// Write a method to deep clone an object/array.

// const obj={name:'maahi',phno:1234567890,adr:'banglore', 
// obj: {foo: [], bar: {
//     baz: 6
// }}}



// (function(){
//     var x = 43;
//     (function random(){
//       x++;
//       console.log(x);
//       var x = 21;
//     })();
// })();

// const b = {
//     name:"Vivek",
//     f: function(){
//       var self = this;
//       console.log(this.name);
//       (function(){
//         var name = 'Mahiboob';
//         console.log(this.name);
//         console.log(self.name);
//       })();
//     }
//   }
//   b.f();


//   function func(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
//   func();   


//   setTimeout(() => console.log(1), 0)

//   new Promise((resolve, reject)=> setTimeout(() => resolve(2), 0))
//   .then(console.log) 
//   new Promise(() =>  console.log(5));
  
//   setTimeout(() => console.log(3), 0)
//   console.log(4)  

5,3,2,1,4










// function findvalues(arr,sum){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==sum){
//                 result.push([i,j])
//             }
//     }
//     }
//     return result
// }
// console.log(findvalues([1,2,3,4,5,7,8],9));


