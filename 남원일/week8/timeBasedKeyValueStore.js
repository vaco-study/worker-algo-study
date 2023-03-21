var TimeMap = function () {
  this.store = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  const prevData = this.store.get(key);
  if (!prevData) {
    this.store.set(key, [{ value, timestamp }]);
    return;
  }

  this.store.set(key, [...prevData, { value, timestamp }]);
};

TimeMap.prototype.get = function (key, timestamp) {
  const searchResult = this.store.get(key);
  if (!searchResult) return "";
  if (searchResult[0].timestamp > timestamp) return "";

  const filteredResult = searchResult.filter(
    (item) => item.timestamp <= timestamp
  );

  return filteredResult[filteredResult.length - 1].value;
};

// 2차시기

var TimeMap = function () {
  this.store = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  const prevData = this.store.get(key);
  if (!prevData) {
    this.store.set(key, [{ value, timestamp }]);
    return;
  }

  this.store.set(key, [...prevData, { value, timestamp }]);
};

TimeMap.prototype.get = function (key, timestamp) {
  const searchResult = this.store.get(key); // 배열
  if (!searchResult) return "";
  if (searchResult[0].timestamp > timestamp) return "";

  let start = 0;
  let end = searchResult.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (end - start > 1) {
    if (searchResult[middle].timestamp >= timestamp) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return searchResult[end].value;
};
