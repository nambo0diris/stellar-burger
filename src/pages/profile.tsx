import React, {FC, useEffect} from 'react';
import ProfileNavigation from "../components/profile-navigation/profile-navigation";
import ProfileData from "../components/profile-data/profile-data";
import {useDispatch, useSelector} from "../services/types/store-and-thunk-types";
import {getUser} from "../services/actions/user-action";



const Profile: FC = () => {
    const {user} = useSelector(state => state.userReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        getUser()
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
