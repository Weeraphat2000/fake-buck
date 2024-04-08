import React from "react";
import { Navigate } from "react-router-dom";

function RedirecRout({ children }) {
  let user = "john";
  // ไปที่ path /
  if (!user) return Navigate("/");
  //   ถ้าไม่มี ก็จะไป children   อยู่่หน้า router
  return children;
}

export default RedirecRout;
