import { setThemes, addCursor } from "../modules/utils.js";

export function createBarChart() {
  // Elimina (si existe) el gráfico existente antes de crear uno nuevo
  am5.array.each(am5.registry.rootElements, function(root) {
    if (root.dom.id === "chartContainer") {
      root.dispose();
    }
  });
  return new Promise((resolve, reject) => {
  am5.ready(function() {

    // Crear elemento root
    var root = am5.Root.new("chartContainer");

    // Set themes
    setThemes(root);

    // Create chart
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true
    }));

    // Add cursor
    addCursor(root, chart);

    // Create axes
    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15
    });

    xRenderer.grid.template.setAll({
      location: 1
    })

    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "country",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

    // Create series
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "country",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));

    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
    series.columns.template.adapters.add("fill", function(fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function(stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    // Carga de datos desde JSON
    fetch("/data/data.json")
      .then(function(response) {
        console.log("JSON request successful");
        return response.json();
      })
      .then(function(jsonData) {
        console.log("JSON data loaded:", jsonData);

        // Set column properties
        series.columns.template.setAll({
          width: am5.p100,
          strokeOpacity: 0,
          tooltipText: "{categoryX}: {valueY}",
          tooltipY: 0,
          templateField: "columnSettings"
        });

        console.log("JSON data:", jsonData);

        xAxis.data.setAll(jsonData);
        series.data.setAll(jsonData);

        // Make stuff animate on load
        series.appear(1000);
        chart.appear(1000, 100);

        resolve({
          chart: chart,
          type: "barchart"
        });

      })
      .catch(function(error) {
        console.error("Error loading data:", error);
      });
  });
});
}