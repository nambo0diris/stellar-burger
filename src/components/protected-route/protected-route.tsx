import React, {FC, ReactElement} from 'react';
import {useSelector} from "react-redux";
import {Location, Navigate, useLocation} from "react-router-dom";

interface ProtectedRouteProps {
    unAuth?: boolean,
    component: ReactElement | ReactElement[]
}
interface ForUnAuthUserProps {
    component: ReactElement | ReactElement[]
}

const ProtectedRoute:FC<ProtectedRouteProps> = ({unAuth= false, component}): any => {
    const location: Location = useLocation();
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

export const ForAuthUser: FC<ProtectedRouteProps> = ProtectedRoute;

export const ForUnAuthUser: FC<ForUnAuthUserProps> = ({component}) => {
    return <ProtectedRoute unAuth={true} component={component}/>
}
