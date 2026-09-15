import { useNavigate } from "react-router-dom"

function Sucesso(){

    const navigate = useNavigate()

    return(

        <section id="main-sucesso">
            <h1>Pagamento aprovado</h1>
            <h2>Sua compra foi realizada com êxito!</h2>

            <h2>Esperamos vê-lo novamente em nossa loja!</h2>

            <button id='btn-voltar-loja' onClick={() => {navigate('/carrinho')}}>Voltar à loja</button>
        </section>

    )
}

export default Sucesso