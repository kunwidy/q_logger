// Konfigurasi default untuk Chart.js
const polarChartConfig = {
    defaultFontColor: '#333',
    defaultFontSize: 12,
    responsive: true,
    maintainAspectRatio: false,
};

// Daftar warna
const colorList = [
    'rgba(75, 192, 192, 0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
];

// Data
const polarChartData = {
    labels: ['va', 'vb', 'vc', 'la', 'lb', 'lc'],
    datasets: colorList.map((color, index) => ({
        label: `Dataset ${index + 1}`,
        backgroundColor: color,
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1),
    })),
};

// Create the chart
const ctxPolar = document.getElementById('myPolarChart').getContext('2d');
const myPolarChart = new Chart(ctxPolar, {
    type: 'polarArea',
    data: polarChartData,
    options: polarChartConfig,
});
