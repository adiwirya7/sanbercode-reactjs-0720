// soal 1
console.log('Soal 1');
var count = 0;
console.log('LOOPING PERTAMA');
while (count<20) {
    count +=2;
    console.log(count+" - I love coding");
}
console.log('LOOPING KEDUA');
while (count>0) {
    console.log(count+" - I will become a frontend developer");
    count -=2;
}
console.log("\n");
// soal 2
console.log('Soal 2');
for (let index = 1; index < 20; index++) {
    if (index%2==0) {
        console.log(index+" - Berkualitas");
    } else if (index%3==0 && index%2!=0) {
        console.log(index+" - I Love Coding");
    } else {
        console.log(index+" - Santai");
    } 
}

console.log('\n ');

// soal 3
console.log('Soal 3');
let s = "";
for (let i=1; i<=7;i++){
    for(let j=1;j<=i;j++){
        s+="#";
    }
    s+="\n";
}
console.log(s+'\n');

// soal 4
console.log('Soal 4');
var kalimat="saya sangat senang belajar javascript"
var name = kalimat.split(" ")
console.log(name)
console.log('\n');

// soal 5
console.log('Soal 5');
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (let index = 0; index < daftarBuah.length; index++) {
    const element = daftarBuah[index];
    console.log(element);
}
