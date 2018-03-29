function sumItems(input_array) {
  return input_array.reduce((result, num) => {
    return result + (Array.isArray(num) ? sumItems(num) : num)
  }, 0);
};

module.exports = sumItems;
