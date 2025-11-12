import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Pages/Provider/AuthProvider';

const privateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    
    if (loading) {
    return (
        <div className="flex justify-center items-center h-screen bg-[#d2e7d0] py-20">
            <p className="text-4xl font-semibold text-[#1d5008]">
                L <span className="loading loading-spinner loading-xl"></span> ading...</p>
        </div>
    );
}

if (!user) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
    return children;
};

export default privateRoutes;