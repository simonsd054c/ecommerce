import Title from "./styled/Title"
import GridBox from "./styled/GridBox"
import CartItem from "./CartItem"

function Cart() {
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
            stock: 10,
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
            stock: 10,
        },
    ]

    return (
        <div id="cart">
            <Title>Cart</Title>
            <GridBox>
                {items.map((item) => {
                    return (
                        <CartItem key={item.id} item={item} />
                    )
                })}
            </GridBox>
        </div>
    )
}

export default Cart
