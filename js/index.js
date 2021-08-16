document.getElementById("login-button").addEventListener('click', function () {
    const userEmailText = document.getElementById("user-email");
    const userEmail = userEmailText.value;

    const userPassowordText = document.getElementById("user-password");
    const userPassword = userPassowordText.value;

    if (userEmail == "abc@xyz.com" && userPassword == "secret") {
        window.location.href = "banking.html";
    }
})