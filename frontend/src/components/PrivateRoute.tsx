import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
    children: ReactNode;
};

export default function PrivateRoute ({ children }: PrivateRouteProps) {
    const { currentUser } = useAuth()
    const location = useLocation()

    console.log('Current user (PrivateRoute): ', currentUser)

    if (!currentUser) {
        return <Navigate to='/signin' state={{from: location}} replace />
    }

    return <>{children}</>
}