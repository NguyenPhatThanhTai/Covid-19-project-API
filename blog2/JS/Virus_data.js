    $(document).ready(function(){


        $.getJSON("https://api.covid19api.com/summary", function (corona)
        {
            var Maxcase = 0;
            var Conflus = '';
            var Deaflus = '';
            var Recflus = '';
            var virus_data = '';
            var Treatment = '';
            $.each(corona.Countries, function (key, value) {
                Treatment = value.TotalConfirmed - (value.TotalDeaths + value.TotalRecovered);
                if(value.NewConfirmed > 0){
                    Conflus = '+ '+value.NewConfirmed;
                }
                else {
                    Conflus = '';
                }
    
                if(value.NewDeaths > 0){
                    Deaflus ='+ '+value.NewDeaths;
                }
                else {
                    Deaflus = '';
                }
    
                if(value.NewRecovered > 0){
                    Recflus ='+ '+value.NewRecovered;
                }
                else{
                    Recflus = '';
                }
    
                if(value.NewConfirmed > 100){
                    Conflus = '<span style="color: steelblue"><B>+ '+value.NewConfirmed+'</B></span>'
                }
    
                if(value.NewDeaths > 100){
                    Deaflus = '<span style="color: red"><b>+ '+value.NewDeaths+'</b></span>'
                }
    
                if(value.NewRecovered > 100){
                    Recflus = '<span style="color: green"><b>+ '+value.NewRecovered+'</b></span>'
                }
    
                virus_data += '<tr>';
                virus_data += '<td><B> '+value.Country+' </B></td>';
                virus_data += '<td> '+Conflus+' </td>';
                virus_data += '<td> '+value.TotalConfirmed+' </td>';
                virus_data += '<td> '+Deaflus+' </td>';
                virus_data += '<td> '+value.TotalDeaths+' </td>';
                virus_data += '<td> '+Treatment+' </td>';
                virus_data += '<td> '+Recflus+' </td>';
                virus_data += '<td> '+value.TotalRecovered+' </td>';
    
                //Dữ liệu box Việt Nam
                if(value.Country === 'Viet Nam')
                {
                    cou = value.Country;
                    VNInewcase =value.NewConfirmed;
                    VNIcase =value.TotalConfirmed;
                    VNInewdea = value.NewDeaths;
                    VNIdea = value.TotalDeaths;
                    VNInewcover = value.NewRecovered;
                    VNIcover = value.TotalRecovered;
                    document.getElementById("VNInewcase").innerHTML ='+ Số ca nhiễm mới:  '+ VNInewcase;
                    document.getElementById("VNIcase").innerHTML ='+ Tổng số ca nhiễm:  '+ VNIcase;
                    document.getElementById("VNInewdea").innerHTML ='+ Số người chết mới:  '+VNInewdea;
                    document.getElementById("VNIdea").innerHTML ='+ Tổng số người chết:  '+VNIdea;
                    document.getElementById("VNInewcover").innerHTML ='+ Số người phục hồi mới: '+VNInewcover;
                    document.getElementById("VNIcover").innerHTML ='+ Tổng số người phục hồi: '+VNIcover;
                }
    
                //Dữ liệu cho box Thế Giới
                {
                //     document.getElementById('TG1').innerHTML ='+ Số ca nhiễm mới: ' + corona["Global"].NewConfirmed;
                //     document.getElementById('TG1.1').innerHTML ='+ Tổng số ca nhiễm: ' + corona["Global"].TotalConfirmed;
                //     document.getElementById('TG2').innerHTML ='+ Số người chết mới: ' +corona["Global"].NewDeaths;
                //     document.getElementById('TG2.2').innerHTML ='+Tổng số người chết: ' +corona["Global"].TotalDeaths;
                    document.getElementById('TG3').innerHTML ='+ Số người phục hồi mới: ' +corona["Global"].NewRecovered;
                //     document.getElementById('TG3.3').innerHTML ='+Tổng số người phục hồi: ' +corona["Global"].TotalRecovered;
                 }
            });
    
            //đem cái virus_data vào table
            $('#virus').append(virus_data);
        })



        // $.ajax({
        //     data: 'GET',
        //     url: 'https://ncovi.huynhhieu.com/api.php?code=external&fbclid=IwAR3JhX26KhvZmG3rUECy8UPfgkH0snH2EArpNdXXkNucXDLAPIQj1DbmaEk',
        //     success: function(data)
        //     {
        //
        //         //Globe data
        //         var result = JSON.parse(data);
        //         var virus_data = '';
        //         $.each(result.data, function (key, value) {
        //             virus_data += '<tr>';
        //             virus_data += '<td> '+value.country+' </td>';
        //             virus_data += '<td> '+value.cases+' </td>';
        //             virus_data += '<td> '+value.deaths+' </td>';
        //             virus_data += '<td> '+value.recovered+' </td>';
        //         });
        //         $('#virus_fast').append(virus_data);
        //
        //     },
        //
        // });

    });
    
    
    
    
    
    
