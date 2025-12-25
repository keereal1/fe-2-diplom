import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "./MainTemplate";
import { Main } from "../Pages/Main/Main";
import { SEAT_SELECT_ROUTE, TRAIN_SELECT_ROUTE, PASSENGER_FORM_ROUTE, PAYMENT_FORM_ROUTE, TICKET_CHECK_ROUTE, FINAL_PAGE_ROUTE } from "./routes/routes";
import { TrainSelection } from "../Pages/Selection/SelectTrain/TrainSelection";
import { SeatSelection } from "../Pages/Selection/SelectSeat/SeatSelection";
import { PassengerForm } from "../Pages/Selection/PassengerForm/PassengerForm";
import { PaymentForm } from "../Pages/Payment/PaymentForm";
import { TicketCheck } from "../Pages/TicketCheck/TicketCheck";
import { FinalPage } from "../Pages/FinalPage/FinalPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainTemplate/>,
        children: [
            {
                path: '/',
                element:<Main/>,
            },
            {
                path: TRAIN_SELECT_ROUTE,
                element: <TrainSelection/>,
            },
            {
                path: SEAT_SELECT_ROUTE,
                element: <SeatSelection/>,
            },
            {
                path: PASSENGER_FORM_ROUTE,
                element: <PassengerForm/>,
            },
            {
                path:PAYMENT_FORM_ROUTE,
                element: <PaymentForm/>,
            },
            {
                path: TICKET_CHECK_ROUTE,
                element: <TicketCheck/>
            },
            {
                path: FINAL_PAGE_ROUTE,
                element: <FinalPage/>
            }

        ]
    }
])