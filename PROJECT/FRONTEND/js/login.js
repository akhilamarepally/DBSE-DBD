function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }

    // Get registered account
    const savedUser = localStorage.getItem("ecoServeUser");

    // No account exists
    if (!savedUser) {
        alert("Account not found. Please create an account first.");
        return;
    }

    const user = JSON.parse(savedUser);

    // Check email
    if (user.email !== email) {
        alert("Account not found. Please create an account first.");
        return;
    }

    // Check password
    if (user.password !== password) {
        alert("Incorrect password.");
        return;
    }

    // Login successful
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    window.location.href = "dashboard.html";
}