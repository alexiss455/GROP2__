import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Modules } from "../pages/modules";
import { Home } from "../pages/home";

const Mainrouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/modules" element={<Modules />} />
            <Route path="/" element={<Home />} />
        </>
    )
);

export default Mainrouter;
