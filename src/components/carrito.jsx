import React, { useState } from 'react';
import ProductoFuncional from './producto-funcional';
import ProductoClase from './producto-clase';


const Carrito = () => {

    const [unidadesTotales, setUnidadesTotales] = useState(0);

    const agregarUnidadesTotales = () => {
        setUnidadesTotales(unidadesTotales + 1)
    }

    return (
        <>
            <div>Cantidad de unidades totales: {unidadesTotales}</div>
            <ProductoFuncional unidadesTotales={unidadesTotales} agregarUnidadesTotales={agregarUnidadesTotales}/>
            <ProductoClase unidadesTotales={unidadesTotales} agregarUnidadesTotales={agregarUnidadesTotales}/>
        </>
    )

}


export default Carrito;