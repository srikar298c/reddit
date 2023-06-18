import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const Layout:React.FC   =({children: children}) =>
    (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    )
export default Layout;