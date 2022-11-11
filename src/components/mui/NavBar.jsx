import { AppBar, Box, Button, Container, Toolbar } from "@mui/material"

function NavBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                        <a style={{
                            textDecoration: 'none'
                        }} href="#products">
                            <Button
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                Products
                            </Button>
                        </a>
                        <a style={{
                            textDecoration: 'none'
                        }} href="#cart">
                            <Button
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                Cart
                            </Button>
                        </a>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar
