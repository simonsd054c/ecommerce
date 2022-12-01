import Title from "./styled/Title"
import Product from "./Product"
import Review from "./Review"

function ProductInfo(props) {
    const item = props.item
    if(!item) {
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