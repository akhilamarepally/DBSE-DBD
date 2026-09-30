/* =========================
   Save Profile
========================= */

function saveProfile() {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const message =
        document.getElementById("profileMessage");

    if (name === "" || email === "" || phone === "") {

        message.style.color = "#dc2626";

        message.innerText =
            "Please fill all profile fields.";

        return;
    }

    message.style.color = "#15803d";

    message.innerText =
        "Profile updated successfully!";
}


/* =========================
   Change Password
========================= */

function changePassword() {

    const currentPassword =
        document.getElementById("currentPassword").value;

    const newPassword =
        document.getElementById("newPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("passwordMessage");


    if (
        currentPassword === "" ||
        newPassword === "" ||
        confirmPassword === ""
    ) {

        message.style.color = "#dc2626";

        message.innerText =
            "Please fill all password fields.";

        return;
    }


    if (newPassword !== confirmPassword) {

        message.style.color = "#dc2626";

        message.innerText =
            "New passwords do not match.";

        return;
    }


    if (newPassword.length < 6) {

        message.style.color = "#dc2626";

        message.innerText =
            "Password must contain at least 6 characters.";

        return;
    }


    message.style.color = "#15803d";

    message.innerText =
        "Password changed successfully!";
}


/* =========================
   Notifications
========================= */

function saveNotifications() {

    const email =
        document.getElementById("emailNotification").checked;

    const complaints =
        document.getElementById("complaintNotification").checked;

    const newComplaints =
        document.getElementById("newComplaintNotification").checked;

    const message =
        document.getElementById("notificationMessage");

    message.style.color = "#15803d";

    message.innerText =
        "Notification settings saved successfully!";
}