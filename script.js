// Contoh if else

let pendapatan = 5555;
if (pendapatan >=10000) {
    console.log("Anda dikategorikan memiliki pendapatan sangat tinggi");
} else if (pendapatan>=5000) {
    console.log("Anda dikategorikan memiliki pendapatan tinggi");
} else if (pendapatan>=1001) {
    console.log("Anda dikategorikan memiliki pendapatan menengah");
} else if (pendapatan<=1000) {
    console.log("Anda dikategorikan memiliki pendapatan rendah");
}

// Contoh nested if

let nilaiuts = 70;
 let nilaiuas = 45;

if (nilaiuts >= 60) {
  console.log("Anda lulus ujian tengah semester.");
  
  if (nilaiuas >= 60) {
    console.log("Anda juga lulus ujian akhir semester.");
  } else {
    console.log("Anda tidak lulus ujian akhir semester.");
  }
} else {
  console.log("Anda tidak lulus ujian tengah semester.");
}

// Contoh switch case

let absensi = "ilham" ;

switch(absensi) {
    case "ilham":
    console.log("Ilham hadir bang");
    break;
   case "kurniawan":
    console.log("Kurniawan hadir bang");
    break;
    case"luis":
    console.log("Luis hadir bang");
    break;
    case"andre":
    console.log("Andre hadir bang");
    break;
    default:
    console.log("Orangnya tidak hadir");
}

// Contoh for statement 

for (let i = 5; i >=1 ; i--) {
console.log("Ini adalah hitungan ke "+i);  
}

// Contoh while

let number = 4;

while (number <= 10) {
    console.log(number);    
    number++
}

// Contoh do while

let angka = 7;

do {
    console.log(angka);
    angka++
} while (angka<=15);

// Contoh function

function laba(penjualan, modal) {
    return penjualan - modal;
}
    let hasil =  laba(50000, 15000);
    console.log("Hasil keuntungan usaha anda adalah " + hasil);
