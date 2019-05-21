// from data.js
var tableData = data;

var tbody =d3.select("tbody");
// YOUR CODE HERE!
//testing code below- do not use. 
var dateInput=d3.select("#datetime");
var cityInput=d3.select("#city");
var stateInput=d3.select("#date");
var countryInput=d3.select("#country");
var shapeInput=d3.select("#shape");

//references to button

var submit=d3.select("#filter-btn");
var inputText=d3.select("#datetime") 



tableData.forEach((sighting) => {
    let row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  function changeHandler(){
      d3.event.preventDefault();
      console.log(inputText.property("value"));
      var new_tb=tableData.filter(sighting=>sighting.datetime===inputvalue);
      displayData(new_tb)
    }
//adding event listeners
submit.on("change",changeHandler)
inputText.on("change",changeHandler)
