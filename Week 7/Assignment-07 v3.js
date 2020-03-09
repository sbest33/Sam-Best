let num = Number(prompt("How many rows and columns do you want?"));

let board = "";

for (let i = 0; i < num; i = i + 1) { //Vertically repeats the process 'num' times
    for(let j = 0; j < num; j = j + 1) { //calculates how many times either the string " " or "#" will be added to our binding 'board'
      board += (j % 2) == (i % 2) ? " " : "#";
      /* += adds either " " or "#" to our binding 'board'. It then uses a ternary
      operator to choose which of the those two it should add, depending if the
      current row and collumn are even or odd numbers. */
    }
    board += "\n";
}

console.log(board);
