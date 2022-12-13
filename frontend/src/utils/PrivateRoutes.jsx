import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    let user = true;

    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes