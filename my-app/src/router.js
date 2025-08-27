import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "./Components/MainTemplate";
import { Main } from "./Pages/Main/Main";
import { TRAIN_SELECT_ROUTE } from "./routes/routes";
import { TrainSelection } from "./Pages/Selection/TrainSelection";



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
            }

        ]
    }
])