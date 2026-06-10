// Kullanıcıdan login istenir
let login = prompt("Login: ");

// Şartların kontrol edilmesi
if (login === "admin") {
    // Login doğruysa, şifre istenir
    let password = prompt("Password: ");
    
    if (password === "12345") {
        console.log("Admin panelə giriş edildi"); 
        // Not: Kullanıcıya ekranda pencere olarak göstermek istersen console.log yerine alert() de kullanabilirsin.
    } else {
        console.log("Şifrə yanlışdır");
    }
} else {
    // Login yanlışsa
    console.log("Belə istifadəçi yoxdur");
}