// https://www.hackerrank.com/challenges/insertionsort1/problem
// 5
// 2 4 6 8 3

function insertionSort1(n, arr) {
   
    var un = arr[n-1]
    
    for(var i=0;i<n;i++) {
        if(arr[n-(i+2)]>un) {
            arr[n-(i+1)]=arr[n-(i+2)]
            console.log(arr.join(' '))
        } else {
            arr[n-(i+1)]=un
            console.log(arr.join(' '))
            break
        }
        
    }

}

insertionSort1(5,[2, 4, 6, 8, 3])