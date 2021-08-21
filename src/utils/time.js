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
  const digit = M < 10 ? 0 : ""; // to ensure the format XX in month

  return `${D}/${digit}${M}/${Y} - ${h}:${m}:${s}`;
}

module.exports = timestamp;
