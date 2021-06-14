str = "Romesh Kosme Hola"

strLen = len(str)
reverseStr = ""

for i in range(strLen):
    if str[i] == " " or i == strLen-1:
        x = i+1 if i == strLen-1 else i
        while x > 0:
            if str[x-1] != " ":
                reverseStr += str[x-1]+" " if x-1 == 0 else str[x-1]
                x = x-1
            else:
                reverseStr += " "
                break
        
print(reverseStr)
