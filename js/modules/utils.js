// Set themes
export function setThemes(root) {
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  console.log("Objeto root: themas:", root);
}

// Add cursor
export function addCursor(root, chart) {
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  if (cursor) {
    cursor.lineY.set("visible", false);
    console.log("Objeto cursor:", cursor);
  } else {
    console.error("Error: Cursor not defined");
  }
}
