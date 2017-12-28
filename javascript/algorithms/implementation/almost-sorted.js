function almostSorted(n,arr) {

    var numbers = arr.split(' ')
    var answer = ['yes\n','swap ','reverse ']
    var inds = []
    var result = ''

    for(i=0;i<n;i++) {
        if(arr[i]>arr[i+1]) {
            inds.push(i+1)
            inds.push(i+2)
        }
    }

    console.log(result.concat(answer[0],answer[2],inds))
    //return 'yes\n' & 'reverse ' & inds[] 

}

almostSorted(2,'4 2')