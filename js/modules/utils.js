// Set themes
export function setThemes(root) {
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  console.log("Objeto root:", root);
}

// Add cursor
export function addCursor(chart) {
  var cursor = chart.set("cursor", am5xy.XYCursor.new(chart.parent, {}));
  if (cursor) {
    cursor.lineY.set("visible", false);
    console.log("Objeto cursor:", cursor);
  } else {
    console.error("Error: Cursor not defined");
  }
}

// Función para cargar los datos desde un archivo JSON
export function loadDataFromJson() {
  return   fetch("/data/data.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("Objeto json:", data);
      return data;
    })
    .catch(function(error) {
      console.error("Error loading data:", error);
    });
}


  
  