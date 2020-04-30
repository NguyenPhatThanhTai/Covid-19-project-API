$(document).ready(function(){

    $.getJSON("https://api.covid19api.com/summary", function (corona)
    {
        var Maxcase = 0;
        var CouCase ='';
        var Maxdea = 0;
        var CouDea ='';
        var MaxRec = 0;
        var CouRec ='';
        $.each(corona.Countries, function (key, value) {
              if(value.NewConfirmed > Maxcase){
                  Maxcase = value.NewConfirmed
                  CouCase = value.Country
              }
              if(value.NewDeaths > Maxdea){
                  Maxdea = value.NewDeaths
                  CouDea = value.Country
              }
              if(value.NewRecovered > MaxRec){
                  MaxRec = value.NewRecovered
                  CouRec = value.Country
              }
              document.getElementById("Maxcase").innerHTML ='<span style="color: blue">' + CouCase +'( '+ Maxcase +' ca nhiễm mới )'+'</span>'
              document.getElementById("Maxdea").innerHTML =CouDea +'( '+ Maxdea +' ca chết mới )'
              document.getElementById("MaxRec").innerHTML ='<span style="color: green">' + CouRec +'( '+ MaxRec +' ca hồi phục mới )'+'</span>'

        });
    })
});







