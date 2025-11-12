import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Pages/Provider/AuthProvider';

const privateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    
    if (loading) {
    return (
        <div className="flex justify-center items-center h-screen bg-[#D5DEEF] py-20">
            <p className="text-xl font-semibold text-[#31487A]">
                <span className="loading loading-spinner loading-xl"></span></p>
        </div>
    );
}

if (!user) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
    return children;
};

export default privateRoutes;