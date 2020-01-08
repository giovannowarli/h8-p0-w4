function digitPerkalianMinimum(angka) {
    let angkaPerkalian =[];
    for(i=1;i<=angka;i++){
        for(j=angka;j>=1;j--) {
        if (i === j && i !== 1 && j !== 1){
            break;
        }

        if((i*j) === angka) {
            angkaPerkalian.push(String(i)+String(j));
        }
    }

 
}
let result = angkaPerkalian[angkaPerkalian.length-1];
return result.toString().length;

}
    
  
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2