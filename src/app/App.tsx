import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import MainLayout from "./layouts/MainLayout";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Error from "@/pages/Error/Error";
import { useAuthStore } from "@/entities/auth/model/authStore";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <div>Dashboard Page</div> },
      { path: "ranking", element: <div>Ranking Page</div> },
    ],
  },
  {
    children: [
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
