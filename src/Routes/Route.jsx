import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Body from "../Home/Body/Body";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Body></Body>
        }
      ]
    },
  ]);

  export default router;