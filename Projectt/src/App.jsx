import "./styles.css";
import BigBox from "./components/BigBox.jsx";
import Header from "./pages/Header.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Technology from "./pages/Technology.jsx";


const router=createBrowserRouter([
  {
    path:"/",
    element:<AboutUs/>,
    children:[{
      path:"/",
      element:<Header/>
    }]
  },
  {
    path:"/Dashboard",
    element:<BigBox/>,
    children:[{
      path:"/Dashboard",
      element:<Header/>
    }]
  },
  {
    path:"/Technology",
    element:<Technology/>,
    children:[{
      path:"/Technology",
      element:<Header/>
    }]
  }
]);

export default function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}
