

function CardProduto({id, nome, precoUnit, quantidade}){


    return (
        <div className="card-produto" key={id}>
            <h2>{nome}</h2>
            <span>{precoUnit}</span>
            <span>{quantidade}</span>
        </div>
    )

}

export default CardProduto