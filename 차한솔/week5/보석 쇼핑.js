//최종 수정 풀이
function solution(gems) {
	const numOfGemsType = new Set(gems).size;
	let shortestRange = [1, gems.length];

	let left = 0, right = 0;
	const gemsByMap = new Map();
	gemsByMap.set(gems[0], 1)

	while (r < gems.length) {
			if (gemsByMap.size === numOfGemsType) {
					if(shortestRange[1] - shortestRange[0] > right - left)
							shortestRange = [left + 1, right + 1]

					gemsByMap.set(gems[left], gemsByMap.get(gems[left]) - 1);

					l++;
			}
			else {
					r++;
					const right = gemsByMap.get(gems[right]);
					gemsByMap.set(gems[right], right ? right + 1 : 1);
			}
	}
	return shortestRange;
}






// 첫 번째 풀이
function solution(gems) {
  const allType = new Set(gems);
  const numsOfGemType = allType.size;

  if (numsOfGemType === 1) return [1, 1];
  if (numsOfGemType === gems.length) return [0, gems.length - 1];

  const queue = [];
  let shortest = [1, gems.length]

  for (let i = 0; i < gems.length; i++) {
		let gemList = queue.map((value) => value.gem);

    while (new Set(gemList).size === numsOfGemType) {
      const shifted = queue.shift();

      shortest = shortest[1] - shortest[0] > queue[queue.length - 1].num - shifted.num ?  [shifted.num, queue[queue.length - 1].num] : shortest
			gemList = queue.map((value) => value.gem);
    }

    queue.push({
      num: i + 1,
      gem: gems[i],
    });
  }

  return shortest;
}
