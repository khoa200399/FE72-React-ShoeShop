import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const product = this.props.prods;
  
    return (
      <div className='card' style={{margin: "10px", padding:"15px",height:"100%"}}>
        <div className='w-100'>
            <img src={product.image} style={{width: '100%'}} alt="" />
            <h3>{product.name}</h3>
            <button className='btn btn-info' onClick={() => this.props.onSelectedProduct(product)}>Detail</button>
            <button className='btn btn-dark' onClick={() => this.props.onPickCart(product)}  style={{margin: "5px"}}>Add to cart</button>
        </div>
      </div>
    )
  }
}
