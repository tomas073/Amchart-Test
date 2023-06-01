import { setThemes, addCursor, loadDataFromJson } from "../modules/utils.js";

export function createBarChart() {
  // Create root element
  console.log("Creating root element");
  var root = am5.Root.new("barchartdiv");

  // Set themes
  console.log("Setting themes");
  setThemes(root);

  // Create chart
  console.log("Creating chart");
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    pinchZoomX: true
  }));

  // Add cursor
  console.log("Adding cursor");
  addCursor(chart);

  // Create axes
  console.log("Creating axes");
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
  xRenderer.labels.template.setAll({
    rotation: -90,
    centerY: am5.p50,
    centerX: am5.p100,
    paddingRight: 15
  });

  xRenderer.grid.template.setAll({
    location: 1
  });

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

  // Load data from JSON file
  console.log("Carga de datos desde archivo JSON");
  loadDataFromJson()
    .then(function(data) {
      console.log("Data loaded:", data);
      xAxis.data.setAll(data);
      series.data.setAll(data);

      // Make stuff animate on load
      series.appear(1000);
      chart.appear(1000, 100);
    });
}



