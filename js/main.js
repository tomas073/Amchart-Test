import { createBarChart } from "../js/charts/barchart.js";
import { createPieChart } from "../js/charts/piechart.js";
import { createChartDiv } from "../prueba/chartdiv.js";

var dataUrl = "../data/data.json";

document.addEventListener("DOMContentLoaded", function() {
  console.log("Inicio del archivo main.js");

  document.getElementById("chartOptions").addEventListener("change", function() {
    console.log("Opción seleccionada:", this.value);
  
    var selectedOption = this.value;
    if (selectedOption === "barchartdiv") {
      createBarChart();
    } else if (selectedOption === "piechartdiv") {
      createPieChart();
    } else if (selectedOption === "chartdiv") {
      createChartDiv();
    }    
  });

  console.log("Fin del archivo main.js");
});

