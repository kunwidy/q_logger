// Konfigurasi default untuk Chart.js
const barChartConfig = {
  defaultFontColor: '#333',
  defaultFontSize: 12,
  responsive: true,
  maintainAspectRatio: false,
};

// Opsi default untuk grafik batang
const barChartOptions = {
  scales: {
      x: [{
          barPercentage: 0.4, // Persentase lebar batang
          categoryPercentage: 0.5, // Persentase lebar kategori
      }],
      y: [{
          ticks: {
              beginAtZero: true,
          },
      }],
  },
};

// Data
const barChartData = {
  labels: Array.from({ length: 35 }, (_, i) => (i + 1).toString()), // Label dari 1-35
  datasets: [
      {
          label: 'Dataset 1',
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
          data: Array.from({ length: 35 }, () => Math.floor(Math.random() * 100) + 1),
      },
      {
          label: 'Dataset 2',
          backgroundColor: 'rgba(255, 99, 132, 0.8)',
          data: Array.from({ length: 35 }, () => Math.floor(Math.random() * 100) + 1),
      },
      {
          label: 'Dataset 3',
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
          data: Array.from({ length: 35 }, () => Math.floor(Math.random() * 100) + 1),
      }
  ]
};

// Create the chart
const ctxBar = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctxBar, {
  type: 'bar',
  data: barChartData,
  options: { ...barChartConfig, ...barChartOptions },
});
