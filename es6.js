let scores = [10,2,5,3,7];

scores.forEach(score => {
    console.log(score)
})

// ES6 Pangkat 2  (Disini variable score sdh diubah)

let nilaiPangkat2 = scores.map(score=>score **2)
console.log(nilaiPangkat2)

// ES6 Cetak nilai diatas 10 
let nilaiDiatas10 = nilaiPangkat2.filter((score)=>score>10);
console.log(nilaiDiatas10)