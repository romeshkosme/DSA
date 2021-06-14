def leftRotate(arr, d, n):
    leftRotateRec(arr, 0, d, n);
 
def leftRotateRec(arr, i, d, n):
    '''
     * Return If number of elements to be 
     rotated is zero or equal to array size
     '''
    if (d == 0 or d == n):
        return;
 
    '''
     * If number of elements to be rotated 
     is exactly half of array size
     '''
    if (n - d == d):
        swap(arr, i, n - d + i, d);
        return;
 
    ''' If A is shorter '''
    if (d < n - d):
        swap(arr, i, n - d + i, d);
        leftRotateRec(arr, i, d, n - d);
        ''' If B is shorter '''
    else:
        swap(arr, i, d, n - d);
         
        ''' This is tricky '''
        leftRotateRec(arr, n - d + i, 2 * d - n, d); 
 
''' UTILITY FUNCTIONS '''
''' function to pran array '''
def printArray(arr, size):
    for i in range(size):
        print(arr[i], end = " ");
    print();
 
'''
 * This function swaps d elements starting at 
 * index fi with d elements starting at index si
 '''
def swap(arr, fi, si, d):
    for i in range(d):
        temp = arr[fi + i];
        arr[fi + i] = arr[si + i];
        arr[si + i] = temp;
 
# Driver Code
if __name__ == '__main__':
    arr = [1, 2, 3, 4, 5, 6, 7];
    leftRotate(arr, 2, 7);
    printArray(arr, 7);