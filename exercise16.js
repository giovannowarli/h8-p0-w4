function graduates (students) {
    var newObj = {};
    for(i=0;i<students.length;i++){
        if(newObj[students[i]['class']]=== undefined) {
            newObj[students[i]['class']] = [];
        }
        newObj[students[i]['class']].push({
            name: students[i].name,
            score: students[i].score
        })
    }
    // console.log(newObj);
    finalObj = {};
    graduates = [];

    for(x in newObj){
        var name = ''
        for(i=0;i<newObj[x].length;i++){
            if (newObj[x][i].score > 75 ){
            graduates.push(
                newObj[x] = {
                 name: newObj[x][i].name,
                 passingScore: newObj[x][i].score
                }
            );
            }
        }
            
    }
    return graduates
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
//   console.log(graduates([
//     {
//       name: 'Alexander',
//       score: 100,
//       class: 'foxes'
//     },
//     {
//       name: 'Alisa',
//       score: 76,
//       class: 'wolves'
//     },
//     {
//       name: 'Vladimir',
//       score: 92,
//       class: 'foxes'
//     },
//     {
//       name: 'Albert',
//       score: 71,
//       class: 'wolves'
//     },
//     {
//       name: 'Viktor',
//       score: 80,
//       class: 'tigers'
//     }
//   ]));
  
//   // {
//   //   foxes: [
//   //     { name: 'Alexander', score: 100 },
//   //     { name: 'Vladimir', score: 92 }
//   //   ],
//   //   wolves: [
//   //     { name: 'Alisa', score: 76 },
//   //   ],
//   //   tigers: [
//   //     { name: 'Viktor', score: 80 }
//   //   ]
//   // }
  
  
//   console.log(graduates([])); //{}