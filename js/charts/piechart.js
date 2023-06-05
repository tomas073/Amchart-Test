import { setThemes } from "../modules/utils.js";

export function createPieChart() {
  // Elimina (si existe) el gráfico existente antes de crear uno nuevo
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === "chartContainer") {
      root.dispose();
    }
  });
  return new Promise((resolve, reject) => {
    am5.ready(function () {
      // Crear elemento root
      var root = am5.Root.new("chartContainer");

      // Set themes
      setThemes(root);

      // Create chart
      var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          endAngle: 270
        })
      );

      // Create series
      var series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "country",
          endAngle: 270
        })
      );

      series.states.create("hidden", {
        endAngle: -90
      });

      // Carga de datos desde JSON
      fetch("/data/data.json")
        .then(function (response) {
          console.log("JSON request successful");
          return response.json();
        })
        .then(function (jsonData) {
          console.log("JSON data loaded:", jsonData);

          console.log("JSON data:", jsonData);

          series.data.setAll(jsonData);

          // Make stuff animate on load
          series.appear(1000, 100);

          resolve({
            chart: chart,
            type: "piechart"
          });
        })
        .catch(function (error) {
          console.error("Error loading data:", error);
          reject(error);
        });
    });
  });
}
