// ============================================
// 1. Nested Function – Stipendiya hesabla
// ============================================
function calculateScholarship(average) {
    // Daxili funksiya: faiz hesablamaq
    function calculatePercentage(score) {
        return (score / 100) * 100; // sadəcə balı qaytarır (100 üzərindən)
    }

    const percentage = calculatePercentage(average);

    if (average >= 80) {
        return "Stipendiya qazanır";
    } else {
        return "Qazana bilmir";
    }
}

// ============================================
// 2. Maaşdan vergi çıxma (13%)
// ============================================
function calculateNetSalary(grossSalary) {
    const taxRate = 0.13; // 13% vergi
    const taxAmount = grossSalary * taxRate;
    const netSalary = grossSalary - taxAmount;
    return netSalary;
}

// ============================================
// 3. Endirim sistemi
// ============================================
function calculateDiscount(amount) {
    let discountPercent = 0;

    if (amount >= 200) {
        discountPercent = 20; // 20% endirim
    } else if (amount >= 100) {
        discountPercent = 10; // 10% endirim
    }

    const discountAmount = (amount * discountPercent) / 100;
    const finalAmount = amount - discountAmount;

    return {
        originalAmount: amount,
        discountPercent: discountPercent,
        discountAmount: discountAmount,
        finalAmount: finalAmount
    };
}

// ============================================
// Test nümunələri
// ============================================
console.log("=== 1. Stipendiya yoxlaması ===");
console.log("Ortalama 85:", calculateScholarship(85));  // Stipendiya qazanır
console.log("Ortalama 75:", calculateScholarship(75));  // Qazana bilmir
console.log("Ortalama 90:", calculateScholarship(90));  // Stipendiya qazanır

console.log("\n=== 2. Nett maaş hesablama ===");
console.log("Bruto 1000 AZN:", calculateNetSalary(1000), "AZN");  // 870 AZN
console.log("Bruto 2500 AZN:", calculateNetSalary(2500), "AZN");  // 2175 AZN

console.log("\n=== 3. Endirim sistemi ===");
console.log("50 AZN alış:", calculateDiscount(50));   // endirim yoxdur
console.log("150 AZN alış:", calculateDiscount(150)); // 10% endirim
console.log("300 AZN alış:", calculateDiscount(300)); // 20% endirim