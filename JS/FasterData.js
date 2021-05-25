$.ajax({
        data: 'GET',
        url: 'https://ncovi.huynhhieu.com/api.php?code=external&fbclid=IwAR3JhX26KhvZmG3rUECy8UPfgkH0snH2EArpNdXXkNucXDLAPIQj1DbmaEk',
        success: function(data)
        {
            var ontT ='';
            var ontX ='';
            var ontY = '';
            var result = JSON.parse(data);
            var virus_data_fast = '';
            $.each(result.data, function (key, value) {

                if(parseInt(value.cases, 100) < 100000){
                    ontT = value.cases
                }
                else {
                    ontT = '<span style="color: steelblue"><B>'+value.cases +'</B></span>'
                }

                if(value.deaths < 100000){
                    ontX = value.deaths
                }
                else {
                    ontX = '<span style="color: red"><B>'+value.deaths+'</B></span>'
                }

                if(value.recovered < 100000){
                    ontY = value.recovered
                }
                else {
                    ontY = '<span style="color: green"><B>'+value.recovered+'</B></span>'
                }

                virus_data_fast += '<tr>';
                virus_data_fast += '<td><b> '+value.country+' </b></td>';
                virus_data_fast += '<td> '+ontT+' </td>';
                virus_data_fast += '<td> '+ontX+' </td>';
                virus_data_fast += '<td> '+ontY+' </td>';
            });
            $('#virus_fast').append(virus_data_fast);

        },

    });