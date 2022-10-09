import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Main from './layout/Main';
import Shop from './component/Shop/Shop'
import Orders from './component/Orders/Orders'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        }
      ]
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/orders',
      element: <Orders></Orders>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div >
  );
}

export default App;
