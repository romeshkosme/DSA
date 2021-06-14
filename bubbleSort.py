a = [5,4,3,2,1]
n = len(a)
for i in range(n):

    for j in range(0,n-i-1):
        print("n-i-1 ::: ", n-i-1)
        if arr[j] > arr[j+1] :
            a[j], a[j+1] = a[j+1], a[j]
    
print(a)