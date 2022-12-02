import { Link, useNavigate } from "react-router-dom"
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material"
import { useGlobalContext } from "../utils/globalStateContext"

function NavBar() {
    const navBarItems = [
        {
            title: "Products",
            linkTo: "/",
        },
        {
            title: "Add Product",
            linkTo: "products/add",
        },
        {
            title: "Cart",
            linkTo: "cart",
        },
    ]

    const { store, dispatch } = useGlobalContext()

    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                        {navBarItems.map((item) => {
                            return (
                                <Link
                                    key={item.title}
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    to={item.linkTo}
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
                                </Link>
                            )
                        })}
                    </Box>
                    {store.loggedInUserName}
                    {store.loggedInUserName ? (
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "setToken",
                                    data: null,
                                })
                                dispatch({
                                    type: "setLoggedInUserName",
                                    data: null,
                                })
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                navigate("login")
                            }}
                        >
                            Login
                        </button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar
