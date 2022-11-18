import Title from "./styled/Title"
import Product from "./Product"

function ProductInfo(props) {
    const item = props.item
    if(!item) {
        return null
    }
    return (
        <>
            <Title>{item.title}</Title>
            <Product productInfo={item} />
        </>
    )
}

export default ProductInfo