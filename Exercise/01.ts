interface Student {
    name: string,
    grades: number[]
}

const students: Student[] = [
    { name: 'Ivan', grades: [6, 5, 6] },
    { name: 'Maria', grades: [6, 6, 6] }
];

function averageGrade(student: Student): number {
    const nGrades: number = student.grades.length;
    const sumGrades: number = student.grades.reduce((sum, grade) => sum + grade, 0);
    return sumGrades / nGrades;
}

function theBest(arr: Student[]): Student {
    return arr.reduce((best, current) => averageGrade(current) > averageGrade(best) ? current : best);
}

/*
Another solution for theBest():

function theBest(arr: Student[]): Student {
    return arr.sort((a, b) => averageGrade(b) - averageGrade(a))[0];
}
*/

console.log(theBest(students).name);
