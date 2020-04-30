function Weather() {


var name = document.getElementById("NameCountry").value;
$.ajax({

    data: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=cd90f00b12ce84d2f0a8cd67484eb33c',
    success: function(We)
    {
        var Temp = We.main.temp - 269;
        var TempMax = We.main.temp_max - 269;
        var TempMin = We.main.temp_min - 269;
        var feels =  We.main.feels_like - 269;
        document.getElementById("temp").innerHTML =parseInt(Temp) + "°C";
        document.getElementById("Feels").innerHTML =parseInt(feels)+ "°C";
        document.getElementById("tempX").innerHTML =parseInt(TempMax) + "°C";
        document.getElementById("tempY").innerHTML =parseInt(TempMin) + "°C";
        document.getElementById("Am").innerHTML =We.main.humidity + "%";
        document.getElementById("AVGWinds").innerHTML =We.wind.speed + "m/s";
        document.getElementById("Clouds").innerHTML =We.clouds.all + "%";
    },

});

}



// var name = document.getElementById("NameCountry").value;
//
// $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=cd90f00b12ce84d2f0a8cd67484eb33c", function (We){
//     var Temp = We.main.temp - 269;
//     var TempMax = We.main.temp_max - 269;
//     var TempMin = We.main.temp_min - 269;
//     var feels =  We.main.feels_like - 269;
//     document.getElementById("temp").innerHTML =parseInt(Temp) + "°C";
//     document.getElementById("Feels").innerHTML =parseInt(feels)+ "°C";
//     document.getElementById("tempX").innerHTML =parseInt(TempMax) + "°C";
//     document.getElementById("tempY").innerHTML =parseInt(TempMin) + "°C";
//     document.getElementById("Am").innerHTML =We.main.humidity + "%";
//     document.getElementById("AVGWinds").innerHTML =We.wind.speed + "m/s";
//     document.getElementById("Clouds").innerHTML =We.clouds.all + "%";
//
//
//
// });