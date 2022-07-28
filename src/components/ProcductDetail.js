import React, { Component } from 'react'

export class ProcductDetail extends Component {
  render() {
    const product = this.props.selectedProduct;
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <img src={product.image} style={{width: '100%'}} alt="" />
            </div>
            <div className='col-8'>
                <h2>Specifications</h2>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>Product Name</th>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <th>Product Price</th>
                            <td>${product.price}</td>
                        </tr>
                        <tr>
                            <th>Product Description</th>
                            <td>{product.shortDescription}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}

export default ProcductDetail