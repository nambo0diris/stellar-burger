import React, {useEffect} from 'react';
import ProfileNavigation from "../components/profile-navigation/profile-navigation";
import ProfileData from "../components/profile-data/profile-data";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../services/actions/user-action";


const Profile = () => {
    // @ts-ignore
    const {user} = useSelector(state => state.userReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getUser())
    },[])

    if (!user) {
        return null
    }
    return (
        <>
            <ProfileNavigation />
            <ProfileData />
        </>
    );
};

export default Profile;
