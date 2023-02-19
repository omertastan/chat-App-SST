import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const userData = localStorage.getItem("userToken")

    if (!userData) {
        return <Navigate replace to="/" />;
    }

    return children ? children : <Outlet />;
};