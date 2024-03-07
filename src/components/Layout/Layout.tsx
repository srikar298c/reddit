import React from "react";
import Navbar from "../Navbar/Navbar";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase/clientApp";
//import useAuth from "../../hooks/useAuth";
//import AuthModal from "../Modal/Auth";

const Layout:  React.FC<{ children: React.ReactNode }> = ({ children })=> {


  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;