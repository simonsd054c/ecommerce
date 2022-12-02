import { Navigate, Outlet } from "react-router-dom"

import { useGlobalContext } from "./utils/globalStateContext"

function ProtectedRoute() {
    const { store } = useGlobalContext()

    if (store.token) {
        return <Outlet />
    } else {
        return <Navigate to="/login" replace />
    }
}

export default ProtectedRoute
