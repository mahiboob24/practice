
// Write a program  return  longest word in sentence

// function longestwd(str){
// ar=str.split(' ')
// longw=[0];
// for(let i=0;i<ar.length;i++){
//     if(ar[i].length>longw.length){
//         longw=ar[i]
//     }
// }
// return longw
// }
// console.log(longestwd(`in consoleenvironment You can also create and dispatch custom events in JavaScript`))





// function secmax(ar){
//     let max=[]
//     let secmax=[]
//     for(i=0;i<ar.length;i++){
//         if(ar[i]>max){
//             secmax=max
//             max=ar[i]
//         }
//     }
//     return secmax
// }
// console.log(secmax([1,4,67,8,95,9,5]))


// returns vowels in sentance

// function vowels(str){
//     let vow='aeiouAEIOU'
//     let count='' // or 0 ,           it will give no of vowels
//     for(let i=0;i<str.length;i++){
//         if(vow.includes(str[i])){
//             count+=str[i]             //count++
//         }
//     } return count

// }
// console.log(vowels(`You can also create and dispatch custom events in JavaScript`))


// merge the 2 string alternatevly

// input=>  st1='abc' , st2="123"
// output=  'a1b2c3'

// function merge(s1,s2){
//     let result=''
//     for (i=0;i<s1.length || i<s2.length;i++){
//         if(i<s1.length){
//             result+=s1.charAt(i)
//         }
//         if(i<s2.length){
//             result+=s2.charAt(i)
//         }
//     }
//     return result
// }
// console.log(merge('abc','123'))



// string to camel case

// function strtocamel(st){
//     let str=st.split(' ')
//     console.log(str)
//     for(var i=0;i<str.length;i++){
//         str[i]=str[i].charAt[0]
//     }
// }
// strtocamel('create and dispatch')



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
// console.log(flattenarray([2,[4,5,6],3,4,[6,4,2,[2,5,6,7]]]))







// const people = [
//   {
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
// ];

// Route to get the city by name
// app.get('/city/:name', (req, res) => {
//   const name = req.params.name;
//   const person = people.find(person => person.name === name);
//   if (!person) {
//     return res.status(404).json({ error: 'Person not found' });
//   }
//   res.json({ city: person.address.city });
// });





// function nonZero(arr){
//     let nonZeroValue=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!=0){
//           let temp=arr[nonZeroValue]
//           arr[nonZeroValue]=arr[i]
//           arr[i]=temp
//           nonZeroValue++
//         }
//       }
//     return arr
//   }
//   console.log(nonZero([0, 1, 0, 3, 12]))


// find the index of that values 

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