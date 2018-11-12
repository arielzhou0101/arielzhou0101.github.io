$("button#roll_up").click(function() {
  var table_items = [];
  var i=0;
  var airtable_read_endpoint = "https://api.airtable.com/v0/appIu3c25BoxmZamM/places?api_key=keyWe7rvHMqQuDgB0";
  var table_dataSet = [];
  $getJSON(airtable_read_endpoint, function(result){
      $.each(result.records, function(key,value){
          table_items = [];
            table_items.push(value.fileds.Name);
            table_items.push(value.fileds.Type);
            table_items.push(value.fileds.District);
            table_items.push(value.fileds.Location);
            table_items.push(value.fileds.Pic);
            table_dataSet.push(items);
            console.log(table_items);
          });
          console.log(table_dataSet);

      $('#table').Datatable({
          data: table_dataSet,
          retrieve: true,
          columns: [
              { title: "Name",
                defaultContent:"" },
              { title: "Type",
                defaultContent:"" },
              { title: "District",
                defaultContent:"" },
              { title: "Location",
                defaultContent:"" },
              { title: "Pic",
                defaultContent:"" },
          ]
      });
    });//end.getJSON

  });//end button
