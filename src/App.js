import { useEffect, useReducer, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

//importing named exports - name must be same
import { ProductList } from "./components/ProductList";

// import ProductListClass from "./components/ProductListClass"
import ProductInfo from "./components/ProductInfo";

import AddProduct from "./components/AddProduct";
import Login from "./components/Login";

//rename named exports using as
// import {Button as ProductListButton} from "another file"

import Cart from "./components/Cart";
import NavBar from "./components/mui/NavBar";
import { GlobalContext } from "./components/utils/globalStateContext";
import globalReducer from "./components/reducers/globalReducer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const initialState = {
    loggedInUserName: "",
    token: "",
  };

  const [store, dispatch] = useReducer(globalReducer, initialState);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    if (username && token) {
      dispatch({
        type: "setLoggedInUserName",
        data: username,
      });
      dispatch({
        type: "setToken",
        data: token,
      });
    }
  }, []);

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
        <div className="App">
          <GlobalContext.Provider value={{ store, dispatch }}>
            <RouterProvider router={router} />
          </GlobalContext.Provider>
        </div>
      )}
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path="login" element={<Login />} />
      <Route path="products/add" element={<AddProduct />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function MainPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  function setItem(item) {
    setSelectedItem(item);
  }

  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Login />
      <ProductList setItem={setItem} />
      <ProductInfo item={selectedItem} />
      <AddProduct />
      <Cart /> */}
    </>
  );
}

export default App;
