import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {

    const {user, loding} = useContext(AuthContext);
    const location = useLocation();

    if(loding) {
        return <div className="mx-auto mt-16 font-bold text-2xl">Loading....</div>
    }

    if(user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default Private;