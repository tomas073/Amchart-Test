export function createPieChart() {
    console.log("piechart");
  }
  am5.ready(function() {

    // Create root element
    var root = am5.Root.new("piechartdiv");
    
    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
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
    
// Load data from JSON file
fetch("/data/data.json")
  .then(function(response) {
    console.log("JSON request successful");
    return response.json();
  })
  .then(function(jsonData) {
    console.log("JSON data loaded:", jsonData);

    console.log("JSON data:", jsonData);

    series.data.setAll(jsonData);

    // Make stuff animate on load
    series.appear(1000, 100);
  })
  .catch(function(error) {
    console.error("Error loading data:", error);
  });
    
    }); 