var dataUrl = "../data/data.json";

console.log("Inicio del archivo main.js");

document.getElementById("chartOptions").addEventListener("change", function() {
  console.log("Opción seleccionada:", this.value);
  
  var selectedOption = this.value;
  if (selectedOption === "barchart") {
    createBarChart();
  } else if (selectedOption === "piechart") {
    createPieChart();
  }
});

console.log("Fin del archivo main.js");
