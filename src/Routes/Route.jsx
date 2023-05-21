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
          element: <AddToy></AddToy>
        },
        {
          path: '/mytoy',
          element: <MyToy></MyToy>,
          loader: () => fetch('https://server-assignment-elaven.vercel.app/toys')
        },
        {
          path: '/alltoy',
          element: <AllToy></AllToy>,
          loader: () => fetch('https://server-assignment-elaven.vercel.app/toys')
        },
        {
          path: '/*',
          element: <Not></Not>
        }
      ]
    },
  ]);

  export default router;