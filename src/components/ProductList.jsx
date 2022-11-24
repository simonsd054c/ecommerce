import styled from "styled-components"

import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

//importing default exports - name can be different
import Product from "./Product"
// import ProductClass from "./ProductClass"
import Title from "./styled/Title"
import GridBox from "./styled/GridBox"

import useApi from "./utils/useApi"

const CustomGrid = styled(GridBox)`
    padding: 30px;
`

function ProductList(props) {

    const [isLoading, itemsWithoutStock] = useApi("/products?limit=9")

    const items = itemsWithoutStock.map((item) => {
        item.stock = 5
        return item
    })

    // const [items, setItems] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // //componentDidMount and componentDidUpdate
    // // useEffect(() => {
    // //     console.log("useEffect")
    // // })

    // //componentDidMount
    // useEffect(() => {
    //     axios.get("/products?limit=9")
    //         .then((res) => res.data)
    //         .then((json) => {
    //             const newItems = json.map((product) => {
    //                 product.stock = 5
    //                 return product
    //             })
    //             // this.setState({
    //             //     items: newItems,
    //             //     isLoading: false
    //             // })
    //             setItems(newItems)
    //             setIsLoading(false)
    //         })
    // }, [])

    return (
        <>
        {isLoading ? (
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <CircularProgress />
        </Box>
        ) : (
        <div id="products">
            <Title>Products</Title>
            <CustomGrid>
                {items.map((item) => {
                    return (
                        <Product
                            key={item.id}
                            productInfo={item}
                            setItem={props.setItem}
                        />
                    )
                })}
            </CustomGrid>
        </div>
        )}
        </>
    )
}

//named export - have many named exports in a file
export { ProductList }
