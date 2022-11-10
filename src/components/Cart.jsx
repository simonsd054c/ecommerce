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
    ]

    return (
        <div>
            <h2>Cart</h2>
            {items.map((item) => {
                return (
                    <div>
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
                            }}
                        >
                            ${item.price}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart
