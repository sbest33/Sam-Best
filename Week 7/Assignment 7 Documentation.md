# Assignment 7 Documentation

## Understanding the problem
In this week's assignment we were asked to create a chess board with n rows and columns, where the white squares of the board would be represented by a #, and the black squares by a space.

## First thoughts
So my first thought was that I was going to have to find a loop that would run *num* number of times, and then print out either *" #"* or *"# "* *num* number of times, depending if the current number of the row was odd or even. My only issue then was to find a way to add characters to an already existing string. My first thought was to maybe use template literals somehow, but after some research, it seemed the best way to accomplish this was through the use of the *variable += ()* function that adds anything that is inside the parenthesis to the current string at hand (in the case of my program it is used to add characters to the string called *board*). I found this way to add characters to strings on Stack Overflow here: https://stackoverflow.com/questions/32957729/what-is-in-javascript.

So now with knowledge of the function to be able to add characters to pre-existing strings, I added an empty string (*let board = ""*), and then within my *for* loop (that runs *num* times) I had a nested *for* loop (that runs *num/2*, because each time it runs it prints two characters, either *"# "* or *" #"*) that first checks if the row number is odd or even (in other words it checks if *% 2* == 1), and if it is, it uses the *board += " #"* command, otherwise it does *board += "# "*. Then after the nested for loop runs, *board += "/n"* happens, just to break the line in that string.

## Making it more efficient
But doing the program this way made the program check if the row was odd or even every time it ran the nested *for* loop, so I needed to find a way to make it more efficient. So instead I had the *if* and *else* statement run inside the main *for* loop, and then I had a nested *for* loop if the *if* statement were to be true, and another if it were not. Like this, instead of having a condition that ran *num/2* times, the conditions were only ran once per *for* loop.

However, while looking online, I found an even more efficient way to do this on Stack Overflow (https://stackoverflow.com/questions/30225678/how-do-i-solve-the-eloquent-javascript-chess-board?answertab=votes#tab-top). User *jsFiddle Demo* showed the following code:

var board = "";
for(var i = 0; i < 8; i++){
 for(var a = 0; a < 8; a++){
  board += (a % 2) == (i % 2) ? " " : "#";
 }
 board += "\n";

This use of a ternary operator is brilliant, and is used to check whether the modulo 2 of the row and of the column are equal to each other, and if they are the program will add *" "* to the string, otherwise it will add *"#"* to the string.
