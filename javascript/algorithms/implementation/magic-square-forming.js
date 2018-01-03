//https://www.hackerrank.com/challenges/magic-square-forming/problem

function formingMagicSquare(s) {

    var m = [
        [4,9,2,3,5,7,8,1,6],
        [2,9,4,7,5,3,6,1,8],
        [8,1,6,3,5,7,4,9,2],
        [6,1,8,7,5,3,2,9,4],
        [8,3,4,1,5,9,6,7,2],
        [4,3,8,9,5,1,2,7,6],
        [6,7,2,1,5,9,8,3,4],
        [2,7,6,9,5,1,4,3,8]
    ]

    var r = s.reduce((total, current) => total.concat(current), []);
    var costs = []

    for(var mi=0;mi<m.length;mi++) {
        var cost = 0
        for(ri=0;ri<r.length;ri++) {
            cost += Math.abs(m[mi][ri]-r[ri])
        }
        costs.push(cost)
    }

    return Math.min(...costs)
}

// console.log(formingMagicSquare([[4,8,2],[4,5,7],[6,1,6]])) //return 4
// console.log(formingMagicSquare([[4,9,2],[3,5,7],[8,1,5]])) //return 1
 console.log(formingMagicSquare([[4,5,8],[2,4,1],[1,9,7]])) //return 14