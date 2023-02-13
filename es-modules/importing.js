// Import sker med nyckelordet import.
// Antingen anger man vilka delar man vill importera.
import { sum, PI } from "./esmodule.js"
console.log(sum(3, 4) * PI)

// Eller så importerar man ALLT i modulen med *
import * as mymodule from "./esmodule.js"

console.log(mymodule.sum(3, 7))
