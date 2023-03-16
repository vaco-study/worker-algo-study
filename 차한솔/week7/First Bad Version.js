/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) return n;

    let start = 1;
    let end = n;
    let badVersion;

    while (start <= end) {
      const mid = ((start + end) / 2) | 0;

      if (isBadVersion(mid)) {
        badVersion = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return badVersion;
  };
};
