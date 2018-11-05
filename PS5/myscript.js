$(document).ready(function(){

  $("button#roll_up").click(function() {
    var table_items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appIu3c25BoxmZamM/places?api_key=keyWe7rvHMqQuDgB0";
    var table_dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               table_items = [];
                   table_items.push(value.fields.Name);
                   table_items.push(value.fields.Eng_Name);
                   table_items.push(value.fields.Type);
                   table_items.push(value.fields.District);
                   table_items.push(value.fields.Location);
                   table_dataSet.push(table_items);
                   console.log(table_items);
            }); // end .each
            console.log(table_dataSet);

         $('#table').DataTable( {
             data: table_dataSet,
             retrieve: true,
             columns: [
                 { title: "Name",
                   defaultContent:""},
                { title: "Eng Name",
                   defaultContent:""},
                 { title: "Type",
                     defaultContent:"" },
                 { title: "District",
                   defaultContent:"" },
                 { title: "Location",
                   defaultContent:""},

          ]
      });
    });//end.getJSON

  });//end button

});//document ready
