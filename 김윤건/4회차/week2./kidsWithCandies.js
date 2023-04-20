var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  const result = [];

  candies.forEach(candy => {
      const canBeMax = candy + extraCandies >= max;
      
      result.push(canBeMax);
  });

  return result;
};
