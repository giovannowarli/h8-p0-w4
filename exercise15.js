function highestScore (students) {
  var newObj = {};

  for (var i = 0; i<students.length;i++){
    if (newObj[students[i]["class"]] === undefined){ //kalo gak ada, buat kelas baru
      newObj[students[i]["class"]] = [];
    }
    newObj[students[i]["class"]].push({ //push nama dan nilai sesuai kelas
      name: students[i].name,
      score: students[i].score
    })
  }
  // console.log(newObj);
  var finalObj = {}; //obj untuk return
  for(var x in newObj){ //looping per kelas
    var score = 0;
    var name = '';
    for(i=0;i<newObj[x].length;i++){ //looping di array per kelas
      if (newObj[x][i].score > score){ //check nilai tertinggi
        score = newObj[x][i].score
        name = newObj[x][i].name
      }
    }
    finalObj[x] = {
      name: name,
      score: score
    }
  }

  return finalObj;
  }
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}