import React from "react" 

function CardProduto({id, nome, marca, precoUnit, quantidade}){


    return (
        <React.Fragment className="card-produto" key={id}>
            <h2>{nome}</h2>
            <h3>{marca}</h3>
            <span> R$ {precoUnit}</span>
            <span>{quantidade}</span>
        </React.Fragment>
    )

}

export default CardProduto