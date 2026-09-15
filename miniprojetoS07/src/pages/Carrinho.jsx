import { useNavigate } from 'react-router-dom'
import { catalogoProdutos } from "../data/produtos"
import CardProduto from "../components/CardProduto"
import Footer from '../components/Footer'


function Carrinho(){

    const produtosSelecionados = [
        catalogoProdutos[0],
        catalogoProdutos[1],
        catalogoProdutos[2],
        catalogoProdutos[4],
        catalogoProdutos[5],
        catalogoProdutos[9]
    ]
    console.log(produtosSelecionados)

    const totalCompra = produtosSelecionados.reduce(
        (acc, item) => acc + (Number(item.preco)*Number(item.quantidade)), 0)
    console.log(totalCompra.toFixed(2))

    const navigate = useNavigate()



    return (
        <>
            <h1>Detalhes da compra</h1>
 
            <p className='detalhes-compra'>{produtosSelecionados.length} ítens no carrinho</p>
            <p className='detalhes-compra'>Valor total da compra:</p>
            <h2 className='detalhes-compra'> R$ {totalCompra.toFixed(2)}</h2>
            <button onClick={() => {navigate('/pagamento')}} id="btn-confirm-compra">Confirmar compra</button>

            <section className="listagem-cards-produtos">
                {produtosSelecionados.map((produto) => (
                    <CardProduto
                    key={produto.id}
                    id={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    marca={produto.marca}
                    precoUnit={produto.preco}
                    quantidade={produto.quantidade}
                    />
                ))}
            </section>

        </>
    )

}

export default Carrinho