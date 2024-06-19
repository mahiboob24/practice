


//  let a= [1,2,3,4,5,6,7,8,9]
// function arr(a){
//     let out=[]
//     for (let i=0;i<a.length;i++){
//         out.push(a[i]*2)
//     }
//     return out
// }

// console.log(arr(a))






// let st='maahi is good boy'
// st1=st.split(" ")
// for (let i=0;i<st1.length;i++){
//     st1[i]=st1[i].charAt(0).toLowerCase()+st1[i].slice(1)
// }

// emp_st=st1.join('');
// console.log(emp_st)



// function firstletteruppercase(st){
//     let out=st.split(/(?=A-Z)/)
//     console.log(out)
//     for(let i=0;i<out.length;i++){
//         out[i]=out[i].charAt(0).toLowerCase()+out[i].slice(0)
//     }
//     let final=out.join("_")
//     return final
// }
// console.log(firstletteruppercase('MaahiIsGoodBoy'))






// let str = 'i have learned something new today';
// let arr = str.split(" ");

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }
// let str2 = arr.join(" ");
// console.log(str2);




// function cap(st){
//    let out=st.split(' ')    //array['hi','this','maahi']
//     for (let i=0; i<out.length;i++){
//         out[i]=out[i].charAt(0).toUpperCase()+out[i].slice(1)
//     }
//     return result=out.join(' ')
// }
// console.log(cap('hi this maahi'))

// 'key':'value',
// key()
// value()


// let school = { f_name:'guu' , 
// l_name:'tyyr' , 
// year:1234,
// games:['cricket','kabbadi','kho-kho']
// }

// console.log(school.f_name)
// console.log(school.l_name)
// console.log(school.year)

// school.city='banglore'
// console.log(school)


// console.log(Object.keys(school))
// console.log(Object.values(school))



// let a=[10,94,77,33,8]
// let b=[]
// for (let i=a.length-1;i>=0;i--){
//     b.push(a[i])
// }
// console.log(b)


// let a=[10,94,77,33,8]
// let b=[]
// for (let i=a.length-1;i>=0;i--){
//     b.push(a[i])
// }
// console.log(b)

// positive numbers and negetive numbers

// let n = [ 34,-7,-56,1, 4, -8]
// let positive = []
// let negetive = []
// for (let i = 0; i <= n.length-1 ; i++) {
//     if (n[i] > 0) {
//         positive.push(n[i])
//     }
//     else {
//         negetive.push(n[i])
//     }
// }
// console.log(positive)
// console.log(negetive)


// let arr = [ 34,7,56,1,4,8]
// for (let i=0;i<arr.length;i++){
//     if(arr[i]<arr[i+1]){
//         let temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//         i=-1   
//     }
// }
// console.log(arr)




// let a=[123,56,789,546]  //[6,11,24,15]
// let b=a.toString(a)
// console.log(b)
// let out=''
// for(i=0;i<b.length;i++){
//     if(b[i]){
//         console.log(b[i])
//         out=out+b[i]

//     }
// }
// console.log(out)




// let a=[123,56,789,546]

// let b=a.map(
//     (el)=>
//         el.toString()
//         .split('')
//         .reduce((cu,sum)=>cu+ +sum,0)
// )
// console.log(b)



// let arr1 = [123];
// let resultArr = arr1.map((el) =>
//   el
//     .toString()
//     .split("")
//     .reduce((sum, a) => sum + +a, 0)
// );
// console.log(resultArr);





// let st='this si a string method'
// let b=st.split(' ')
// console.log(b)
// let out=b.at(-2)
// console.log(out)


// function lastWord(s){
//     if (s.length === 0){
//         return 0
//     }else{
//         let word=s.split(" ")
//         let a=word[word.length-2].length
//         console.log(a)
//         return a;
//     }
// }
//    console.log(lastWord('this is a string method')) 


// let st='this is a string method'
// let a=st.split(' ')
// let out=a.map((el)=>[el.length-2].length  )
// console.log(out)



// for(var i=0;i<3;i++){
//     setTimeout(()=>{console.log(i)},i*1000)
// }













