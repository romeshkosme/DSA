# juggling algorithm

# find gdc from n and d

# gcd = number of set a array has to be divided into

# run two loops

# first loop i=0 till i > d

def rotate(arr, n, d):
    gcd = findGcd(d, n)
    for i in range(gcd):
        temp = arr[i]
        j = i
        while 1:
            k = j + d
            if k >= n:
                k = k - n
            if k == i:
                break
            arr[j] = arr[k]
            j = k
        arr[j] = temp

def findGcd(d, n):
    if n == 0:
        return d
    else:
        return findGcd(n, d % n)

arr = [1,2,3,4,5,6,7,8,9,10,11,12]
d = 3
rotate(arr, len(arr), d)
print(arr)