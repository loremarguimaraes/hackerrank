function almostSorted(input) {

    var input = input.split('\n')
    var n = input[0]
    var nums = input[1].split(' ')
    nums.unshift(0)
    var start = 0
    var end = 0
    var sgmt = []
    var swap = []
    var swapd = true
    var revr = []
    var revrd = true
    var result = 'no'

    for(var s=1;s<=parseInt(n/2);s++) {
        if(nums[s]>nums[s+1]) {
            start = s
            break
        }
    }

    for(var e=n;e>parseInt(n/2);e--) {
        var t = nums[e]
        if(nums[e]<nums[e-1]) {
            end = e
            break
        }
    }

    if(start===0 && end===0) result = 'yes'
    //return result

    sgmt = nums.slice(start,end+1)
    swap = nums.slice(start,end+1)
    swap[0] = swap[sgmt.length-1]
    swap[sgmt.length-1] = sgmt[0]

    for(var i=0;i<swap.length;i++) {
        if(swap[i]>swap[i+1]) {
            swapd=false
            break
        } 
    }

    if(swapd===true) result = result.concat('yes\nswap ', start,' ', end)
    //return result

    revr = sgmt.reverse()
    for(var i=0;i<revr.length;i++) {
        if(revr[i]>revr[i+1]) {
            revrd=false
            break
        } 
    }

    if(revrd===true) result = result.concat('yes\nreverse ', start,' ', end)
    //return result


    console.log('no')
    return 'no'

}

almostSorted('4\n1 2 3 4') //yes
// almostSorted(4,'1 2 3 4') //yes
// almostSorted(3,'1 2 3') //yes
// almostSorted(2,'1 2') //yes
// almostSorted(4,'99 100 101 1 2') //no
// almostSorted(8,'1 6 2 3 7 11 9 8') //no
// almostSorted(4,'5 4 2 1') //yes reverse 1 4
// almostSorted(3,'5 4 2') //yes swap 1 3
// almostSorted(2,'5 4') //yes swap 1 2
// almostSorted(6,'1 5 3 4 2 6') //yes swap 2 5
// almostSorted(5,'1 5 3 4 2') //yes swap 2 5

