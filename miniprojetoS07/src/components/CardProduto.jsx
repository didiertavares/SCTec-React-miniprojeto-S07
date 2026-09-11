import React from "react" 

function CardProduto({id, nome, marca, imagem, precoUnit, quantidade}){


    return (
        <div className="card-produto" key={id}>
            <img src={imagem} alt={nome} style={{ maxWidth: '200px', width: '100%', height: 'auto' }}/>
            <h3>{nome}</h3>
            <p>{marca}</p>
            
            <p>R$ {precoUnit.toFixed(2)}</p>
            <p>{quantidade}</p>
        </div>
    )

}

export default CardProduto