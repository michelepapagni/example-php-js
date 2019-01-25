$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Boolean/example/database.php',
        method: 'GET',
        success: function(data)
        {
            var database = JSON.parse(data);

            var ctx = $('.line-chart');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                    datasets: [{
                        label: "Andamento Vendite",
                        backgroundColor: 'lightcoral',
                        borderColor: 'lightgrey',
                        data: database,
                    }]
                }
            });
        },
        error: function()
        {
            alert('Si è verificato un errore');
        }
    })
});

// var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
//
// $(document).ready(function() {
//
//     var database = $('.line-chart').data('database');
//
//     var ctx = $('.line-chart');
//     var chart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: months,
//             datasets: [{
//                 label: "Andamento Vendite",
//                 backgroundColor: 'lightcoral',
//                 borderColor: 'lightgrey',
//                 data: database,
//             }]
//         }
//     });
// });
