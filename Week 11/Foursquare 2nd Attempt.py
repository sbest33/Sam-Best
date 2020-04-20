sideLength = 6

#s = "+ " #this is always going to be the first character of the foursquare figure
           #and then the rest of the figure will be added to this string

def solidEdge():

    s = "+ "

    for i in range(sideLength//2 - 1):
        s += "- "

    s += "+ "

    for i in range(sideLength//2 - 1):
        s += "- "

    s += "+"

    print(s)

def middleRow():

    m = "| "

    for j in range(sideLength//2 - 1):
        m += "  "

    m += "| "

    for j in range(sideLength//2 - 1):
        m += "  "

    m += "|"

    print(m)

def fourSquare():

    solidEdge()

    for i in range(sideLength//2 - 1):
        middleRow()

    solidEdge()

    for i in range(sideLength//2 - 1):
        middleRow()

    solidEdge()

fourSquare()
