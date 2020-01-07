function fpb(a,b) { //12 & 16
    let biggestFactor = 0
    for(let i = 1; i < a; i++) { //temp number == 4
      let tempNumber;
      if(a % i === 0) {
        tempNumber = i
      }
  
      for(let j = 1; j < b; j++) { //
        if( 
          b % j === 0 
          && j === tempNumber 
          && j > biggestFactor) {
            biggestFactor = j
        }
      }
    }
  
    return biggestFactor
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1