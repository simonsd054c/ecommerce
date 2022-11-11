//importing named exports - name must be same
import { ProductList } from "./components/ProductList"

//rename named exports using as
// import {Button as ProductListButton} from "another file"

import Cart from "./components/Cart"
import NavBar from "./components/mui/NavBar"

function App() {
    return (
        <div className="App">
            <NavBar />
            <ProductList />
            <Cart />
        </div>
    )
}

export default App
