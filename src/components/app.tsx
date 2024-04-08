import React, {useEffect} from 'react';

import {Location, NavigateFunction, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Home, Profile, Login, Register, NotFound, Ingredient, ForgotPassword, ResetPassword} from "../pages/pages";
import Layout from "./layout/layout";
import Modal from "./modals/modal/modal";
import {ForAuthUser, ForUnAuthUser} from "./protected-route/protected-route";
import {useDispatch} from "react-redux";
import {checkUserAuth} from "../services/actions/user-action";
import {Dispatch} from "redux";


function App() {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const background = location.state?.background;
  const dispatch: Dispatch = useDispatch();


  useEffect((): void => {
      // @ts-ignore
      dispatch(checkUserAuth())
  },[])

  const toCloseModal: () => void = () => {
      navigate(-1);
  }
  return (
      <Layout>
          <Routes location={background || location}>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/profile'} element={<ForAuthUser component={<Profile/>}/>}/>
              <Route path={'/login'} element={<ForUnAuthUser component={<Login/>}/>}/>
              <Route path={'/register'} element={<ForUnAuthUser component={<Register/>}/>}/>
              <Route path={'/forgot-password'} element={<ForUnAuthUser component={<ForgotPassword/>}/>}/>
              <Route path={'/reset-password'} element={<ForUnAuthUser component={<ResetPassword/>} />}/>
              <Route path={'*'} element={<NotFound/>}/>
              <Route path={'/ingredient/:id'} element={<Ingredient/>}/>
          </Routes>
          { background &&
              <Routes>
                  <Route path={'/ingredient/:id'} element={
                      <Modal toCloseModal={toCloseModal}>
                          <Ingredient/>
                      </Modal>
                  }/>
              </Routes>
          }
      </Layout>

  );
}

export default App;
