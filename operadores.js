//Desafio 1
// verificar se a pessoa é maior ou igualde 18 

// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

const idade = 18

if(idade >= 18) {
    console.log(`Entrada permitida pois você tem a idade de ${idade}`)
}else if (idade == 17) {
    console.log(`Entrada bloqueada, volte quando fizer 18 `);
}else {
    console.log(`entrada bloqueada, pois você tem a idade de ${idade}`)
}

