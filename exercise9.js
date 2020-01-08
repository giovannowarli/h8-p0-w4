function checkAB(num) {
    var dist = 3
    for (var i = 0; i < num.length; i++) {
        // console.log(num[i], num[i+1+dist])
        if (num[i] === "a" && num[i+1+dist] === "b") {
            return true
        }
        else if (num[i] === "b" && num[i+1+dist] === "a") {
            return true
        }
    }
    return false
}


  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false