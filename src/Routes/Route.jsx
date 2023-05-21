import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Body from "../Home/Body/Body";
import Login from "../Home/Login/Login";
import Register from "../Home/Register/Register";
import Blog from "../Home/Blogs/Blog";
import AddToy from "../AddToy/AddToy";
import MyToy from "../MyToys/MyToy";

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
          loader: () => fetch('http://localhost:5000/toys')
        }
      ]
    },
  ]);

  export default router;