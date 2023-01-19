import { useLoaderData } from "react-router-dom"
import axios from "axios"

import Title from "./styled/Title"
import GridBox from "./styled/GridBox"
import CartItem from "./CartItem"

function Cart() {
    const items = useLoaderData()

    return (
        <div id="cart">
            <Title>Cart</Title>
            <GridBox>
                {items.map((item) => {
                    return <CartItem key={item.id} item={item} />
                })}
            </GridBox>
        </div>
    )
}

export function loader() {
    return axios
        .get("/carts/cart")
        .then((res) => res.data)
        .then((json) => {
            const products = json.products
            let newItemsPromise = []
            const getProductPromise = (productId) => {
                return axios
                    .get(`/products/${productId}`)
                    .then((res) => res.data)
                    .then((json) => {
                        return {
                            ...json,
                            stock: 5,
                        }
                    })
            }
            products.forEach((product) => {
                newItemsPromise.push(getProductPromise(product.productId))
            })
            return Promise.all(newItemsPromise)
        })
}

export default Cart
