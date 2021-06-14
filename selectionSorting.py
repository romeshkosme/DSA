arr = [22, 44, 66, 33, 11, 10, 1, 100]

for i in range(len(arr)):

    min_i = i

    for j in range(i+1, len(arr)):
        if arr[min_i] > arr[j]:
            min_i = j
        
    arr[i], arr[min_i] = arr[min_i], arr[i]

print(arr)