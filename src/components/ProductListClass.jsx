import { Component } from "react"

import styled from "styled-components"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

import ProductClass from "./ProductClass"
import Title from "./styled/Title"
import GridBox from "./styled/GridBox"

const CustomGrid = styled(GridBox)`
    padding: 30px;
`

class ProductListClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products?limit=9")
            .then((res) => res.json())
            .then((json) => {
                const newItems = json.map((product) => {
                    product.stock = 5
                    return product
                })
                this.setState({
                    items: newItems,
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <>
                {this.state.isLoading ? (
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
                            {this.state.items.map((item) => {
                                return (
                                    <ProductClass
                                        key={item.id}
                                        productInfo={item}
                                        setItem={this.props.setItem}
                                    />
                                )
                            })}
                        </CustomGrid>
                    </div>
                )}
            </>
        )
    }
}

export default ProductListClass
