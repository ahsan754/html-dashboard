// script.js

// Wait for the DOM to fully load before initializing the charts
document.addEventListener('DOMContentLoaded', function() {
    // Check if the canvas elements exist before initializing the charts
    var invoicesCanvas = document.getElementById('invoicesChart');
    var salesForecastCanvas = document.getElementById('salesForecastChart');

    if (invoicesCanvas && salesForecastCanvas) {
        // Initialize the Invoices chart
        var ctxInvoices = invoicesCanvas.getContext('2d');
        var invoicesChart = new Chart(ctxInvoices, {
            type: 'line',
            data: {
                labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                    label: 'This week',
                    data: [12000, 15000, 17000, 14000, 13000, 16000, 18000],
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false
                }, {
                    label: 'Last week',
                    data: [10000, 14000, 16000, 12000, 11000, 15000, 17000],
                    borderColor: 'rgb(153, 102, 255)',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Invoices'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        });

        // Initialize the Sales Forecast chart
        var ctxSalesForecast = salesForecastCanvas.getContext('2d');
        var salesForecastChart = new Chart(ctxSalesForecast, {
            type: 'bar',
            data: {
                labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                    label: 'Weighted',
                    data: [12000, 14000, 15000, 13000, 16000, 17000, 18000],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }, {
                    label: 'Won',
                    data: [10000, 12000, 13000, 11000, 14000, 15000, 16000],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Sales Forecast'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    } else {
        console.error('Canvas elements not found for the charts.');
    }
});
