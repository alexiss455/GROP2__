import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Moduels } from "../pages/moduels";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/modules" element={<Moduels />}></Route>
    )
);

