const listaDeHerois = [
    { nome: "Bambuzitos", vitorias: 152, derrotas: 42 },
    { nome: "Brock", vitorias: 200, derrotas: 10 },   
    { nome: "Myst", vitorias: 5, derrotas: 10 },
    { nome: "Ash", vitorias: 60, derrotas: 20 }
];

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function definirNivel(saldo) {
    if (saldo < 10) return "Ferro";
    else if (saldo <= 20) return "Bronze";
    else if (saldo <= 50) return "Prata";
    else if (saldo <= 80) return "Ouro";
    else if (saldo <= 90) return "Diamante";
    else if (saldo <= 100) return "Lendário";
    else return "Imortal";
}

function mostrarRanque(listaDeHerois){
for (let i = 0; i < listaDeHerois.length; i++) {

    let heroiAtual = listaDeHerois[i];
    
    
    let saldo = calcularSaldo(heroiAtual.vitorias, heroiAtual.derrotas);
    let nivel = definirNivel(saldo);
    
 
    console.log(`O Herói ${heroiAtual.nome} tem saldo de ${saldo} e está no nível ${nivel}`);
}
}

mostrarRanque(listaDeHerois);