// ============================================
// 1. Ədədin tərsini tapmaq
// ============================================
function reverseNumber(num) {
    const isNegative = num < 0;
    const numStr = Math.abs(num).toString();
    const reversedStr = numStr.split('').reverse().join('');
    const reversedNum = parseInt(reversedStr, 10);
    return isNegative ? -reversedNum : reversedNum;
}

// ============================================
// 2. Rəqəmlərin sayını tapmaq
// ============================================
function countDigits(num) {
    // 0 xüsusi hallarıdır
    if (num === 0) return 1;
    return Math.abs(num).toString().length;
}

// ============================================
// 3. Cüt ədədlərin cəmi (1-dən n-ə qədər)
// ============================================
function sumEvenNumbers(n) {
    if (n < 2) return 0;
    
    // Son cüt ədəd
    const lastEven = n % 2 === 0 ? n : n - 1;
    // Cüt ədədlərin sayı: lastEven / 2
    const count = lastEven / 2;
    // Arifmetik progressiya cəmi: count * (first + last) / 2
    // first = 2, last = lastEven
    return count * (2 + lastEven) / 2;
}

// ============================================
// Test nümunələri
// ============================================
console.log("=== 1. Ədədin tərsi ===");
console.log("123:", reverseNumber(123));       // 321
console.log("-456:", reverseNumber(-456));     // -654
console.log("1000:", reverseNumber(1000));     // 1
console.log("0:", reverseNumber(0));           // 0

console.log("\n=== 2. Rəqəmlərin sayi ===");
console.log("123:", countDigits(123));         // 3
console.log("-4567:", countDigits(-4567));     // 4
console.log("0:", countDigits(0));             // 1
console.log("9:", countDigits(9));             // 1

console.log("\n=== 3. Cüt ədədlərin cəmi ===");
console.log("n=10:", sumEvenNumbers(10));      // 2+4+6+8+10 = 30
console.log("n=7:", sumEvenNumbers(7));        // 2+4+6 = 12
console.log("n=1:", sumEvenNumbers(1));        // 0
console.log("n=2:", sumEvenNumbers(2));        // 2