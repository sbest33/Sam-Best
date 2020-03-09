let num = Number(prompt("How many rows and columns do you want?"));

let board = "";

for (let i = 0; i < num; i = i + 1) { //Vertically repeats the process 'num' times
    if (i % 2 == 1)
    for(let j = 0; j < (num/2); j = j + 1) {
        board += " #";
      }
      else
      for(let j = 0; j < (num/2); j = j + 1) {
        board += "# ";
  }
    board += "\n";
}

console.log(board);
