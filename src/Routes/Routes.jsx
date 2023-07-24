import {
    createBrowserRouter,
    
  } from "react-router-dom";
  import Main from '../Layout/Main'
import Home from "../Pages/Home/Home";
import Colleges from "../Pages/Colleges";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";
export   const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    
      children: [
        {
          path: "/",
          element: < Home/>,
        },
        {
          path: "/colleges",
          element: < Colleges/>,
        },
        {
          path: "/admission",
          element: < Admission/>,
        },
        {
          path: "/mycollege",
          element: < MyCollege/>,
        },
      ],
    },
  ]);