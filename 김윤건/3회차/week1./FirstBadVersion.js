var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let start = 0;
      let end = n;

      while(start <= end) {
          const mid = Math.floor((start + end) / 2);
          const next = mid + 1;

          if (!isBadVersion(mid) && isBadVersion(next)) return next;

          if (!isBadVersion(mid)) {
              start = mid + 1;
          } else {
              end = mid - 1;
          }
      }
  };
};
