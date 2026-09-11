import { catalogoProdutos } from "../data/produtos"
import CardProduto from "../components/CardProduto"
import ResumoCompras from "../components/ResumoCompras"


function Carrinho(){

    const produtosSelecionados = [
        catalogoProdutos[0],
        catalogoProdutos[1],
        catalogoProdutos[3],
        catalogoProdutos[4],
        catalogoProdutos[8]
    ]
    console.log(produtosSelecionados)
    // console.log(typeof produtosSelecionados.item.preco)
    // console.log(typeof produtosSelecionados.item.quantidade)

    const totalCompra = produtosSelecionados.reduce(
        (acc, item) => acc + (Number(item.preco)*Number(item.quantidade)), 0)
    console.log(totalCompra)

    function irResumoCompra(){


    }
    
    return (
        <>
            <h1>Seu carrinho de compras</h1>
            {/* <div className="card-resumo-compra">
                {produtosSelecionados.map((produto) => (
                    <ResumoCompras
                    key={produto.id}
                    id={produto.id}
                    nome={produto.nome}
                    marca={produto.marca}
                    precoUnit={produto.preco}
                    quantidade={produto.quantidade}
                    />
                ))}
            </div> */}


            <p>{produtosSelecionados.length} ítens no carrinho</p>
            <p>Valor total da compra: {totalCompra}</p>
            <button onClick={irResumoCompra}>Confirmar compra</button>

            <section className="listagem-cards-produtos">
                {produtosSelecionados.map((produto) => (
                    <CardProduto
                    key={produto.id}
                    id={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    precoUnit={produto.preco}
                    quantidade={produto.quantidade}
                    />
                ))}
            </section>
        
        </>
    )

}

export default Carrinho