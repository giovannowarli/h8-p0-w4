function angkaPrima(angka) {
    if (angka === 2){
      return true;
    } else if (angka === 1 || angka === 0){
      return false;
    } else if (angka > 3 && angka%3 === 0){
      return false;
    } else if (angka > 5 && angka%5 ===0){
      return false;
    } else if (angka%2 === 1 ) {
      return true;
    }
  }

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false