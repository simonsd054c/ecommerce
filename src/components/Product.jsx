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
}

//default export - have only one default export in a file
export default Product
