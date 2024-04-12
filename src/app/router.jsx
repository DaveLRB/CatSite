import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home/Home";
import { CatsPage } from "../pages/Cats/Cats";
import { CatPage } from "../pages/Cat/Cat";
import { AboutUsPage } from "../pages/AboutUs/AboutUs";
import { SupportUsPage } from "../pages/SupportUs/SupportUs";
import { AdoptFormPage } from "../pages/AdoptForm/AdoptForm";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/cats",
    element: <CatsPage />,
  },
  {
    path: "/cats/:pageNumber",
    element: <CatsPage />,
  },
  {
    path: "/cat/:id",
    element: <CatPage />,
  },
  {
    path: "/form/:id",
    element: <AdoptFormPage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/support",
    element: <SupportUsPage />,
  },
  { path: "*", element: <Navigate to="/home" replace /> },
]);
