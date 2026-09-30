const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const statusFilter =
    document.getElementById("statusFilter");

const table =
    document.getElementById("complaintTable");


function filterComplaints() {

    const search =
        searchInput.value.toLowerCase();

    const category =
        categoryFilter.value;

    const status =
        statusFilter.value;


    const rows =
        table.getElementsByTagName("tr");


    for (let row of rows) {

        const text =
            row.innerText.toLowerCase();

        const rowCategory =
            row.cells[2]?.innerText;

        const rowStatus =
            row.cells[6]?.innerText;


        const matchesSearch =
            text.includes(search);


        const matchesCategory =
            category === "all" ||
            rowCategory === category;


        const matchesStatus =
            status === "all" ||
            rowStatus === status;


        if (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    }

}


searchInput.addEventListener(
    "input",
    filterComplaints
);

categoryFilter.addEventListener(
    "change",
    filterComplaints
);

statusFilter.addEventListener(
    "change",
    filterComplaints
);