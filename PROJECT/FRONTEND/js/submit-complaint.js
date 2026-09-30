/* =========================
   IMAGE PREVIEW
========================= */

document
    .getElementById("image")
    .addEventListener("change", function () {

        const file = this.files[0];

        const preview =
            document.getElementById("imagePreview");

        preview.innerHTML = "";

        if (file) {

            const image =
                document.createElement("img");

            image.src =
                URL.createObjectURL(file);

            preview.appendChild(image);
        }

    });


/* =========================
   SUBMIT COMPLAINT
========================= */

document
    .getElementById("complaintForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const title =
            document.getElementById("title").value;

        const category =
            document.getElementById("category").value;

        const location =
            document.getElementById("location").value;

        const description =
            document.getElementById("description").value;

        const priority =
            document.getElementById("priority").value;


        if (
            title === "" ||
            category === "" ||
            location === "" ||
            description === "" ||
            priority === ""
        ) {

            alert("Please fill all required fields.");

            return;
        }


        /* Generate complaint ID */

        const complaintNumber =
            Math.floor(100 + Math.random() * 900);

        const complaintId =
            "CMP" + complaintNumber;


        const success =
            document.getElementById("successMessage");


        success.style.display = "block";


        success.innerHTML =
            "✅ Complaint submitted successfully!<br>" +
            "Your Complaint ID is: <strong>" +
            complaintId +
            "</strong>";


        /* Scroll to message */

        success.scrollIntoView({
            behavior: "smooth"
        });


        /* Clear form after submission */

        setTimeout(function () {

            document
                .getElementById("complaintForm")
                .reset();

            document
                .getElementById("imagePreview")
                .innerHTML = "";

        }, 3000);

    });


/* =========================
   CLEAR FORM
========================= */

function clearForm() {

    document
        .getElementById("complaintForm")
        .reset();


    document
        .getElementById("imagePreview")
        .innerHTML = "";


    document
        .getElementById("successMessage")
        .style.display = "none";
}