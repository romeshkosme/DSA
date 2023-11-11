a = [4,2,5,3,1]
n = len(a)

for i in range(n):
    key = a[i]
    print("....",i)
    print("key ", key)
    j=i-1
    print("________",j)
    while j>=0 and key < a[j]:
        print("a[j+1] ",a[j+1])
        print("a[j] ",a[j])
        a[j+1] = a[j]
        j -= 1
    a[j+1] = key
    print(a)

print(a)