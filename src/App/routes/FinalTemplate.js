import { Outlet } from "react-router-dom";
import { FinalHeader } from "../../Components/FinalHeader/FinalHeader";
import { Footer } from "../../Components/Footer";

export function FinalTemplate () {
    return (
        <>
            <FinalHeader/>
                <Outlet/>
            <Footer/>
        </>
    )
}