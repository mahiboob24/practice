



// let a='iAmNajeer'
// function chec(a){
// let b=a.split(/(?=[A-Z])/)
// console.log(b)
// for (let i=0;i<=b.length-1;i++){
//    b[i]=b[i].toLowerCase().charAt(0)+b[i].slice(1)
// }
// let arr=b.join('_')
// return arr
// }
// console.log(chec('iAmNajeer'))




// function snake_case_string(str) { 
//     return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) 
//         .map(s => s.toLowerCase()) 
//         .join('_'); 
// } 
  
// console.log(snake_case_string('GeeksForGeeks'));




// class school{
//     constructor(name,roll,city){
//         this.name=name
//         this.roll=roll
//         this.city=city
//     }
// details(){
//     return  `${this.name},${this.roll} ,${this.city}`
// }


// }

// let najeer=new school('najeer',33,'banglore')

// console.log(najeer)
// console.log(najeer.name)
// console.log(najeer.details())

// najeer.age=20
// console.log(najeer)







// let st = "ItDefinedStudent"; 
// let mystr = st.split(/(?=[A-Z])/); 
// console.log(mystr)
// let snake = mystr.join('_').toLowerCase(); 
// console.log(snake);


// let x=20 
// console.log(x)

// setTimeout(()=>function a(){console.log('this is a callback fn')})

// fetch(()=>function b(){console.log('this is a callback fn')})





// var str='ddttsfgg'

// for ( i=0;i<str.length;i++){
//     let count=0
//     for( j=0;j<str.length;j++){
//         if( str[i]==str[j] && i>j  )
//         {
//             break;
//         }
//         if(str[i]==str[j]){
//         count++
//     }
// }
// if (count>0){
//     console.log(`${str[i]} occurs,${count}`)
// }
// }





// function countstr(str) {
   
//     for (i = 0; i < str.length; i++) {
//       let count = 0;
//       for (j = 0; j <= str.length; j++) {
//         if (str[i] == str[j] && i > j) {
//           break;
//         }
//         if (str[i] == str[j]) {
//           count++;
//         }
//       }
//       if (count > 0) {
//         console.log(`${str[i]} occurs ${count}`);
//       }
//     }
//   }
//   console.log(countstr("nnayana"));












