const hasCycle = function(head) {
  const set = new Set();
  let temp = head;

  while (temp) {
      if (set.has(temp)) return true;
      set.add(temp);
      temp = temp.next;
  }

  return false;
};
