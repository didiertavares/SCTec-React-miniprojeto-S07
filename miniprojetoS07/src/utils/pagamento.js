
export function compararDigitosCartao(a){

    const numeroCartao = a.cartao.replaceAll(' ', '')       // OK, funciona
    console.log(numeroCartao)
    
    const digitosCartao = numeroCartao.split('')            // OK, funciona
    console.log(digitosCartao)

    const digitosTodosIguais = digitosCartao.every(item => item === digitosCartao[0])
    console.log(typeof digitosTodosIguais)                       // OK, funciona
    console.log(digitosTodosIguais)                              // OK, funciona

    return digitosTodosIguais

}