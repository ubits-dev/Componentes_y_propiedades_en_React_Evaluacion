import React, { Component } from 'react';


class ProductoClase extends Component {

    constructor(props){
        super(props)
        this.state = { unidadesClase: 0 };
    }
    
    agregarUnidadesClase = () => {
        const { unidadesTotales, agregarUnidadesTotales } = this.props;
        agregarUnidadesTotales(unidadesTotales + 1);
        this.setState({ unidadesClase: this.state.unidadesClase + 1});
        
    }

    render() {
        return <>
            <div>Cantidad de unidades clase: {this.state.unidadesClase}</div>
            <button onClick={this.agregarUnidadesClase}>Agregar</button>
        </>
    }

}


export default ProductoClase;