import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Body from "../Home/Body/Body";
import Login from "../Home/Login/Login";
import Register from "../Home/Register/Register";
import Blog from "../Home/Blogs/Blog";

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
        }
      ]
    },
  ]);

  export default router;