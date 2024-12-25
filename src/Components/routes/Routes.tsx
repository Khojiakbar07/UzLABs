import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

// PAGES
import About from "../About";
import Home from "../home/Home"
import NotFound from "../not-found/NotFound";


const root = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound />,
        element: <App />,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "profile",
                element: <About />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default root;
