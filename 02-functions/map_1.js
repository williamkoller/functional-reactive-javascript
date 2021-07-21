Array.prototype.log = function () {
  console.log(this);
}

const isArray = [1, 2, 3, 4, 5, 6];


const array = isArray.map((key) => {
  return key * 2;
})

array.log();