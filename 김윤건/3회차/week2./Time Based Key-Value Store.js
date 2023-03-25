var TimeMap = function() {
  this.map = new Map();
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.map.has(key)) {
      const arr = this.map.get(key);

      arr.push([timestamp, value]);
  } else {
      this.map.set(key, [[timestamp, value]]);
  }

  return null;
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map.has(key)) return "";
  const item = this.map.get(key);

  let start = 0;
  let end = item.length;

  while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (item[mid][0] <= timestamp) {
          if (mid === item.length - 1 || item[mid + 1][0] > timestamp) {
              return item[mid][1];
          } else {
              start = mid + 1;
          }
      } else {
          end = mid - 1;
      }
  }

  return "";
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/
