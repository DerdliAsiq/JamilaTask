// ============================================
// 1. if...else — İmtahan Nəticəsi (qiymət)
// ============================================
function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Yanlış bal daxil edilib";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 75) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 40) {
        return "D";
    } else {
        return "F";
    }
}

// ============================================
// 2. switch case — Fəsilə görə Aylar
// ============================================
function getMonthsBySeason(season) {
    switch (season.toLowerCase()) {
        case "yay":
            return "İyun, İyul, Avqust";
        case "qış":
            return "Dekabr, Yanvar, Fevral";
        case "yaz":
            return "Mart, Aprel, May";
        case "payız":
            return "Sentyabr, Oktyabr, Noyabr";
        default:
            return "Belə fəsil yoxdur";
    }
}

// ============================================
// 3. ternary operator — Endirim Hesabı
// ============================================
let price = 120;
let finalPrice = price >= 100 ? price * 0.8 : price;

// ============================================
// Test nümunələri
// ============================================
console.log("=== 1. İmtahan Nəticəsi (if...else) ===");
console.log("Bal 95:", getGrade(95));   // A
console.log("Bal 80:", getGrade(80));   // B
console.log("Bal 65:", getGrade(65));   // C
console.log("Bal 50:", getGrade(50));   // D
console.log("Bal 25:", getGrade(25));   // F
console.log("Bal 105:", getGrade(105)); // Yanlış bal
console.log("Bal -5:", getGrade(-5));   // Yanlış bal

console.log("\n=== 2. Fəsil Ayları (switch case) ===");
console.log("yay:", getMonthsBySeason("yay"));
console.log("qış:", getMonthsBySeason("qış"));
console.log("yaz:", getMonthsBySeason("yaz"));
console.log("payız:", getMonthsBySeason("payız"));
console.log("bahar:", getMonthsBySeason("bahar"));
console.log("YAY:", getMonthsBySeason("YAY")); // case-insensitive

console.log("\n=== 3. Endirim Hesabı (ternary) ===");
console.log("Qiymət 120:", finalPrice); // 96 (20% off)
console.log("Qiymət 80:", 80 >= 100 ? 80 * 0.8 : 80); // 80 (heç bir dəyişiklik)
console.log("Qiymət 100:", 100 >= 100 ? 100 * 0.8 : 100); // 80 (20% off)
console.log("Qiymət 99:", 99 >= 100 ? 99 * 0.8 : 99); // 99