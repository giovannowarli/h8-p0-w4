function changeMe(arr) {

    for(i=0;i<arr.length;i++){
        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}: `)
        var obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: 2019 - arr[i][3]
        }

        if (arr[i][3] === undefined){
           obj.age = 'Invalid Birth Year';
        } else if (arr[i][3] >= 2019){
            obj.age = 'Invalid Birth Year';
        }

        console.log(obj);
    }
    
  }
  
  // TEST CASES
  changeMe([['Bambang', 'Sugianto', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
