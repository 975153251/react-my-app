var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        // 标记上下左右
        turnZero(i, j, grid);
      }
    }
  }
  return count;
};

const turnZero = (i, j, grid) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '2') return;
  if (grid[i][j] === '1') {
    grid[i][j] = '2';
    turnZero(i + 1, j, grid);
    turnZero(i - 1, j, grid);
    turnZero(i, j + 1, grid);
    turnZero(i, j - 1, grid);
  }
};

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
const res = numIslands(grid);
console.log('res: ', res);
