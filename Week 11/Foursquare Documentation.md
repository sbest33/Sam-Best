# FourSquare Documentation

## How I started
I started this project by taking a closer look at the code we had written last week, and I looked at the Square we had to make for class, and I saw that there are just 2 *sets* of characters when observed horizontally. The first one is: **+ - - - - + - - - - +** and the second one is **|         |         |**. And printing in python is very easy, all it takes is:

    **print("")**

and then you just insert the text between the two quotation marks.

But instead of repeating each line individually, and having the same code written multiple times, I just made a *function* that would print the first line, and then one that would print the second one. I then made a *function* called **FourSquare** that would initialize each of the lines in the order that I want. On the last line I just ran my **FourSquare** function.

## Making it cooler

I then wanted to make it so the size of the FourSquare would be adjustable.

So I had a function that created a string **"s"** that would start with "+ " and then I would add "- " to it, until it was time for the middle figure which would then be "+ ", and then it would switch back to "- " a certain amount of times until it reached the end where I would print "+". To know how many times to do this I used the **range** function in Python, which let me create loops like the **for** loops we used in C. [This](https://www.geeksforgeeks.org/python-range-function/) and [this](https://www.w3schools.com/python/python_for_loops.asp) helped me figure that out. [This](https://stackoverflow.com/questions/4435169/how-do-i-append-one-string-to-another-in-python) helped me figure out how to add strings together in Python.

I then did the same thing for the lines in the middle but this time instead of adding "- " for the middle String characters, I added "  ".

I then did the same function, but instead of calculating when how many characters to print, it was calculating how many times it should print the MiddleLine function.

I then called the function, as we talked about in class, and the program ran.
