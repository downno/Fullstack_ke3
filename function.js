// function hallo(n){
//     console.log("Selamat Pagi "+n);
// }
// hallo("Para Peserta");

// function checkbilangan (x){
//     if (x % 2 === 0) {
//         console.log("Genap");
//     } else {
//         console.log("Ganjil");
//     }
// }
// checkbilangan (7);

// function splitToArray(stringnya){
//         var temparraynya = stringnya.split(" ");
//         return temparraynya;
// }
// function jumlahkata(kalimat){
//     var resultsplit = splitToArray(kalimat);
//     var arraylenght = resultsplit.lenght;
//     return arraylenght;
// }
// console.log(jumlahkata("Hello Selamat Pagi"));


function perkalian (a,b){
    return a*b;
}
function pembagian (a,b){
    return a/b;
}
function calculatorutama(a,b,operasi){
    var hasil;
    switch (operasi){
        case "perkalian":
        hasil=perkalian(a,b); 
        break;
        case "pembagian":
        hasil=pembagian(a,b);
        break;
        default:
        hasil =("Operasi Belum ada");
}
return hasil;
}
var hasilutama=calculatorutama(3,4, "perkalian");
console.log(hasilutama);