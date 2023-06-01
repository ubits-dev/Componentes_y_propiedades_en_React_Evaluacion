import React, { useState } from 'react';


const ProductoFuncional = (props) => {
    const { unidadesTotales, agregarUnidadesTotales } = props;

    const [unidadesFuncionales, setUnidadesFuncionales] = useState(0);

    const agregarUnidadesFuncionales = () => {
        setUnidadesFuncionales(unidadesFuncionales + 1)
        agregarUnidadesTotales(unidadesTotales + 1)
    }

    return (
        <>
            <div>Cantidad de unidades funcionales: {unidadesFuncionales}</div>
            <button onClick={agregarUnidadesFuncionales}>Agregar</button>
        </>
    )

}


export default ProductoFuncional;