const isValidSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    const row= {}
    const column = {}
    
    for (let j = 0; j < 9; j++) {
      const rowDigit = board[i][j];
      const columnDigit = board[j][i];
      //subBox 3x3을 확인하기 위한 인덱스를 가져오는 방식을 생각하지 못함

      if (row[rowDigit]) {
          return false;
      }

      row[rowDigit] = true;

      if (column[columnDigit]) {
        return false;
      } 
  
       column[columnDigit] = true;
    }
  }

  return true;
};