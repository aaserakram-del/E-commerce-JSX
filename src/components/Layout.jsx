import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import End from "./End";


const Layout = ({cart , setCart}) => {

    return (

        <>
            <Header cart={cart} />

            <Outlet />

            <Footer />

            <End />
        </>

    )

}


export default Layout;