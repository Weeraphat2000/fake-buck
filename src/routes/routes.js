import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import FreindPage from "../pages/FreindPage";
import AppLaout from "../layout/AppLaout";
import FriendProfileWithId from "../pages/FriendProfileWithId";
import ProtexRoute from "./ProtexRoute";
import RedirecRout from "./RedirecRout";

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
    element: (
      // เอามา ครอบ
      <RedirecRout>
        {/* เอามาครอบ */}
        <ProtexRoute>
          <AppLaout />
        </ProtexRoute>
      </RedirecRout>
    ),
    // ใส่เป็น array   (nested route) ของ AppLaout
    children: [
      {
        // เหมือนจะมี / ให้เลย  เพราะ parent มีให้
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
    // ใส่ id(ลำดับได้)  dynamic path parameter
    // หลัง : จะเป็นชื่อ key ของ obj ที่ return มาจาก useParams()
    path: "/friend/:friendId",
    element: <FriendProfileWithId />,
  },
  {
    path: "*",
    // ถ้า path ไม่ตรงจะไปหน้า login
    element: <Navigate to="/login" />,
  },
]);

// setup provider
export default function Router() {
  return <RouterProvider router={router} />;
}

/*
*** Component 
<Link to = '/' />
<Navigate to = '/' />
<Outlet/>

*** Hook
useNavigate() => navigate('/')
useParams() => pathParamObj()

*** Setup
  Fn : creeeateBrowserRouter(Arr<RouterObj>)
  Component : <RouterProviger route={route}/>
*/
