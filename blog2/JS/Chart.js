// $.getJSON("https://api.covid19api.com/summary", function (corona)
// {
//
//
//     var ctx = document.getElementById('myChart').getContext('2d');
//     var chart = new Chart(ctx, {
//         // The type of chart we want to create
//         type: 'line',
//
//         // The data for our dataset
//         data: {
//             labels: ['Dịch bùng phát', '7-3 (100.000 ca)','27-3 (500.000 ca)', '3-4 (1.000.000 ca)', '9-4 (1.500.000 ca)', '15-4 (2.000.000 ca)', '22-4 (2.500.000 ca)', 'Hiện tại (' + corona["Global"].TotalConfirmed+')'],
//             datasets: [{
//                 label: 'Biểu đồ tình hình dịch bệnh qua từng mốc',
//                 backgroundColor: 'rgb(178 34 34)',
//                 borderColor: 'rgb(245 245 245)',
//                 data: [0, 100000, 500000, 1000000, 1500000, 2000000, 2500000, corona["Global"].TotalConfirmed]
//             }]
//         },
//
//         // Configuration options go here
//         options: {}
//     });
// });

$.getJSON("https://corona.lmao.ninja/v2/all", function (corona)
{


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['Dịch bùng phát', '7-3 (100.000 ca)','27-3 (500.000 ca)', '3-4 (1.000.000 ca)', '9-4 (1.500.000 ca)', '15-4 (2.000.000 ca)', '22-4 (2.500.000 ca)','27-4 (3.000.000 ca)', 'Hiện tại (' + corona.cases+')'],
            datasets: [{
                label: 'Biểu đồ tình hình dịch bệnh qua từng mốc',
                backgroundColor: 'rgb(178 34 34)',
                borderColor: 'rgb(245 245 245)',
                data: [0, 100000, 500000, 1000000, 1500000, 2000000, 2500000,3000000, corona.cases]
            }]
        },

        // Configuration options go here
        options: {}
    });
});