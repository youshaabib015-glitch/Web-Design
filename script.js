document.getElementById("register").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    
    if(email === "" || password === "" || username === "") {
        alert("Please fill in all fields.");
    } else if(password !== confirmPassword) {
        alert("Passwords do not match.");
    } else if(email && password && username) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("username", username);
        alert("Sign up successful!");

    } else {
        alert("Invalid email or password.");
    }
});