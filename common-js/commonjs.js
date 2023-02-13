function sum(a, b) {
  return a + b
}

const PI = 3.14

//Export sker genom att sätta module.exports
//till ett objekt med funktioner och värden.
module.exports = {
  sum,
  PI,
}
