import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Body from "../Home/Body/Body";
import Login from "../Home/Login/Login";
import Register from "../Home/Register/Register";
import Blog from "../Home/Blogs/Blog";
import AddToy from "../AddToy/AddToy";
import MyToy from "../MyToys/MyToy";
import Not from "../NotFound/Not";
import AllToy from "../AllToy/AllToy";
import Private from "../Private/Private";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Body></Body>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>
        },
        {
          path: '/addtoy',
          element: <Private><AddToy></AddToy></Private>
        },
        {
          path: '/mytoy',
          element: <Private><MyToy></MyToy></Private>,
          loader: () => fetch('https://server-assignment-elaven-sourov-hossain1.vercel.app/toys')
        },
        {
          path: '/alltoy',
          element: <AllToy></AllToy>,
          loader: () => fetch('https://server-assignment-elaven-sourov-hossain1.vercel.app/toys')
        }
        
      ]
    },
    {
      path: '/*',
      element: <Not></Not>
    }
  ]);

  export default router;