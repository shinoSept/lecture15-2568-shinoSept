import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import MarathonRegisterPage1 from "./pages/MarathonRegisterPage1";
import MarathonRegisterPage2 from "./pages/MarathonRegisterPage2";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/
      { index: true, element: <MarathonRegisterPage1 /> },
      // localhost:xxxx/MarathonRegisterPage2
      { path: "MarathonRegisterPage2", element: <MarathonRegisterPage2 /> },
    ],
  },
]);
