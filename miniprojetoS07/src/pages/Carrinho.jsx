import { useState, useEffect } from "react"
import { catalogoProdutos } from "../data/produtos"
import CardProduto from "../components/CardProduto"
function Carrinho(){

    const produtosSelecionados = [
        catalogoProdutos[0],
        catalogoProdutos[1],
        catalogoProdutos[3],
        catalogoProdutos[4],
        catalogoProdutos[8]
    ]
    console.log(produtosSelecionados)

    return (

        <>
            <h1>renderização de cards produtos</h1>
            <section>
                {produtosSelecionados.map(produto =>
                    <CardProduto
                    id={produto.id}
                    nome={produto.nome}
                    precoUnit={produto.preco}
                    quantidade={produto.quantidade}
                    />
                )}
            </section>
        </>
    )

}

export default Carrinho