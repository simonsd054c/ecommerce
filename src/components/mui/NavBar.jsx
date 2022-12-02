import { AppBar, Box, Button, Container, Toolbar } from "@mui/material"
import { useGlobalContext } from "../utils/globalStateContext"

function NavBar() {
    const navBarItems = [
        {
            title: "Products",
            id: "#products",
        },
        {
            title: "Add Product",
            id: "#addProduct",
        },
        {
            title: "Cart",
            id: "#cart",
        },
    ]

    const { store, dispatch } = useGlobalContext()

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                        {navBarItems.map((item) => {
                            return (
                                <a
                                    key={item.title}
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    href={item.id}
                                >
                                    <Button
                                        sx={{
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                </a>
                            )
                        })}
                    </Box>
                    {store.loggedInUserName}
                    {store.loggedInUserName && (
                        <button 
                            onClick={() => {
                                dispatch({
                                    type: 'setToken',
                                    data: null
                                })
                                dispatch({
                                    type: 'setLoggedInUserName',
                                    data: null
                                })
                            }}
                        >Logout</button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar
