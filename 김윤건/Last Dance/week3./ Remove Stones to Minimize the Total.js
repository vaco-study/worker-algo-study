/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
 var minStoneSum = function(piles, k) {
  const heap = new Heap();
  piles.forEach(v => heap.add(v));

  while (k) {
      const max = heap.remove();
      const newValue = max - Math.floor(max / 2);

      heap.add(newValue);
      k--;

      if (!k) heap.show();
  }

  return heap.show().reduce((acc, cur) => acc + cur, 0);
};

function Heap() {
  this.heap = [];
  
  this.add = (value) => {
      this.heap.push(value);
      let index = this.heap.length - 1;
      
      while (index > 0)  {
          if (this.heap[Math.floor((index - 1) / 2)] < this.heap[index]) {
              let temp = this.heap[Math.floor((index - 1) / 2)];
              this.heap[Math.floor((index - 1) / 2)] = this.heap[index];
              this.heap[index] = temp;
              index = Math.floor((index - 1) / 2);
          } else break;
      }
  }
  
  this.remove = () => {
      if (this.heap.length <= 1) {
          return this.heap.pop();
      }
      const deleted = this.heap[0];
      this.heap[0] = this.heap.pop();
 
      let index = 0;
      while (index * 2 + 1 < this.heap.length) {
          let minValue = this.heap[index * 2 + 1];
          let minIndex = index * 2 + 1;
          if (index * 2 + 2 < this.heap.length && minValue < this.heap[index * 2 + 2]) {
              minValue = this.heap[index * 2 + 2];
              minIndex = index * 2 + 2;
          }
          
          if (this.heap[index] <= this.heap[minIndex]) {
              let temp = this.heap[index];
              this.heap[index] = this.heap[minIndex];
              this.heap[minIndex] = temp;
              index = minIndex;
          } else break;
      }
      return deleted;
  }
  this.show = () => {
      return this.heap;
  }
}
