//https://www.hackerrank.com/challenges/common-child/problem
//https://en.wikipedia.org/wiki/Longest_common_subsequence_problem


function commonChild(s1, s2){

    var m = []

    for(var rows=0;rows<s2.length+2;rows++) {

        var row = []
        if(rows===0) {
            row = Array.from({length: s1.length+2}, (v, col) => {
                return (col<2) ? 0 : s1[col-2]
            });
        }
        if(rows===1) {
            row = Array.from({length: s1.length+2}, (v) => 0);
        }
        if(rows>1) {
            row = Array.from({length: s1.length+2}, (v, col) => {
                return (col===0) ? s2[rows-2] : 0
            });
        }
        m.push(row)

        for(var col=2; col<s1.length+2; col++) {
            if(rows>1) {
                if(m[rows][0]===m[0][col]) m[rows][col] = Math.max(m[rows][col],1) + m[rows-1][col-1]
                if(m[rows][0]!==m[0][col]) m[rows][col] = Math.max(m[rows][col-1],m[rows-1][col]) 
            }
        }
    }

    return (m[m.length-1][m[m.length-1].length-1])
}

console.log(commonChild('OUDFRMYMAW','AWHYFCCMQX')) //return 2 'FM'
// console.log(commonChild('AA','BB')) //return 0 ''
// console.log(commonChild('A','A')) //return 1 'A'
// console.log(commonChild('AB','AB')) //return 2 'AB'
// console.log(commonChild('HARRY','SALLY')) //return 2 'AY'
// console.log(commonChild('ABCDEF','FBDAMN')) //return 2 'BD'
// console.log(commonChild('SHINCHAN','NOHARAAA')) //return 3 'NHA'
// console.log(commonChild('AGCAT','GAC')) //return 2
// console.log(commonChild('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS','FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC')) //return 15