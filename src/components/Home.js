import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProcductDetail'
import ModalCart from './ModalCart'

export class Home extends Component {
    state = {
        selectedProductStt: null,
        cart: []
    }
    selectedProduct = (prod) => {
        this.setState({
            selectedProductStt: prod,
        });
    }

    addToCart = (product) => {
        let cloneCart = [...this.state.cart];
        
        const foundItem = cloneCart.find(item => {
            return item.product.id === product.id
        })

        if (foundItem) {
            foundItem.quantity += 1;
        } else {
            const cartItem = {
                product: product,
                quantity: 1
            }
            cloneCart.push(cartItem);
        }
        this.setState({
            cart: cloneCart,
        }, () => {console.log(this.state.cart)})
    }

    handleDelete = (id) => {
        let cloneCart = [...this.state.cart];

        const foundItem = cloneCart.findIndex(item => item.product.id === id);

        if(foundItem !== -1) {
            cloneCart.splice(foundItem,1)
        }

        this.setState({
            cart: cloneCart
        })
    }

    handleChange = (e,prod) => {
        let cloneCart = [...this.state.cart]
        const foundItem = cloneCart.find(item => item.product.id === prod.product.id);
        if (foundItem === -1) return;
        foundItem.quantity = e.target.value;

        this.setState({
            cart: cloneCart
        })
    }
    
    handlePaid = () => {
        this.setState({
            cart: []
        })
    }

    render() {
        let products = [
            {
                id: 1,
                name: "Adidas Prophere",
                alias: "adidas-prophere",
                price: 350,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                quantity: 995,
                image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
            },
            {
                id: 2,
                name: "Adidas Prophere Black White",
                alias: "adidas-prophere-black-white",
                price: 450,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                quantity: 990,
                image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
            },
            {
                id: 3,
                name: "Adidas Prophere Customize",
                alias: "adidas-prophere-customize",
                price: 375,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                quantity: 415,
                image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
            },
            {
                id: 4,
                name: "Adidas Super Star Red",
                alias: "adidas-super-star-red",
                price: 465,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                quantity: 542,
                image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
            },
            {
                id: 5,
                name: "Adidas Swift Run",
                alias: "adidas-swift-run",
                price: 550,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                quantity: 674,
                image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
            },
            {
                id: 6,
                name: "Adidas Tenisky Super Star",
                alias: "adidas-tenisky-super-star",
                price: 250,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                quantity: 456,
                image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
            },
            {
                id: 7,
                name: "Adidas Ultraboost 4",
                alias: "adidas-ultraboost-4",
                price: 450,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                quantity: 854,
                image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
            },
            {
                id: 8,
                name: "Adidas Yeezy 350",
                alias: "adidas-yeezy-350",
                price: 750,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                quantity: 524,
                image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
            },
            {
                id: 9,
                name: "Nike Adapt BB",
                alias: "nike-adapt-bb",
                price: 630,
                description:
                    "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
                shortDescription: "Paul George is the rare high-percentage shooter",
                quantity: 599,
                image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
            },
            {
                id: 10,
                name: "Nike Air Max 97",
                alias: "nike-air-max-97",
                price: 650,
                description:
                    "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
                shortDescription: "Paul George is the rare high-percentage shooter",
                quantity: 984,
                image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
            },
            {
                id: 11,
                name: "Nike Air Max 97 Blue",
                alias: "nike-air-max-97-blue",
                price: 450,
                description:
                    "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
                shortDescription: "Paul George is the rare high-percentage shooter",
                quantity: 875,
                image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
            },
            {
                id: 12,
                name: "Nike Air Max 270 React",
                alias: "nike-air-max-270-react",
                price: 750,
                description:
                    "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
                shortDescription: "Paul George is the rare high-percentage shooter",
                quantity: 445,
                image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
            },
        ];

        return (
            <div className='container'>
                <h1 className='display-2'>Danh sách sản phẩm</h1>
                <p className='text-right'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                    style={{ cursor: 'pointer' }}
                >Giỏ hàng (0)</p>
                <ProductList prods={products} onPickCart={this.addToCart} onSelectedProduct={this.selectedProduct}></ProductList>
                {this.state.selectedProductStt ? <ProductDetail selectedProduct={this.state.selectedProductStt}></ProductDetail> : null}
                <ModalCart onPaid={this.handlePaid} productCart={this.state.cart} onInputChange={this.handleChange} onDelete = {this.handleDelete}></ModalCart>
            </div>
        )
    }
}

export default Home