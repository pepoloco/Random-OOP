function ex1() {
  const curYear = new Date();
  const year = curYear.getFullYear();
  const month = curYear.getMonth();
  const day = curYear.getDate();
  const prevYear = new Date(year - 1);
  Array.prototype.map = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(this[i]) + "🟦";
    }
    return arr;
  };
}
ex1();
////////////////////////////////////////////////////////////////
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
new Date().lastYear();
