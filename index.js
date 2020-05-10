// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do calculo da média
// se a media for maior que 5, parabenizar a turma

const aluno01 = {
    nome : "Mayk",
    nota : 9.8
}

const aluno02 = {
    nome : "Diego",
    nota : 10
}

const aluno03 = {
    nome : "Fulano",
    nota : 2
}

console.log(aluno01)



const media = (aluno01.nota + aluno02.nota + aluno03.nota) /  3

if (media > 5){
 console.log(`A nota foi de ${media}. Parabéns`)
}else { 
 console.log('A média é menor que 5')
}




