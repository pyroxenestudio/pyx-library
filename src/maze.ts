const maze = [
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 0, 1]
];
const output = [];
const toCheckBack = [];
let finished = false;
// Mision, llegar al (3,3)
function backtracking(y, x) {
  if (y < 0 || y >= maze.length || x < 0 || x >= maze.length) {
    return;
  }

  if (maze[y][x] == 1) {
    // console.log('ES UN 1', y, x);
    output.push([y,x]);
    // maze[y][x] = 2;
  } else {
    return;
  }

  if (x == maze.length - 1 && y == maze.length - 1) {
    finished = true;
    return;
  };
  console.log('output', output);
  console.log('X', x);
  console.log('Y', y);
  // Continue and check next step
  
   // DOWN
  if (maze[y+1] && maze[y+1][x] == 1) {
    backtracking(y+1,x)
  }
  if (finished) return;
  
  // RIGHT
  if (maze[y][x+1] == 1) {
    backtracking(y,x+1);
  }
  if (finished) return;

  // UP
  if (maze[y-1] && maze[y-1][x] == 1) {
    backtracking(y-1,x);
  }
  if (finished) return;

  // LEFT
  if (maze[y][x-1] == 1) {
    backtracking(y,x-1);
  }
  if (finished) return;

  output.pop();
}
// backtracking(0,0);
console.log(maze);
console.log(output);