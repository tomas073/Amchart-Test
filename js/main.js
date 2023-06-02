import { createPieChart } from "../js/charts/piechart.js";
import { createBarChart } from "../js/charts/barchart.js";

var dataUrl = "../data/data.json";
export var currentChart = null; // Variable para almacenar el gráfico actual

document.addEventListener("DOMContentLoaded", function() {
  console.log("Inicio del archivo main.js");

    document.getElementById("chartOptions").addEventListener("change", function() {
    console.log("Opción seleccionada:", this.value);
  
    var selectedOption = this.value;
    if (selectedOption === "piechartdiv") {
      if (currentChart) {
        currentChart.remove(); 
      }
      document.getElementById("barchartdiv").innerHTML = ""; // Limpiar el contenido del contenedor de barchart
      currentChart = createPieChart(); // Crear el nuevo gráfico
    } else if (selectedOption === "barchartdiv") {
      if (currentChart) {
        currentChart.remove(); // Eliminar el gráfico existente
      }
      document.getElementById("piechartdiv").innerHTML = ""; // Limpiar el contenido del contenedor de piechart
      currentChart = createBarChart(); // Crear el nuevo gráfico
    }    
  });

  console.log("Fin del archivo main.js");
});
