module.exports = function reverse (n) {
  if (n < 0) {
    n = n * (-1);
  }
  const str = n.toString();
  return [...str].reverse().join('');
}
