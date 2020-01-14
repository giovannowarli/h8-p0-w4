function cariModus(arr) {
    let finalArr = [];
    for(i=0;i<arr.length;i++){
      let numberOfTimes = 0;
      let number = arr[i];
      for(j=0;j<arr.length;j++){
        if(number === arr[j]){
          numberOfTimes++
        }
        
      }
      finalArr.push([arr[i],numberOfTimes]);
    }
   let result = 0;
   let occurence = 1;
   for(i=0;i<finalArr.length;i++){ //[[ 10, 1 ], [ 4, 1 ], [ 5, 1 ], [ 2, 1 ], [ 4, 1 ]
     
     if(finalArr[i][1]>occurence){
      result = finalArr[i][0];
      occurence = finalArr[i][1];
     }
   }
   if (result === 0 || occurence === finalArr.length){
     return -1;
   } 
   else {
   return result;
   }
  }

  //loop for each arr
  //if arr[i][i]>occurence
  //modusResult = arr[i][0]
  //end loop

  //return result
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1