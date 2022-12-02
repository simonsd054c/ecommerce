import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import Title from "./styled/Title"
import Product from "./Product"
import Review from "./Review"

function ProductInfo() {
    const [item, setItem] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        axios.get(`products/${productId}`)
           .then((res) => res.data)
           .then((json) => {
               setItem({
                   ...json,
                   stock: 5
               })
           })
           .catch((err) => {
               console.log(err)
           })
    }, [productId])

    if (!item) {
        return null
    }
    return (
        <>
            <Title>{item.title}</Title>
            <Product productInfo={item} />
            <Review />
        </>
    )
}

export default ProductInfo
