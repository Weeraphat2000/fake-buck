import React from "react";
import { useParams } from "react-router-dom";

function FriendProfileWithId() {
  const pathParameObj = useParams();
  console.log("path parames", pathParameObj);
  return <div>FriendProfileWithId</div>;
}

export default FriendProfileWithId;
