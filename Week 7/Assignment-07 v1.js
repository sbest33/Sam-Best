let num = Number(prompt("How many rows and columns do you want?"));

// let num = 8;
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

//https://stackoverflow.com/questions/30225678/how-do-i-solve-the-eloquent-javascript-chess-board?answertab=votes#tab-top
//https://stackoverflow.com/questions/14343844/create-a-string-of-variable-length-filled-with-a-repeated-character
//https://stackoverflow.com/questions/32957729/what-is-in-javascript
