import { createPieChart } from "../js/charts/piechart.js";
import { createBarChart } from "../js/charts/barchart.js";

var dataUrl = "../data/data.json";
var currentChart = null; // Almacena el gráfico actual

document.addEventListener("DOMContentLoaded", function() {
  console.log("Inicio del archivo main.js");

  document.getElementById("chartOptions").addEventListener("change", function() {
    console.log("Opción seleccionada:", this.value);

    var selectedOption = this.value;

    if (currentChart) {
      console.log("GRAFICO DESTRUIDO");
      currentChart.destroy(); // Eliminar el gráfico existente antes de crear uno nuevo
      currentChart = null; 
    }
    if (selectedOption === "piechart") {
      currentChart = createPieChart(); // Crear gráfico
    } else if (selectedOption === "barchart") {
      currentChart = createBarChart(); 
    }
  });

  console.log("Fin del archivo main.js");
});