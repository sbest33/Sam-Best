#Week 6 Assignment Documentation

##Understanding the Challenge
The challenged we were presented, was for making a list of numbers from 1 to 100, but that for every multiple of 3 the word fizz would replace the number, for the multiples of 5 the word buzz would replace the number, and for multiples of both 3 and 5, the word fizzbuzz would replace the number.

##The way I thought about it
So my first thought was that we would need to find a way to have numbers ascend from 1 to 100, and the best way to do that would be to use a *for* loop, that made the variable *counter* ascend. Within this loop, the program would check if it were a multiple of 3, and if so, there would be an embedded condition that would check if it were a multiple of 5 (to see if the number would be a multiple of both), and if the condition were true, the program would print fizzbuzz, but if it were not true (but the first condition still be true) it would print fizz. If neither of these conditions were met (in other words, if the number is neither a multiple of 3 nor of 3 and 5) it will then check if the number is a multiple of 5. If it is, the program will print buzz. If none of the above conditions are true, then it just prints the number (the variable *counter*). It then repeats this process 100 times, with *counter* constantly incrementing by one each time.

##javaScript terminology
From looking at the program examples I was able to understand
