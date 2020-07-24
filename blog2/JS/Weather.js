

function Weather() {
    setTimeout(checkLoad, 3000);
    if(document.getElementById("NameCountry").value === ""){
        alert("Nhập tên Tỉnh hoặc Thành Phố nè ...")
    }
    else {
        document.getElementById("testLoad").innerHTML = '<img src="Image/loading_spinner.gif">'
        var name = document.getElementById("NameCountry").value;
        $.ajax({
            data: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=cd90f00b12ce84d2f0a8cd67484eb33c',
            success: function (We) {
                var Temp = We.main.temp - 269;
                var TempMax = We.main.temp_max - 269;
                var TempMin = We.main.temp_min - 269;
                var feels = We.main.feels_like - 269;
                document.getElementById("temp").innerHTML = parseInt(Temp) + " °C";
                document.getElementById("Feels").innerHTML = parseInt(feels) + " °C";
                document.getElementById("tempX").innerHTML = parseInt(TempMax) + " °C";
                document.getElementById("tempY").innerHTML = parseInt(TempMin) + " °C";
                document.getElementById("Am").innerHTML = We.main.humidity + " %";
                document.getElementById("AVGWinds").innerHTML = We.wind.speed + " m/s";
                document.getElementById("Clouds").innerHTML = We.clouds.all + " %";
                document.getElementById("LocaName").innerHTML = We.name;
                document.getElementById("testLoad").innerHTML = "";
                document.getElementById("testLoad").value = "Done";
            },
        });
    }
}

function checkLoad() {
    var x = document.getElementById("testLoad").value;
    if (x != "Done"){
        document.getElementById("testLoad").innerHTML = "Bạn có thể đã nhập sai tên Tỉnh, Thành Phố, vui lòng thử lại có dấu hoặc không dấu";
    }
}

var x = document.getElementById("Locati");
function getLocation() {
    document.getElementById("testLoad").innerHTML = '<img src="Image/loading_spinner.gif">'
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation không hỗ trợ trình duyệt của bạn.";
    }

    function showPosition(position) {
        var Lat =  position.coords.latitude;
        var Lon =position.coords.longitude;
    $.ajax({
        data: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat='+Lat+'&lon='+Lon+'&appid=cd90f00b12ce84d2f0a8cd67484eb33c',
        success: function(We)
        {
                var Temp = We.main.temp - 269;
                var TempMax = We.main.temp_max - 269;
                var TempMin = We.main.temp_min - 269;
                var feels = We.main.feels_like - 269;
                document.getElementById("temp").innerHTML = parseInt(Temp) + " °C";
                document.getElementById("Feels").innerHTML = parseInt(feels) + " °C";
                document.getElementById("tempX").innerHTML = parseInt(TempMax) + " °C";
                document.getElementById("tempY").innerHTML = parseInt(TempMin) + " °C";
                document.getElementById("Am").innerHTML = We.main.humidity + " %";
                document.getElementById("AVGWinds").innerHTML = We.wind.speed + " m/s";
                document.getElementById("Clouds").innerHTML = We.clouds.all + " %";
                document.getElementById("LocaName").innerHTML = We.name;
                document.getElementById("testLoad").innerHTML = "";
        },
    });
    }
}




