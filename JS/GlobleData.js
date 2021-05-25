$.getJSON("https://disease.sh/v2/all", function (corona)
{
    //Dữ liệu cho box Thế Giới
    {
        document.getElementById('TG1').innerHTML ='+ Số ca nhiễm mới: ' + corona.todayCases;
        document.getElementById('TG1.1').innerHTML ='+ Tổng số ca nhiễm: ' + corona.cases;
        document.getElementById('TG2').innerHTML ='+ Số người chết mới: ' +corona.todayDeaths;
        document.getElementById('TG2.2').innerHTML ='+Tổng số người chết: ' +corona.deaths;
        document.getElementById('TG3.3').innerHTML ='+Tổng số người phục hồi: ' +corona.recovered;
    }


});
