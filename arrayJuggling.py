# array juggling rotation

def leftRotate(ar, d):
    d = d % arrLen
    g_c_d = gcd(d, arrLen)
    print("gcd  :: ", g_c_d)
    for i in range(g_c_d):
        temp = ar[i]
        print("Step 1: temp :: ", temp)
        j = i
        print("step 2:  j :: ", j)
        while 1:
            k = j + d
            print("while: step 3: k :: ", k)
            if k >= arrLen:
                k = k - arrLen
                print("if k>= arrlen: step 4:   k:", k)
            if k == i:
                print("last step break: k :", k)
                break
            ar[j] = ar[k]
            print("step 5: arr[j]",ar[j])
            j = k
            print("step 6: j:", j)
        ar[j] = temp
        print("j :: ", j)
        print("step 7 : ar[j]", ar[j])

def gcd(d, arrLen ):
    if arrLen == 0:
        return d
    else:
        return gcd(arrLen, d % arrLen)     


arr = [1,2,3,4,5,6,7,8,9]
arrLen = len(arr)
rotate = 2
leftRotate(arr, rotate)
print("arr :: ", arr)