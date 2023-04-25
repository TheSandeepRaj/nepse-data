window.onload = function() {
    $.getJSON("data/Nepse 2020-2022.json", (data) =>{
        createGraphic(data);
    });
}

function createGraphic(data){
   var nepseData = '';
   var i = 0;
   $.each(data, function(key,value){
    nepseData += '<tr>';
    nepseData += '<td>' + value.Date+ '</td>';
    nepseData += '<td>' + value.Open+ '</td>';
    nepseData += '<td>' + value.High+ '</td>';
    nepseData += '<td>' + value.Low+ '</td>';
    nepseData += '<td>' + value.Close+ '</td>';
    nepseData += '<td>' + value.Change+ '</td>';
    nepseData += '<td>' + value.Per_Change+ '</td>';
    nepseData += '<td>' + value.Turnover+ '</td>';
    nepseData += '</tr>';
    // i = i + 1 ;
   });
   $('#dataTable').append(nepseData);
}
