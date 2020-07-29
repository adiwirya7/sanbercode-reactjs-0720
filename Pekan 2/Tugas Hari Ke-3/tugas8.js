console.log("Soal 1");
let r = 5;
const phi =Math.PI;

var luasLingkaran = (phi,r) => {
    return (phi*r*r)
} 
var kelilingLingkaran = (phi,r) => {
    return (phi*(r*2)) 
} 

console.log(luasLingkaran(phi,r));
console.log(kelilingLingkaran(phi,r));
console.log("\n");

console.log("Soal 2");

const Kata1 = 'saya'
const Kata2 = 'adalah'
const Kata3 = 'seorang'
const Kata4 = 'frontend'
const Kata5 = 'developer'
let kalimat = `${Kata1} ${Kata2} ${Kata3} ${Kata4} ${Kata5}.`

console.log(kalimat+"\n");

console.log("Soal 3");
class Book {
    constructor(name,totalPage,price) {
      this.name = name;
      this.totalPage = totalPage;
      this.price = price;
    }
  }

class Komik extends Book {
    constructor(nama,page,price,color){
        super(nama,page,price);
        this.isColorful = color;
    }
}

mykomik = new Komik("Kenja no Mago",57,35000,false)

console.log(mykomik);