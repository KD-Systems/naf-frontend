import React from "react";
import { useSelector } from "react-redux";
const PermissionAbility = ({ children, permission }) => {
  const permissions = useSelector((state)=>state?.auth?.user?.permissions)
  const role = useSelector((state)=>state?.auth?.user?.role)
  if (role ==='Admin') {
    return  children ;
  } else {
    return  permissions?.includes(permission)? children : null;
  }
};

export default PermissionAbility;
