//importing default exports - name can be different
import Product from "./Product"

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
    ]
    return (
        <>
            <h2>Products</h2>
            <div
                style={{
                    display: "flex",
                }}
            >
                {items.map((item) => {
                    return <Product key={item.id} productInfo={item} />
                })}
                {/* <Product productInfo={items[0]} />
            <Product productInfo={items[1]} />
            <Product productInfo={items[2]} /> */}
            </div>
        </>
    )
}

//named export - have many named exports in a file
export { ProductList }
