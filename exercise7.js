// function urutkanAbjad(str) {
//     let charCodeList = [];
//     for(i=0;i<str.length;i++){
//         charCodeList.push(str.charCodeAt(i));
//     }
    
//     for(let i = charCodeList.length; i>0;i--){
//         for(let j=0; j<charCodeList.length;j++){
//             if(charCodeList[j-i]>charCodeList[j]){
//                 var temp = charCodeList[j-1];
//                 charCodeList[j-1] = charCodeList[j];
//                 charCodeList[j] = temp;
//             }
//         }
//     }

//     console.log(charCodeList)
//     let result = [];
//     for(i=0; i<charCodeList.length;i++){
//         result.push(String.fromCharCode(charCodeList[i]));
//     }
    
//     return result.join('');
//   }

function urutkanAbjad(str) {
   let alphabet = 'abcdefghijklmnopqrstuwxyz';
   let alphabetArr = alphabet.split('');
   let strArr = str.split('');
   let result = [];
   for(i=0; i<alphabetArr.length;i++){
       for(j=0;j<str.length;j++){
           if (alphabetArr[i]===strArr[j]){
               result.push(strArr[j]);
           } else {
               continue;
           }
       }
   }
   return result.join('');
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'