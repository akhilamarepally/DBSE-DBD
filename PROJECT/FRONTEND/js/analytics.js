/* ================================
   Complaints by Category
================================ */

const categoryCtx =
    document.getElementById("categoryChart");

new Chart(categoryCtx, {

    type: "bar",

    data: {

        labels: [
            "Waste Management",
            "Water Pollution",
            "Air Pollution",
            "Noise Pollution",
            "Garbage Disposal"
        ],

        datasets: [{

            label: "Number of Complaints",

            data: [
                85,
                45,
                40,
                30,
                45
            ]

        }]

    },

    options: {

        responsive: true,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {

            y: {
                beginAtZero: true
            }

        }

    }

});


/* ================================
   Complaint Status
================================ */

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

        datasets: [{

            data: [
                82,
                41,
                122
            ]

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                position: "bottom"
            }

        }

    }

});


/* ================================
   Monthly Complaints
================================ */

const monthlyCtx =
    document.getElementById("monthlyChart");

new Chart(monthlyCtx, {

    type: "line",

    data: {

        labels: [
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep"
        ],

        datasets: [{

            label: "Complaints",

            data: [
                28,
                35,
                42,
                38,
                55,
                47
            ],

            tension: 0.3,

            fill: false

        }]

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


/* ================================
   Complaints by Location
================================ */

const locationCtx =
    document.getElementById("locationChart");

new Chart(locationCtx, {

    type: "bar",

    data: {

        labels: [
            "Bachupally",
            "Kukatpally",
            "Miyapur",
            "Chandanagar",
            "Nizampet"
        ],

        datasets: [{

            label: "Complaints",

            data: [
                60,
                50,
                45,
                35,
                55
            ]

        }]

    },

    options: {

        indexAxis: "y",

        responsive: true,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            x: {
                beginAtZero: true
            }

        }

    }

});