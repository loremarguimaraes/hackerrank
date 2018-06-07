//https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    return grades.map(roundGrade)
}

function roundGrade(grade) {

    if(grade<38) return grade

    var multiple = calcMultiple(grade)

    if((multiple-grade)<3) {
        grade = multiple
    }
    
    return grade
}

function calcMultiple (val) {
    while(val%5!=0) {
        val+=1
    }
    return val
}

console.log(gradingStudents([73,67,38,33]))