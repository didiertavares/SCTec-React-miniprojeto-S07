
export function compararDigitosCartao(a){

    const numeroCartao = a.cartao
    console.log(numeroCartao)
    
    const digitosCartao = numeroCartao.split('')
    console.log(digitosCartao)

    const digitosIguais = digitosCartao.every(item => item === digitosCartao[0])
    console.log(typeof digitosIguais)
    console.log(digitosIguais)

    return digitosIguais

}