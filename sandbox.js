
var students = [
    {
        name: 'Brahma',
        batch: "Native",
        score: 90
    },
    {
        name: 'Ulul',
        batch: "Infinite",
        score: 90
    },
    {
        name: "Geo",
        batch: "Daring",
        score: 100
    },
    {
        name: "Aziz",
        batch: "Humble",
        score: 95
    }
]


var result = [
    {
        score: students[0].score,
        students: []
    }
];

for (var i = 0; i< students.length;i++){
    var flag = false;
    for(var j = 0; j<result.length;j++){
        if(students[i].score === result[j].score){
            result[j].students.push(students[i].name);
            flag = true;
        }
    }
    if (flag === false ){
        result.push({
            score: students[i].score,
            students: [students[i].name]
        })
    }
}

console.log(result);

var list = [
    {score: 95, students: ["Brahma", "Aziz"]},
    {score: 90, students: ["Ulul"]},
    {score: 100, students: ["Geo"]}
];

for(var i = 0; i< list.length;i++){ //bubble sort nilai
    for (var j = i+1; j<list.length;j++){
        if(list[i].score > list[j].score){
            var temp = list[i].score;
            list[i].score = list[j].score;
            list[j].score = temp;
        }
    }
}

console.log(list);