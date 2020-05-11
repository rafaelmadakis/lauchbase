// Criar um programa que calcula a média
// das turmas de students
// mensagem do calculo da média
// se a avarage for maior que 5, parabenizar a turma

const classA = [
    {
        name: "Mayk",
        grade: 1.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Mais um student",
        grade: 10
    }
]

const classB = [
    {
        name: "Cleyton",
        grade: 10
    },
    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Ciclano",
        grade: 2
    },
    {
        name: 'Novo Aluno',
        grade: 5
    }
]

function calculateAverege(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade;

    }
    const avarage = sum / students.length;
    
    return avarage;

}


function sendMessage(avarage, turma) {
    if (avarage > 5) {
        console.log(` ${turma} average:  ${avarage}. Congratulations!`);
    } else {
        console.log(`${turma} average:  ${avarage}. Is not good.`);
    }

}

// Marcar student como flunked se a grade for menor que 5
// e enviar mensagem

function markAsFlunked(student) {
    student.flunked = false;

    if (student.grade < 5) {
        student.flunked = true;
    }
}


function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked`)
    }
}

function studentsReprovado(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student);
    }
}

const avarage1 = calculateAverege(classA)
const avarage2 = calculateAverege(classB)

sendMessage(avarage1, 'Class A');
sendMessage(avarage2, 'Class B');

studentsReprovado(classA);
studentsReprovado(classB);






