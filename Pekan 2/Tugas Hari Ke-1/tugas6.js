//soal 1
console.log("Soal 1");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var PesertaObj = {
    FirstName : "Asep",
    JenisKelamin: "laki-laki",
    Hobi: "baca buku",
    TahunLahir: 1992
} 
console.log(arrayDaftarPeserta[0]) 
console.log(PesertaObj.FirstName) 

//soal 2 
console.log("Soal 2");
var BuahObj = [
    {
        Nama: 'strawberry',
        Warna: 'merah',
        AdaBijinya: 'tidak',
        Harga: 9000 },
    {
        Nama: 'jeruk',
        Warna: 'oranye',
        AdaBijinya: 'ada',
        Harga: 8000 },
    {
        Nama: 'semangka',
        Warna: 'hijau & merah',
        AdaBijinya: 'ada',
        Harga: 10000 },
    {
        Nama: 'pisang',
        Warna: 'kuning',
        AdaBijinya: 'tidak',
        Harga: 5000 },
    ]
console.log(BuahObj[0])

//soal 3 
console.log("Soal 3");
var dataFilm = []

function addFilm(dataFilm) {
    dataFilm.nama ="Peninsula"
    dataFilm.durasi ="1jam 56 menit"
    dataFilm.genre ="Laga/Horor"
    dataFilm.tahun =2020 
}
addFilm(dataFilm)
console.log(dataFilm)


//soal 4
console.log("Soal 4");
class Animal {
   constructor(name){
       this.name = name;
       this.legs = 4;
       this.cold_blooded = false;
   }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Ape extends Animal {
    constructor(name){
        super(name);
        this.legs = 2;
       this.cold_blooded = false;
    }

    yell() {
        return console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name){
        super(name);
        this.legs = 4;
       this.cold_blooded = true;
    }

    jump() {
        return console.log("hop hop");
    }
}
var sungokong = new Ape("kera sakti")
sungokong.yell()
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
 
var kodok = new Frog("buduk")
kodok.jump()

//soal 5
console.log("Soal 5");

  class Clock {

    constructor({template}) {
        this.timer;
        this.template = template;
        this.output;
    }
     render() {

      var date = new Date();
    
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      

      this.output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(this.output);
    }
  
    stop () {
      clearInterval(this.timer);
    };
  
    start() {
      this.render();
      this.timer = setInterval(this.render, 1000);
    };
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  