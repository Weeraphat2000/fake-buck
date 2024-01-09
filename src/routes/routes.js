import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import FreindPage from "../pages/FreindPage";

// createBrowserRouter เอาไว้สร้าง rout ต่างๆให้ App รับ input เป็น array ของ router Obj
// router obj => {path: str, component: react component}
// setup router
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
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
