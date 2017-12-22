//https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipher(n, s, k) {
 
    var lowerstring = s.toLowerCase()
    var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var cipher = ''
    k = k % alpha.length

    for (var i=0; i<n; i++) {

        var charIndex = alpha.indexOf(lowerstring[i])

        if (charIndex === -1) {
            cipher += lowerstring[i]
            continue
        }
            
        charIndex = charIndex + k;
        if (charIndex >= alpha.length) {
            charIndex = charIndex - alpha.length
        }
        
        cipher += (s[i].toUpperCase()===s[i]) 
        ? alpha[charIndex].toUpperCase() 
        : alpha[charIndex]

    }

    return cipher
}