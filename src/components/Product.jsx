import styled from "styled-components"

import Button from "./styled/Button"

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    transition: 0.3s;
    box-shadow: 0px 0px 8px 1px rgba(13,12,12,0.75);
    :hover {
        box-shadow: 0px 0px 20px 1px rgba(13,12,12,0.75);
    }
`

function Product(props) {
    // const item = {
    //     id: 1,
    //     title: "Bag",
    //     price: 50,
    //     description: "Bags for every occasion",
    //     category: "men's clothing",
    //     image: "https://robohash.org/bag",
    //     rating: {
    //         rate: 4,
    //         count: 100,
    //     },
    // }

    const item = props.productInfo
    return (
        <Wrapper>
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
            <Button>Add To Cart</Button>
        </Wrapper>
    )
}

//default export - have only one default export in a file
export default Product
