import React, {FC, ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

interface ProtectedRouteProps {
    unAuth?: boolean,
    component: ReactElement | ReactElement[]
}
interface ForUnAuthUserProps {
    component: ReactElement | ReactElement[]
}

const ProtectedRoute:FC<ProtectedRouteProps> = ({unAuth= false, component}): any => {
    const location = useLocation();
    // @ts-ignore
    const { user, isAuthChecked } = useSelector(state => state.userReducer);


    if (!isAuthChecked) {
        return null;
    }
    if (unAuth && user) {

        const {from} = location.state || {from: {pathname: "/"}};
        return <Navigate to={from}/>
    }


    if (!unAuth && !user) {
        return <Navigate to={'/login'} state={{from: location}}/>
    }

    return component;
};

export const ForAuthUser = ProtectedRoute;

export const ForUnAuthUser: FC<ForUnAuthUserProps> = ({component}) => {
    return <ProtectedRoute unAuth={true} component={component}/>
}
