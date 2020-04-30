$.getJSON("https://corona.lmao.ninja/all", function (corona)
{
    $.each(corona, function (key, value) {
        document.getElementById('TG1').innerHTML ='+ Số ca nhiễm: ' + corona.cases;
        document.getElementById('TG2').innerHTML ='+ Số người chết: ' + corona.deaths;
        document.getElementById('TG3').innerHTML ='+ Số người phục hồi: ' + corona.recovered;
        console.log(value.cases)
    });
});