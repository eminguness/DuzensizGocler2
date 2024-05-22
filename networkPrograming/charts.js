var ctx = document.getElementById('line-chart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar', // Çizgi grafiği türü
    data: {
        labels: ['2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023'],
        datasets: [{
            label: 'Göç İstatistikleri',
            data: [5302,4657,5147,5973,3689,5048,6532,4485,4832,3354,6235,3212],
            backgroundColor: ["black","brown","blue","yellow","green","grey","purple","pink","dark-blue"],
            borderColor: 'rgba(0, 0, 0,1)', // Çizgi rengi
            borderWidth: 2, // Çizgi kalınlığı
            fill: false // Alan doldurma
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});