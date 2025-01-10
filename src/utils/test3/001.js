/**
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 */

// 输入
// board = [["X","X","X","X"],
// ["X","O","O","X"],
// ["X","X","O","X"],
// ["X","O","X","X"]]

// 输出
// [["X","X","X","X"],
// ["X","X","X","X"],
// ["X","X","X","X"],
// ["X","O","X","X"]]

// 模拟输入;
const str = '';
while ((line = readline())) {
  if (line.includes('board = ')) {
    str += line.slice('board = '.length);
  } else {
    str += line;
  }
}
// const str = '[["X","X","X","X"],' + '["X","O","O","X"],' + '["X","X","O","X"],' + '["X","O","O","X"]]';
const board = JSON.parse(str);
// 从边缘的O向内寻找
const isAroundO = (i, j) => {
  const up = [i - 1, j];
  const down = [i + 1, j];
  const left = [i, j - 1];
  const right = [i, j + 1];
  //  相连的设为'OO'
  board[i][j] = 'OO';
  //   递归上下左右有效值
  if (board[up[0]]?.[up[1]] === 'O') {
    isAroundO(up[0], up[1]);
  } else if (board[down[0]]?.[down[1]] === 'O') {
    isAroundO(down[0], down[1]);
  } else if (board[left[0]]?.[left[1]] === 'O') {
    isAroundO(left[0], left[1]);
  } else if (board[right[0]]?.[right[1]] === 'O') {
    isAroundO(right[0], right[1]);
  }
};
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === 'O') {
      // 判断是否被包围
      if ([board.length - 1, 0].includes(i) || [board[i].length - 1, 0].includes(j)) {
        if (isAroundO(i, j)) {
          // 连接边界上的O
          break;
        }
        // 边界上的O
        break;
      }
    }
  }
}
// 模拟输出
const result = JSON.stringify(board).replaceAll('"O"', '"X"').replaceAll('"OO"', '"O"').replaceAll('],', '],\n');
print(result);
// console.log(result);
