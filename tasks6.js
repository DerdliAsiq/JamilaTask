// ============================================
// Task 1: Tip çevirmə ilə düzəltmə
// ============================================
let qiymet1 = "10";
let qiymet2 = "20";

// Səhv olan sətir (string concatenation):
// let cem = qiymet1 + qiymet2;  // "1020"

// Düzəliş: Number() ilə tip çevirmə
let cem = Number(qiymet1) + Number(qiymet2);

console.log("=== Task 1 ===");
console.log(`qiymet1: "${qiymet1}" (${typeof qiymet1})`);
console.log(`qiymet2: "${qiymet2}" (${typeof qiymet2})`);
console.log(`Cəm: ${cem} (${typeof cem})`);  // 30 (number)


// ============================================
// Task 2: Dəyişənlər və hesablamalar
// ============================================
let mehsulAdi = "Laptop";
let mehsulQiymeti = 1000;
let endirimFaizi = 20;
let stokdaVarmi = true;

// 1. Endirimli qiymətini hesablayıb yeni dəyişənə mənimsət
let endirimliQiymet = mehsulQiymeti - (mehsulQiymeti * endirimFaizi / 100);

// 2. Konsola cümlə çıxar
console.log("\n=== Task 2 ===");
console.log(`Məhsul: ${mehsulAdi}, Endirimli Qiymət: ${endirimliQiymet} AZN`);

// 3. Qiymət 50-dən yuxarıdırsa VƏ stokda varsa → true
let sonuc = mehsulQiymeti > 50 && stokdaVarmi;
console.log(`Qiymət > 50 və stokda var: ${sonuc}`);


// ============================================
// Əlavə testlər
// ============================================
console.log("\n--- Əlavə testlər ---");

// Task 1 alternatif üsullar
console.log("Alternativ: +qiymet1 + +qiymet2 =", +qiymet1 + +qiymet2);
console.log("Alternativ: parseInt(qiymet1) + parseInt(qiymet2) =", parseInt(qiymet1) + parseInt(qiymet2));

// Task 2 fərqli dəyərlər
let mehsul2Adi = "Məhsul B";
let mehsul2Qiymeti = 30;
let mehsul2Endirim = 10;
let mehsul2Stok = false;

let mehsul2Endirimli = mehsul2Qiymeti - (mehsul2Qiymeti * mehsul2Endirim / 100);
let mehsul2Sonuc = mehsul2Qiymeti > 50 && mehsul2Stok;

console.log(`\nMəhsul: ${mehsul2Adi}, Qiymət: ${mehsul2Qiymeti}, Endirim: ${mehsul2Endirim}%, Stok: ${mehsul2Stok}`);
console.log(`Endirimli Qiymət: ${mehsul2Endirimli} AZN`);
console.log(`Qiymət > 50 və stokda var: ${mehsul2Sonuc}`);  // false (30 <= 50)