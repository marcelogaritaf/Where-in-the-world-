import { createBrowserRouter } from "react-router-dom";
import LayOut from "./pages/LayOut";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "countriesinfo/:name", element: <CountryDetails /> },
    ],
  },
]);
export default routes;
