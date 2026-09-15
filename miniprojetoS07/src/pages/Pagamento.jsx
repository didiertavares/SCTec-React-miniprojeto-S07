import { useForm } from "react-hook-form";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { compararDigitosCartao } from "../utils/pagamento";



function Pagamento(){

    const [dadosForm, setDadosForm] = useLocalStorage('dados_pagamento', {})

    const {register, handleSubmit, reset, watch, formState: {errors, isSubmitting}} = useForm({
        defaultValues: dadosForm
    })

    const [titular, cpf, cartao, cvv, validade] = watch(['titular', 'cpf', 'cartao', 'cvv', 'validade'])
    
    const navigate = useNavigate()

    const formPreenchido = titular && cpf && cartao && cvv && validade

    async function sendForm(dados){

        await new Promise((resolve) => setTimeout(resolve, 3000))       // OK, funciona
        
        console.log(dados)              // OK, funciona
        console.log(dados.cartao)       // OK, funciona 
        
        setDadosForm({
            titular: dados.titular,
            cpf: dados.cpf,
            cartao: dados.cartao,
            cvv: dados.cvv,
            validade: dados.validade
        })

        const digitosIguais = compararDigitosCartao(dados)
 
        if (digitosIguais) {
            console.log('dígitos todos iguais: Nº de cartão inválido!')
            navigate('/falha')
        } else {navigate('/sucesso')}

        reset()

    }


    return(
    
        <>
            <h1>Dados do pagamento</h1>

            <form onSubmit={handleSubmit(sendForm)} style={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>

                <label>Titular do cartão:</label>
                <input
                placeholder="nome(s) e sobrenome"           // OK, funciona
                    {...register('titular', {
                        required: 'Nome(s) e sobrenome do titular obrigatórios',
                        minLength: {value: 4, message: 'nome(s) e sobrenome completos do titular totalizam obrigatoriamente mais de 4 letras'},
                        message: 'Informe nome(s) e sobrenome do titular do cartão'
                    })}
                />
                {errors.titular && <span>{errors.titular.message}</span>}

                <label>CPF:</label>
                <input
                placeholder="123.456.789-00"                // OK, funciona
                    {...register('cpf', {
                        required: 'CPF obrigatório',
                        pattern: {
                            // expressão regular para validação do dado: CPF
                            value: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
                            message: 'Digite um CPF válido'
                        },
                        message: 'Digite um CPF válido'
                    })}
                />
                {errors.cpf && <span>{errors.cpf.message}</span>}


                <label>Nº do cartão:</label>
                <input
                placeholder="1234-5678-9012-3456"           // OK, funciona
                    {...register('cartao', {
                        required: 'Nº de cartão obrigatório',
                        minLength: {value: 16, message: 'Preencha os 16 dígitos do cartão'},
                        pattern: {
                            // expressão regular para validação do dado: cartão de crédito
                            value: /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/,
                            message: 'Informe Nº cartão válido'
                        },
                        message: 'Informe Nº cartão válido'
                    })}
                />
                {errors.cartao && <span>{errors.cartao.message}</span>}

                <label>CVV:</label>
                <input
                placeholder="123"                           // OK, funciona
                    {...register('cvv', {
                        required: 'código de verificação obrigatório',
                        minLength: {value: 3, message: 'o código é composto de 3 dígitos'},
                        maxLength: {value: 3, message: 'o código é composto de 3 dígitos'},
                        pattern: {
                            // expressão regular para validação do dado: somente números inteiros positivos
                            value: /^\d+$/,
                            message: 'Informe código de verificação válido'
                        },
                        message: 'Informe código de verificação válido'
                    })}
                />
                {errors.cvv && <span>{errors.cvv.message}</span>}

                <label>Validade:</label>
                <input
                placeholder="mm/aa"                         // OK, funciona
                    {...register('validade', {
                        required: 'Data de validade obrigatória',
                        pattern: {
                            // expressão regular para validação do dado: mês e ano de validade
                            value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                            message: 'Data inválida'
                        },
                        message: 'Data inválida'
                    })}
                />
                {errors.validade && <span>{errors.validade.message}</span>}


                <button type="submit" id='btn-process-pagmt' disabled={isSubmitting || !formPreenchido}>
                    {isSubmitting ? 'Processando Pagamento...' : 'Confirmar pagamento'}
                </button>


            </form>

        </>
    
    )
}

export default Pagamento