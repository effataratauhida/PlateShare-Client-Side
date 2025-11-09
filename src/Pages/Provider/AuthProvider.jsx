import React from 'react';

const AuthProvider = ({children}) => {
    return <AuthContext.Provider>
        {childern}
    </AuthContext.Provider>
};

export default AuthProvider;