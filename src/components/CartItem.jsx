const CartItem = (props) => {
    const item = props.item
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
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
                }}
            >
                ${item.price}
            </div>
            <div style={{
                marginTop: 5
            }}>
                <button>-</button>
                <span style={{
                    margin: '0px 5px'
                }}>5</span>
                <button>+</button>
            </div>
        </div>
    )
}

export default CartItem
