import React, { Component } from 'react';


class ProductoClase extends Component {

    constructor(props){
        super(props)
        this.state = { unidadesClase: 0 };
    }

    agregarUnidadesClase = () => {

    }

    render() {
        <>
            <div>Cantidad de unidades clase: {}</div>
            <button>Agregar</button>
        </>
    }

}


export default ProductoClase;