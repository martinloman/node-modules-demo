// Import sker med funktionen require.
// Antingen anger man vilka delar man vill importera.
const { sum, PI } = require("./commonjs")

console.log(sum(2, 3) * PI)

// Eller så "requirar" man ALLT i modulen
const common = require("./commonjs")

console.log(common.sum(2, 3))
