// soal 1
console.log('Soal 1');
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log(kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat.toLocaleUpperCase()+"\n");
// soal 2
console.log('Soal 2');
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var Int1  = Number(kataPertama);
var Int2 = Number(kataKedua);
var Int3  = Number(kataKetiga);
var Int4 = Number(kataKeempat);
var Hasil = Int1+Int2+Int3+Int4;

console.log(Hasil+'\n ');

// soal 3
console.log('Soal 3');
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);
console.log('\n');

// soal 4
console.log('Soal 4');
var nilai = 85;
if (nilai >= 80) {
    console.log('Nilai A');
} else if (nilai >= 70) {
    console.log('Nilai B');
} else if (nilai >= 60) {
    console.log('Nilai C');
} else if (nilai >= 50) {
    console.log('Nilai D');
} else {
    console.log('Nilai E');
}
console.log('\n ');

// soal 5
console.log('Soal 5');
var tanggal = 15;
var bulan = 3;
var tahun = 1999;
switch (bulan) {
    case 1:
        console.log(tanggal + " Januari " + tahun);
        break;
    case 2:
        console.log(tanggal + " Februari " + tahun);
        break;
    case 3:
        console.log(tanggal + " Maret " + tahun);
        break;
    case 4:
        console.log(tanggal + " April " + tahun);
        break;
    case 5:
        console.log(tanggal + " Mei " + tahun);
        break;
    case 6:
        console.log(tanggal + " Juni " + tahun);
        break;
    case 7:
        console.log(tanggal + " Juli " + tahun);
        break;
    case 8:
        console.log(tanggal + " Agustus " + tahun);
        break;
    case 9:
        console.log(tanggal + " September " + tahun);
        break;
    case 10:
        console.log(tanggal + " Oktober " + tahun);
        break;
    case 11:
        console.log(tanggal + " November " + tahun);
        break;
    case 12:
        console.log(tanggal + " Desember " + tahun);
        break;
}