//importing named exports - name must be same
import { ProductList } from "./components/ProductList"

//rename named exports using as
// import {Button as ProductListButton} from "another file"

import Cart from "./components/Cart"

function App() {
    return (
        <div className="App">
            <ProductList />
            <Cart />
        </div>
    )
}

export default App
