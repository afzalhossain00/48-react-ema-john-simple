import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Main from './layout/Main';
import Shop from './component/Shop/Shop'
import Orders from './component/Orders/Orders'
import Inventory from './component/Inventory/Inventory';
import { productAndCartLoder } from './Loders/ProductsAndCartLoder';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productAndCartLoder,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>

        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div >
  );
}

export default App;
