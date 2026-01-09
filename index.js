let nomeHeroi = "Bambuzitos"
let vitorias = 152
let derrotas = 42

function calcularRanque(vitorias = 0, derrotas = 0){
    return vitorias- derrotas
}

function definirRanque(saldoDeVitorias = 0){

    let classificacaoHeroi = "";
    if (saldoDeVitorias <= 10) {
        classificacaoHeroi = "Ferro"
    }
    else if (saldoDeVitorias <= 20){
        classificacaoHeroi = "Bronze"
    }
    else if (saldoDeVitorias <= 50){
        classificacaoHeroi = "Prata"
    }
    else if (saldoDeVitorias <= 80){
        classificacaoHeroi = "Ouro"
    }
    else if (saldoDeVitorias <= 90){
        classificacaoHeroi = "Diamante"
    }
    else if (saldoDeVitorias <= 100){
        classificacaoHeroi = "Lendário"
    }
    else {
        classificacaoHeroi = "Imortal"
    }
    return classificacaoHeroi
}

function mostrarRanque(){
    let saldo = calcularRanque(vitorias, derrotas)
    let nivel = definirRanque(saldo)
    console.log(`O Herói ${nomeHeroi} tem de saldo de ${saldo} está no nível de ${nivel}`)
}

mostrarRanque()