import React from "react" 

function CardProduto({id, nome, marca, imagem, precoUnit, quantidade}){


    return (
        <div className="card-produto" key={id}>
            <img src={imagem} alt={nome} style={{ maxWidth: '200px', width: '100%', height: 'auto' }}/>
            <div className="card-produto-subdiv">
                <h3>{nome}</h3>
                <p>{marca}</p>
            </div>
            <div className="card-produto-subdiv">
                <p>R$ {precoUnit.toFixed(2)}</p><br/>
                <p><button>-</button>   {quantidade}  <button>+</button></p><br/>
                <p>R$ {(precoUnit.toFixed(2)*quantidade).toFixed(2)} </p>
            </div>
        </div>
    )

}

export default CardProduto