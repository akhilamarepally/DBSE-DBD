// =========================
// COMPLAINT CATEGORY CHART
// =========================

const categoryCtx =
    document.getElementById("categoryChart");


new Chart(categoryCtx, {

    type: "bar",

    data: {

        labels: [
            "Waste",
            "Water",
            "Air",
            "Noise",
            "Other"
        ],

        datasets: [

            {
                label: "Complaints",

                data: [
                    75,
                    45,
                    35,
                    25,
                    20
                ]
            }

        ]

    },

    options: {

        responsive: true,

        scales: {

            y: {
                beginAtZero: true
            }

        }

    }

});



// =========================
// COMPLAINT STATUS CHART
// =========================

const statusCtx =
    document.getElementById("statusChart");


new Chart(statusCtx, {

    type: "doughnut",

    data: {

        labels: [
            "Pending",
            "In Progress",
            "Resolved"
        ],

        datasets: [

            {
                data: [
                    82,
                    41,
                    122
                ]
            }

        ]

    },

    options: {

        responsive: true

    }

});