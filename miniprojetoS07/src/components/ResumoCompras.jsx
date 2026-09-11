import { useState } from "react";

function ResumoCompras({id, nome, marca, precoUnit, quantidade}){

    return(

        <React.Fragment className="card-item-compra" key={id}>
            <h2>{nome}</h2>
            <h3>{marca}</h3>
            <p>{quantidade}</p>
            <p>R$ {(precoUnit)*(quantidade)}</p>
        </React.Fragment>

    )

}

export default ResumoCompras