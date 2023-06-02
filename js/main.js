import { createPieChart } from "../js/charts/piechart.js";
import { createBarChart } from "../js/charts/barchart.js";

var dataUrl = "../data/data.json";

document.addEventListener("DOMContentLoaded", function() {
  console.log("Inicio del archivo main.js");

  document.getElementById("chartOptions").addEventListener("change", function() {
    console.log("Opción seleccionada:", this.value);
  
    var selectedOption = this.value;
    if (selectedOption === "piechartdiv") {
      createPieChart();
    } else if (selectedOption === "barchartdiv") {
      createBarChart();
    }    
  });

  console.log("Fin del archivo main.js");
});

