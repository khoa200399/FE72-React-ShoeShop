import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        const products = this.props.prods;
        return (
            <div className='container'>
                <div className='row'>
                    {products.map(product => {
                        return (
                            <div key={product.id} className='col-4 mb-3'>
                                <ProductItem onPickCart={this.props.onPickCart} onSelectedProduct={this.props.onSelectedProduct} prods={product}></ProductItem>
                            </div>)
                    })}

                </div>
            </div>
        )
    }
}
