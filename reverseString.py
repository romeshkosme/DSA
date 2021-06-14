str = "Hello World"
reverseStr = ""
for i in range(len(str)):
    if (str[i] == " " or i == (len(str)-1)):
        tempIndex = i - 1
        while (tempIndex >= 0 or str[tempIndex] == " " ):
            
            reverseStr = reverseStr + str[tempIndex]
            # if (str[tempIndex] != " "):
            tempIndex = tempIndex - 1
            # print("adding :: ", reverseStr)
            # print("str[tempIndex] ==  :: ", str[tempIndex] == " ")
        if (i != (len(str)-1)):
            reverseStr += " "

        # print("exit tempI :: ", tempIndex)
print(reverseStr)