// ============================================
// Tapşırıq 1: "r" hərfinin sayını tapmaq (dövr ilə)
// ============================================
let soz = "Proqramlasdirma";
let rSayi = 0;

for (let i = 0; i < soz.length; i++) {
    if (soz[i] === "r" || soz[i] === "R") {
        rSayi++;
    }
}
console.log("Tapşırıq 1:");
console.log(`Söz: "${soz}"`);
console.log(`"r" hərfinin sayı: ${rSayi}`);


// ============================================
// Tapşırıq 2: Boşluqları silmək (dövr ilə)
// ============================================
let cumle = "Bu gun hava cox gozeldir";
let yeniCumle = "";

for (let i = 0; i < cumle.length; i++) {
    if (cumle[i] !== " ") {
        yeniCumle += cumle[i];
    }
}
console.log("\nTapşırıq 2:");
console.log(`Əvvəl: "${cumle}"`);
console.log(`Sonra: "${yeniCumle}"`);


// ============================================
// Tapşırıq 3: Sadə ədəd (prime) yoxlaması
// ============================================
let eded = 17;
let sadedir = true;

if (eded < 2) {
    sadedir = false;
} else {
    for (let i = 2; i <= Math.sqrt(eded); i++) {
        if (eded % i === 0) {
            sadedir = false;
            break;
        }
    }
}
console.log("\nTapşırıq 3:");
console.log(`Ədəd: ${eded}`);
console.log(sadedir ? "Sadə ədəddir" : "Sadə ədəd deyil");

// Əlavə test
console.log("\n--- Əlavə testlər ---");
console.log("15:", (() => { for(let i=2;i<=Math.sqrt(15);i++) if(15%i===0) return "Sadə deyil"; return "Sadədir"; })());
console.log("2:", (() => { for(let i=2;i<=Math.sqrt(2);i++) if(2%i===0) return "Sadə deyil"; return "Sadədir"; })());
console.log("1:", "Sadə deyil (1 < 2)");