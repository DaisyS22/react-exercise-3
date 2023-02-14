import Cart from "./components/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import Products from "./components/pages/Products";
import NewProduct from "./components/pages/NewProduct";
import HomePage from "./components/pages/HomePage";
import EditProduct from "./components/pages/EditProduct";
import ProductDetail from "./components/pages/ProductDetail";
import { loader as productsLoader } from "./components/pages/Products";
import { loader as productDetailLoader } from "./components/pages/ProductDetail";
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
      { path: "products", element: <Products /> },
      {
        path: ":productId",
        element: <ProductDetail />,
        loader: productDetailLoader,
      },
      { path: "new", element: <NewProduct /> },
      { path: ":productId/edit", element: <EditProduct /> },
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
