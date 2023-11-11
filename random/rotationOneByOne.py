
def  rotateLeft(arr,d, n):
    for i in range(d):
        rotateOneByOne(arr,n)

def rotateOneByOne(arr,n):
    temp = arr[0]
    for i in range(n-1):
        arr[i] = arr[i+1]
    arr[n-1] = temp

arr = [1,2,3,4,5,6,7,8,9]
n = 9
d = 2
rotateLeft(arr,d,n)
print(arr)