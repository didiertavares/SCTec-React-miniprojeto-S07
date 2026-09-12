import { useState } from "react";
import { useForm } from "react-hook-form";



function Pagamento(){

    const {register, handleSubmit, formState: {errors}} = useForm()

    function sendForm(dados){
        console.log(dados)


    }



    


    return(
    
        <>
            <h1>renderização Pagamento</h1>

            <form onSubmit={handleSubmit(sendForm)} style={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>

                <label>Titular do cartão:</label>
                <input
                placeholder="nome(s) e sobrenome"
                    {...register('titular', {
                        required: 'Nome do titular obrigatório'
                    })}
                />
                {errors.titular && <span>{errors.titular.message}</span>}

                <label>CPF:</label>
                <input
                placeholder="123.456.789-00"
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
                placeholder="1234-5678-9012-3456"
                    {...register('cartão', {
                        required: 'Nº de cartão obrigatório',
                        pattern: {
                            // expressão regular para validação do dado: cartão de crédito
                            value: /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/,
                            message: 'Informe Nº cartão válido'
                        },
                        message: 'Informe Nº cartão válido'
                    })}
                />
                {errors.cartão && <span>{errors.cartão.message}</span>}

                <label>CVV:</label>
                <input
                placeholder="123"
                    {...register('cvv', {
                        required: 'código de verificação',
                        pattern: {
                            // expressão regular para validação do dado: somente números inteiros positivos
                            value: /^\d+$/,
                            message: 'Informe código de verificação válido'
                        },
                        message: 'Informe código de verificação válido'
                    })}
                />
                {errors.cvv && <span>{errors.cvv.message}</span>}



            </form>

        </>
    
    )
}

export default Pagamento