window.registerUser = function() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    // Check empty fields
    if (name === "" || email === "" || phone === "" ||
        password === "" || confirmPassword === "") {

        alert("Please fill all the fields.");
        return;
    }

    // Check password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Check passwords
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Check terms
    if (!terms) {
        alert("Please accept the terms and conditions.");
        return;
    }

    // Check if account already exists
    const savedUser = localStorage.getItem("ecoServeUser");

    if (savedUser) {

        const existingUser = JSON.parse(savedUser);

        if (existingUser.email === email) {

            alert("Account already exists. Please login.");
            window.location.href = "index.html";
            return;
        }
    }

    // Create user account
    const user = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    // Save account
    localStorage.setItem("ecoServeUser", JSON.stringify(user));

    // Show success message
    alert("Account created successfully! Please login.");

    // Go to login page
    window.location.href = "index.html";
};
