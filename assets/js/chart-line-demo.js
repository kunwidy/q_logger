// Konfigurasi default untuk Chart.js
const chartConfig = {
    defaultFontColor: '#333',
    defaultFontSize: 12,
    responsive: true,
    maintainAspectRatio: false,
};

// Opsi default untuk grafik garis
const lineChartOptions = {
    scales: {
        x: [{
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
                display: true,
                labelString: 'Jam'
            }
        }],
        y: [{
            ticks: {
                beginAtZero: true,
            },
        }],
    },
};

// Data
const lineChartData = {
    labels: ['00:00', '03:00', '06:00', '09:00', '12:00'], // Ganti dengan label jam
    datasets: [
        {
            label: 'Phase A',
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            data: [65, 59, 80, 81, 56],
            fill: false,
        },
        {
            label: 'Phase B',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: [28, 48, 40, 19, 86],
            fill: false,
        },
        {
            label: 'Phase C',
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            data: [45, 25, 70, 40, 60],
            fill: false,
        },
        {
            label: 'System',
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            data: [12, 75, 30, 50, 40],
            fill: false,
        }
    ]
};

// Create the chart
const ctx = document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(ctx, {
    type: 'line',
    data: lineChartData,
    options: { ...chartConfig, ...lineChartOptions },
});
