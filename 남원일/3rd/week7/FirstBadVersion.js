var solution = function (isBadVersion) {
  return function (n) {
    let start = 1;
    let end = n;
    let half = Math.ceil((start + end) / 2);

    if (isBadVersion(1)) return 1;
    if (isBadVersion(2)) return 2;

    while (end - start !== 1) {
      if (isBadVersion(half)) {
        end = half;
      } else {
        start = half;
      }

      half = Math.floor((start + end) / 2);
    }

    return end;
  };
};
