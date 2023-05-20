import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Body from "../Home/Body/Body";
import Login from "../Home/Login/Login";
import Register from "../Home/Register/Register";
import Blog from "../Home/Blogs/Blog";
import AddToy from "../AddToy/AddToy";

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
        }
      ]
    },
  ]);

  export default router;