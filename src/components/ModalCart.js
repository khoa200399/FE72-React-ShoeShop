import React, { Component } from 'react'

export class ModalCart extends Component {
    closeButtonRef = React.createRef();
    
    state = {
        cart: this.props.productCart,
    }

    render() {
        const cart = this.props.productCart;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Prodct Name</th>
                                        <th>Product Image</th>
                                        <th style={{ width: '10%' }}>Quanity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(item => {
                                        return (
                                            <tr key={item.product.id}>
                                                <td>{item.product.id}</td>
                                                <td>{item.product.name}</td>
                                                <td>
                                                    <img src={item.product.img} alt=''></img>
                                                </td>
                                                <td>
                                                    <input onChange={(e) => this.props.onInputChange(e, item)} value={item.quantity} type="number" style={{ width: '100%', padding: '0' }} />
                                                </td>
                                                <td>{item.product.price}</td>
                                                <td>{item.product.price * item.quantity}</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => {
                                                        this.props.onDelete(item.product.id)
                                                    }}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={this.closeButtonRef} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => { 
                                this.props.onPaid();
                                this.closeButtonRef.current.click();
                            }
                            } type="button" className="btn btn-primary">Paid</button>
                    </div>
                </div>
            </div>
            </div >

        )
    }
}

export default ModalCart