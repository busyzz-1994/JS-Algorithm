/*
 * @Author: busyzz
 * @Date: 2022-03-27 11:06:42
 * @Description:
 */

function func(n) {
  let result = [];
  const chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'));
  const isSuccess = (row, col, chessBoard, n) => {
    // 排除同一列
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === 'Q') {
        return false;
      }
    }
    // 排除左斜边
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }
    // 排除右斜边
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  };
  const backTracking = (row, chessBoard) => {
    if (row === n) {
      let item = chessBoard.map((row) => {
        return row.join('');
      });
      result.push(item);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSuccess(row, col, chessBoard, n)) {
        chessBoard[row][col] = 'Q';
        backTracking(row + 1, chessBoard);
        chessBoard[row][col] = '.';
      }
    }
  };
  backTracking(0, chessBoard);
  return result;
}

console.log(func(4));
