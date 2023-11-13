import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoutes = () => {
    const { auth } = useSelector(state => state.auth)
    console.log(auth)
    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    )
}