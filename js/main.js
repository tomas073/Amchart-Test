import { createPieChart } from "../js/charts/piechart.js";
import { createBarChart } from "../js/charts/barchart.js";

document.addEventListener("DOMContentLoaded", function() {
  console.log("Inicio del archivo main.js");

  document.getElementById("chartOptions").addEventListener("change", function() {
    console.log("Opción seleccionada:", this.value);

    var selectedOption = this.value;
    // Seleccionar el contenedor de gráficos
    var chartContainer = document.querySelector(".chart-container"); 

    if (selectedOption === "piechart") {
      createPieChart(chartContainer).then(function(chartData) {
        // Obtener el objeto chart si lo necesitas
        var currentChart = chartData.chart;
      }).catch(function(error) {
        console.error("Error al crear el gráfico de torta:", error);
      });
    } else if (selectedOption === "barchart") {
      createBarChart(chartContainer).then(function(chartData) {
        var currentChart = chartData.chart;
      }).catch(function(error) {
        console.error("Error al crear el gráfico de barras:", error);
      });
    }
  });

  console.log("Fin del archivo main.js");
});

