function nonDivisibleSubset(k,arr) {
    
    var counter = 0;
    var remainders = Array.from({length: k}, (v, i) => 0);

    for(j=0;j<arr.length;j++) {
        remainders[arr[j]%k]++;
    }

    for(i=1;i<Math.floor((k+1)/2);i++) {
        counter+=Math.max(remainders[i],remainders[k-i]);
    }

    if(k%2 === 0 && remainders[Math.floor(k/2)]>0) {
        counter++;
    }

    if(remainders[0]) {
        counter++;
    }
    
    return counter;
    
}