def reverseRotation(ar, start, end):
    
    while(start < end):
        temp = ar[start]
        ar[start] = ar[end]
        ar[end] = temp

        start += 1
        end -= 1

def rotate(ar, d, n):
    if d == 0:
        return
    
    d = d % n

    reverseRotation(ar, 0, d-1)
    reverseRotation(ar, d, n-1)
    reverseRotation(ar, 0, n-1)
    print(arr)


arr = [1,2,3,4,5,6,7, 8, 9]
d = 3
n = len(arr)
rotate(arr, d, n)