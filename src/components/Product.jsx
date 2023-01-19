import { useState } from "react"
import styled from "styled-components"
import {useNavigate} from "react-router-dom"

import Button from "./styled/Button"

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    transition: 0.3s;
    box-shadow: 0px 0px 8px 1px rgba(13, 12, 12, 0.75);
    :hover {
        box-shadow: 0px 0px 20px 1px rgba(13, 12, 12, 0.75);
    }
`

function Product(props) {
    const item = props.productInfo
    const [itemOnCart, setItemOnCart] = useState(0)

    const navigate = useNavigate()

    function handleAddToCart(e) {
        e.stopPropagation()
        setItemOnCart((prevState) => {
            return prevState + 1
        })
    }

    return (
        <Wrapper onClick={() => {
            navigate(`product/${item._id}`)
        }}>
            <img
                style={{
                    height: 200,
                }}
                src={item.image}
                alt="Bag"
            ></img>
            <div
                style={{
                    fontSize: 25,
                    fontWeight: 700,
                    marginBottom: 10,
                }}
            >
                {item.title}
            </div>
            <div>{item.description}</div>
            <div
                style={{
                    color: "red",
                    marginTop: 10,
                    marginBottom: 10,
                }}
            >
                ${item.price}
            </div>
            <div>Stock: {item.stock}</div>
            <div>Stock Left: {item.stock - itemOnCart}</div>

            <Button
                greaterThanfive={itemOnCart > 5}
                disabled={item.stock === itemOnCart}
                onClick={handleAddToCart}
            >
                {item.stock === itemOnCart ? "No Stock Left" : "Add To Cart"}
            </Button>
        </Wrapper>
    )
}

//default export - have only one default export in a file
export default Product
