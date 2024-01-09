import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import FreindPage from "../pages/FreindPage";
import AppLaout from "../layout/AppLaout";

// createBrowserRouter เอาไว้สร้าง rout ต่างๆให้ App รับ input เป็น array ของ router Obj
// router obj => {path: str, component: react component}
// setup router
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  //
  //
  //
  {
    path: "/",
    element: <AppLaout />,
    // ใส่เป็น array
    children: [
      {
        path: "",
        element: <HomePage />, // จะเป็น outlet
      },
      {
        path: "profile",
        element: <ProfilePage />, // จะเป็น outlet
      },
      {
        path: "friend",
        element: <FreindPage />, // จะเป็น outlet
      },
    ],
  },
  //
  //
  //
  {
    // ใส่ id(ลำดับได้)
    path: "/friend/:friendId",
    element: <h1>FrindPage width ID</h1>,
  },
  {
    path: "*",
    element: <h1>page not found</h1>,
  },
]);

// setup provider
export default function Router() {
  return <RouterProvider router={router} />;
}
