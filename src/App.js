import Cart from "./components/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import Products from "./components/Products/Products";
import NewProduct from "./components/pages/NewProduct";
import HomePage from "./components/pages/HomePage";
import EditProduct from "./components/pages/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cart-items", element: <Cart /> },
      { path: "products/new", element: <NewProduct /> },
      { path: "products/:eventId/edit", element: <EditProduct /> },
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
