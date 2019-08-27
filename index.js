const oddNumbers = nums => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      total += nums[i];
    }
  }
  return total;
};

const result = oddNumbers([5, 7, 6, 3, 4]);
console.log(result);
