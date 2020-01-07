function ubahHuruf(kata) {
    let result = [];
    kodeKata = '';

    for(i=0;i<kata.length;i++){
        if (kata[i]==='z'){
            result.push('a');
        } else {
        result.push(String.fromCharCode(kata.charCodeAt(i)+1));
        }
    }
    return result.join('');
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu