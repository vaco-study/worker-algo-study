var findRelativeRanks = function(score) {
  const heap = new Heap();
      
  for (let i = 0; i < score.length; i++) {
      const node = [i, score[i]];
      heap.add(node);
  }
  
  const result = new Array(score.length).fill(0);
  
  for (let i = 0; i < score.length; i++) {
      const node = heap.remove();
    
      if (i === 0) {
          result[node[0]] = "Gold Medal";
      } else if (i === 1) {
          result[node[0]] = "Silver Medal";
      } else if (i === 2) {
          result[node[0]] = "Bronze Medal";
      } else {
          let rank = i + 1;
          result[node[0]] = rank.toString();
      }
      
  }
  return result;
};

function Heap() {
  this.heap = [];
  
  
  this.add = (node) => {
      this.heap.push(node);
      let index = this.heap.length - 1;
      
      while (index > 0)  {
          if (this.heap[Math.floor((index - 1) / 2)][1] < this.heap[index][1]) {
              let temp = this.heap[Math.floor((index - 1) / 2)];
              this.heap[Math.floor((index - 1) / 2)] = this.heap[index];
              this.heap[index] = temp;
              index = Math.floor((index - 1) / 2);
          } else break;
      }
  }
  
  this.remove = () => {
      if (this.heap.length === 0) {
          return null;
      }
      const deleted = this.heap[0];
      this.heap[0] = this.heap.pop();
 
      let index = 0;
      while (index * 2 + 1 < this.heap.length) {
          let minValue = this.heap[index * 2 + 1];
          let minIndex = index * 2 + 1;
          if (index * 2 + 2 < this.heap.length && minValue[1] < this.heap[index * 2 + 2][1]) {
              minValue = this.heap[index * 2 + 2];
              minIndex = index * 2 + 2;
          }
          
          if (this.heap[index][1] <= this.heap[minIndex][1]) {
              let temp = this.heap[index];
              this.heap[index] = this.heap[minIndex];
              this.heap[minIndex] = temp;
              index = minIndex;
          } else break;
      }
      return deleted;
  }
  this.show = () => {
      console.log(this.heap);
  }
}
