import Cart from "./components/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import Products, {
  loader as productsLoader,
} from "./components/pages/Products";
import NewProduct, {
  action as newProductAction,
} from "./components/pages/NewProduct";
import HomePage from "./components/pages/HomePage";
import EditProduct from "./components/pages/EditProduct";
import ProductDetail from "./components/pages/ProductDetail";
import {
  loader as productDetailLoader,
  action as deleteProductAction,
} from "./components/pages/ProductDetail";

import Error from "./components/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: productsLoader,
      },
      { path: "cart-items", element: <Cart /> },
      // { path: "products", element: <Products /> },
      {
        path: ":productId",
        id: "product-detail",
        loader: productDetailLoader,
        children: [
          {
            index: true,
            element: <ProductDetail />,
            action: deleteProductAction,
          },
          { path: "edit", element: <EditProduct /> },
        ],
      },
      { path: "new", element: <NewProduct />, action: newProductAction },
    ],
  },
]);

function App() {
  return (
    // <CartProvider>
    //   {cartIsShown && <Cart onClose={hideCartHandler} />}
    //   <Header onShowCart={showCarthandler} />
    //   <main>
    //     <Items />
    //   </main>
    // </CartProvider>

    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
