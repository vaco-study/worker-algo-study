/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    if (new Set(fruits).size <= 2) return fruits.length;

    const baskets = new Map();
    let left = 0;
    let max = 0;

    for (let right = 0; right < fruits.length; right++) {
        const fruit = fruits[right];
        baskets.set(fruit, baskets.get(fruit) + 1 || 0);

        while (baskets.size > 2) {
            const prevFruit = fruits[left];

            if (baskets.get(prevFruit) === 0) {
                baskets.delete(prevFruit);
                console.log(baskets)
            } else {
                baskets.set(prevFruit, baskets.get(prevFruit) - 1);
            }
            left++;
        }

        max = Math.max(max, right - left + 1);
    }

    return max;
};
