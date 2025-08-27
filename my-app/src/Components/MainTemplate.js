import { Outlet } from "react-router-dom";
import { MainMenu } from "./MainMenu";
import { Footer } from "./Footer";

export const MainTemplate = () => {
    return (
        <>
            <MainMenu/>
                <Outlet/>
            <Footer/>
        </>
    )
}