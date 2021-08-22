/**
 * @param {Number} x to add a zero in the front
 * @description
 * to ensure the format XX when x < 10
 *  */
function digit(x) {
  return x < 10 ? 0 : "";
}

/**
 *
 * @description
 * returns a timestamp string formatted
 * from the Date() object JavaScript
 */

async function timestamp() {
  const date = new Date();
  const D = date.getDate();
  const M = date.getMonth() + 1; // getMonth() returns an integer from 0 to 11
  const Y = date.getFullYear();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  // prettier-ignore
  return `${digit(D)}${D}/${digit(M)}${M}/${Y} - ${digit(h)}${h}:${digit(m)}${m}:${digit(s)}${s}`;
}

module.exports = timestamp;
