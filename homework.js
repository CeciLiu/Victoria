// 1.
// function factorial(x) {
//     var fac = 1;
//     for(i = 1; i <= x; i++) {
//         fac = fac*i
//     }
//     return fac;
// }

// console.log(factorial(5))

//2.
// function huiwen(x){
//     var len = x.length;
//     for(i = 0; i<Math.floor(len/2); i++){
//         if(x[i] !== x[len-i-1]) {
//             return "0"
//         }
//     }
//     return "huiwen";
// }

// console.log(huiwen("bobob"))


// 3.
// for (i=0; i<100; i++){
//     if(i%3==0){
//         console.log(i+"fizz")
//     }
//     if(i%5==0){
//         console.log(i+"buzz")
//     }
//     if(i%5==0 && i%3==0){
//         console.log(i+"fizzbuzz")
//     }
// }

//4.
 
// var table = document.createElement("table");
// for (var x = 1; x <= 9; x++)  
// {  
//   var tr = document.createElement("tr");  
//   for (var y = 1; y <= 9; y++)  
//   {  
//       var td = document.createElement("td");  
//       td.innerHTML = y*x;
//       tr.appendChild(td); 
//   }  
//   table.appendChild(tr); 
// }  
// document.body.appendChild(table);

//5.

// function random(){
//     var v1 = document.getElementById("input1").value
//     var v2 = document.getElementById("input2").value
//     var ram = parseInt(Math.random()*(Math.abs(v1-v2)+1)+Math.min(v1,v2),10);  
//     console.log(ram)
// }

