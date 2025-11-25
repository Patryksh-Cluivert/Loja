function carrinho(produto, acao){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(qtd.innerHTML == 0 && acao == '-'){
        alert("Não pode adicionar um valor negativo!")
    } else{
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = qtd.innerHTML * valor.innerHTML
        soma()
    }

}

function soma(){
    let soma = 0

    for(let i = 1; i <= 3; i++){
        soma += Number(document.getElementById('total_' + i).innerHTML)
    }
    document.getElementById('subtotal').innerHTML = soma
}