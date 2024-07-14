import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
    children: ReactNode;
};

export default function PrivateRoute ({ children }: PrivateRouteProps) {
    const auth = useAuth()
    const location = useLocation()

    if (!auth || !auth.currentUser) {
        return <Navigate to='/signin' state={{from: location}} replace />
    }

    return <>{children}</>
}