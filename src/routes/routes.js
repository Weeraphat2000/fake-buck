import { RouterProvider, createBrowserRouter } from "react-router-dom";

// createBrowserRouter เอาไว้สร้าง rout ต่างๆให้ App รับ input เป็น array ของ router Obj
// router obj => {path: str, component: react component}
// setup router
const router = createBrowserRouter([
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/",
    element: <h1>HomePage</h1>,
  },
  {
    path: "/profile",
    element: <h1>ProfilePage</h1>,
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
