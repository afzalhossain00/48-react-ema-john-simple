import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Main from './layout/Main';
import Shop from './component/Shop/Shop'
import Orders from './component/Orders/Orders'
import Inventory from './component/Inventory/Inventory';
import { productAndCartLoder } from './Loders/ProductsAndCartLoder';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import Shipping from './component/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';

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
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>

        },
        {
          path: 'shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>

        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
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
