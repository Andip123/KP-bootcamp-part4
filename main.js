// FUNCTION 


// function addName(fristname, lastname){
//     console.log(fristname, lastname)
// }

// // CARA 1 keyword new function
// const sum1 = new Function ( 'x', 'y', 'console.log(x+y)')

// // CARA 2 standar function
// function sum2 (x,y) {
//     console.log(x+y)
// }

// // CARA 3 arrow function
// const sum3 = (x,y) => {
//     console.log(x + y) 
// }
// sum1 (1,1)
// sum2 (2,2)
// sum3 (3,3)

// TUGAS BESAR 
// PERHITUNGAN MENJUMLAHKAN 
// menghitung luas radius lingkaran

// const radius = 8 ; // Misal radius lingkarannya 8
// const area = Math.PI * radius * radius;

// console.log ("Luas lingkaran dengan radius", radius, "adalah", area);
 

// menghitung luas segitiga 

// const alas = 8;
// const tinggi =8;

// const luas = 0.5 * alas * tinggi;

// console.log ("Luas segitiga dengan alas", alas, "dan tinggi", tinggi, "adalah", luas);

// menghitung luas persegi panjang

// function hitungluaspersegipanjang(panjang,lebar){
//     const luas = panjang * lebar;
//     return luas;
// }
// const panjang = 10;
// const lebar = 5;

// const luaspersegipanjang = hitungluaspersegipanjang(panjang,lebar);

// console.log("luas persegi panjang dengan panjang", panjang, "dan lebar", lebar, "adalah", luaspersegipanjang);

// menghitung luas jajargenjang
// function hitungluasjajargenjang(alas, tinggi){
//     const luas = alas*tinggi;
//     return luas;
// }
// const alas = 8;
// const tinggi = 8;

// const luasjajargenjang = hitungluasjajargenjang(alas,tinggi);
// console.log("Luas jajargenjang dengan alas", alas, "dan tinggi", tinggi, "adalah", luasjajargenjang);

// TUGAS KE 2 
// menghitung gaji karyawan dengan nama, gaji harian dan jumlah hari kerja 
// function hitungTotalGaji(namaKaryawan, gajiPerHari, jumlahHariKerja) {
//     var totalGaji = gajiPerHari * jumlahHariKerja;
//     return totalGaji;
// }

// function main() {
//     var namaKaryawan = prompt("Masukkan nama karyawan:");
//     var gajiPerHari = parseFloat(prompt("Masukkan gaji per hari:"));
//     var jumlahHariKerja = parseInt(prompt("Masukkan jumlah hari kerja:"));

//     var totalGaji = hitungTotalGaji(namaKaryawan, gajiPerHari, jumlahHariKerja);

//     console.log(`Total gaji ${namaKaryawan} dalam satu bulan adalah: ${totalGaji}`);
// }

// main();
