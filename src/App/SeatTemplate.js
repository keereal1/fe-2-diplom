import { Outlet } from "react-router-dom";
import { SeatHeader } from "../Components/SeatHeader/SeatHeader";
import { Footer } from "../Components/Footer";

export function SeatTemplate () {
    return (
        <>
            <SeatHeader/>
                <Outlet/>
            <Footer/>
        </>
    )
}