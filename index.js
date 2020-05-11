// Criar um programa que calcula a média
// das turmas de alunos
// mensagem do calculo da média
// se a media for maior que 5, parabenizar a turma

const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 1.8
    },
    {
        nome : "Diego",
        nota : 10
    },
    {
        nome : "Fulano",
        nota : 2
    },
    {
        nome: "Mais um aluno",
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: "Cleyton",
        nota: 10
    },
    {
        nome : "Robson",
        nota : 10
    },
    {
        nome : "Ciclano",
        nota : 2
    },
    {
        nome: 'Novo Aluno',
        nota: 5
    }
]

function calculaMedia(alunos){
    let soma = 0;

    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota

    }
    const media = soma / alunos.length
    return media

}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    if(media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns`)
    }else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
    
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

// Marcar aluno como reprovado se a nota for menor que 5
// e enviar mensagem

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if(aluno.nota < 5) {
        aluno.reprovado = true;
    }
}


function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} esta reprovado`)
    }
}

function alunoReprovado(alunos){
    for (let aluno of alunos) {
       marcarComoReprovado(aluno);
       enviarMensagemReprovado(aluno);
    }
}

alunoReprovado(alunosDaTurmaA);
alunoReprovado(alunosDaTurmaB);






