import styled from "styled-components"

//importing default exports - name can be different
import Product from "./Product"
import Title from "./styled/Title"
import GridBox from "./styled/GridBox"

const CustomGrid = styled(GridBox)`
    padding: 30px;
`

function ProductList() {
    const items = [
        {
            id: 1,
            title: "Bag",
            price: 50,
            description: "Bags for every occasion",
            category: "men's clothing",
            image: "https://robohash.org/bag",
            rating: {
                rate: 4,
                count: 100,
            },
        },
        {
            id: 2,
            title: "Phone",
            price: 500,
            description: "Phones for every occasion",
            category: "Electronics",
            image: "https://robohash.org/phone",
            rating: {
                rate: 4,
                count: 100,
            },
        },
        {
            id: 3,
            title: "Shoes",
            price: 150,
            description: "Shoes for every occasion",
            category: "women's clothing",
            image: "https://robohash.org/shoes",
            rating: {
                rate: 4,
                count: 100,
            },
        },
        {
            id: 4,
            title: "Bag",
            price: 50,
            description: "Bags for every occasion",
            category: "men's clothing",
            image: "https://robohash.org/bag",
            rating: {
                rate: 4,
                count: 100,
            },
        },
        {
            id: 5,
            title: "Phone",
            price: 500,
            description: "Phones for every occasion",
            category: "Electronics",
            image: "https://robohash.org/phone",
            rating: {
                rate: 4,
                count: 100,
            },
        },
        {
            id: 6,
            title: "Shoes",
            price: 150,
            description: "Shoes for every occasion",
            category: "women's clothing",
            image: "https://robohash.org/shoes",
            rating: {
                rate: 4,
                count: 100,
            },
        },
        {
            id: 7,
            title: "Bag",
            price: 50,
            description: "Bags for every occasion",
            category: "men's clothing",
            image: "https://robohash.org/bag",
            rating: {
                rate: 4,
                count: 100,
            },
        },
        {
            id: 8,
            title: "Phone",
            price: 500,
            description: "Phones for every occasion",
            category: "Electronics",
            image: "https://robohash.org/phone",
            rating: {
                rate: 4,
                count: 100,
            },
        },
        {
            id: 9,
            title: "Shoes",
            price: 150,
            description: "Shoes for every occasion",
            category: "women's clothing",
            image: "https://robohash.org/shoes",
            rating: {
                rate: 4,
                count: 100,
            },
        },
    ]
    return (
        <div id="products">
            <Title>Products</Title>
            <CustomGrid>
                {items.map((item) => {
                    return <Product key={item.id} productInfo={item} />
                })}
                {/* <Product productInfo={items[0]} />
            <Product productInfo={items[1]} />
            <Product productInfo={items[2]} /> */}
            </CustomGrid>
        </div>
    )
}

//named export - have many named exports in a file
export { ProductList }
