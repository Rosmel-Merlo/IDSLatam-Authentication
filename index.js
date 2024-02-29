const quotes = [
  "Este",
  "es mi primera versión",
  "proyecto npm",
  "se va actualizar con el contenido adecuado"
];

/**
 * Gets a random Piñera Quote
 * @returns {string}
 */
function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = {
  randomQuote
};