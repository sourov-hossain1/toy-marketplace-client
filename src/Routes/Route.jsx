import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Body from "../Home/Body/Body";
import Login from "../Home/Login/Login";

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
        }
      ]
    },
  ]);

  export default router;