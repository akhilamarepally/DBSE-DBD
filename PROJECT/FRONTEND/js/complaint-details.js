function updateComplaint() {

    const staff = document.getElementById("staff").value;
    const status = document.getElementById("status").value;
    const message = document.getElementById("successMessage");

    if (staff === "") {
        message.style.color = "#dc2626";
        message.innerText = "Please select a staff member.";
        return;
    }

    message.style.color = "#15803d";

    message.innerText =
        "Complaint updated successfully! Status: " + status +
        " | Assigned to: " + staff;
}