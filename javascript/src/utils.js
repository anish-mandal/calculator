/**
 * Capitalize the first letter of a word.
 * @function
 * @param {string} word
 * @returns {string} `word` with the first letter capitilized - `Word`
 */
export function capitalizeFirstLetter(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

console.assert(capitalizeFirstLetter("sometime"), "Sometime");
