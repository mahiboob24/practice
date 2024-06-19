function thirdmin(arr) {
    var firstmin = arr[0]
    var secmin = arr[0]
    var result = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < firstmin) {
            firstmin = arr[i]
            secmin = firstmin
            result = secmin
        }
    }
    return result
}

console.log(thirdmin([30, 40, 66, 74, 64]))



// let arr=[30, 40, 66, 74, 64]
// let firstmin = arr[0]
// let secmin = arr[0]
// let result = arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<firstmin){
//         firstmin=arr[i]
//         secmin=firstmin
//         result=secmin
//     }
// }
// console.log(result)
