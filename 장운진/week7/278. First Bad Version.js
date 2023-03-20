const solution = (isBadVersion) => {
  return (n) => {
    let left = 0;
    let right = n;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const bad = isBadVersion(mid);

      if (bad) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return right + 1;
  };
};
