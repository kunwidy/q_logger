// Konfigurasi default untuk Chart.js
const radarChartConfig = {
    defaultFontColor: '#333',
    defaultFontSize: 12,
    responsive: true,
    maintainAspectRatio: false,
};

// Data
const radarChartData = {
    labels: ['va', 'vb', 'vc', 'la', 'lb', 'lc'],
    datasets: [
        {
            label: 'va',
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1),
        },
        {
            label: 'vb',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1),
        },
        {
            label: 'vc',
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1),
        },
        {
            label: 'la',
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1),
        },
        {
            label: 'lb',
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1),
        },
        {
            label: 'lc',
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1),
        }
    ]
};

// Create the chart
const ctxRadar = document.getElementById('myRadarChart').getContext('2d');
const myRadarChart = new Chart(ctxRadar, {
    type: 'radar',
    data: radarChartData,
    options: radarChartConfig,
});
