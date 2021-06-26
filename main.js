function getPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    
    document.getElementById("password").value =  password;
}

function copyPassword() {
    var copyText = document.getElementById("password");

    copyText.select(); 
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    document.execCommand("copy");
}
