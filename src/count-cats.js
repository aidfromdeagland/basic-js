module.exports = function countCats(backyard) {
  return backyard ? backyard.flat().filter(x => x==='^^').length : 0;
};
