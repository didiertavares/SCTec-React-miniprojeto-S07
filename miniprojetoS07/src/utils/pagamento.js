
export function compararDigitosCartao(a){

    const numeroCartao = a.cartao
    console.log(numeroCartao)
    
    const digitosCartao = numeroCartao.split('')
    console.log(digitosCartao)

    const digitosIguais = digitosCartao.every(item => item === digitosCartao[0])
    console.log(typeof digitosIguais)
    console.log(digitosIguais)

    // digitosIguais ? rota para página de aviso de golpe : rota para sucesso transação 

    // if (digitosIguais) {
    //     console.log('dígitos todos iguais: Nº de cartão inválido!')
    //     // rota para página de aviso de golpe
    //     return
    // }


}