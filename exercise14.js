//bayar 2000 setiap ngelewatin 1 stop.

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let arr = [];
    
    for(i=0;i<arrPenumpang.length;i++){
        let obj = {};
        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        obj.bayar = (rute.indexOf(obj.tujuan) - rute.indexOf(obj.naikDari)) * 2000;
        arr.push(obj);
    }
    return arr;
}



        
    
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
 console.log(naikAngkot([])); //[]