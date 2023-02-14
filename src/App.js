import Cart from "./components/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import Products from "./components/Products/Products";
import NewProduct from "./components/NewProduct/ProductForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/cart-items",
        element: <Cart />,
      },
      { path: "/add-product", element: <NewProduct /> },
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
