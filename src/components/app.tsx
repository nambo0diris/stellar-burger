import React, {useEffect} from 'react';

import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Home, Profile, Login, Register, NotFound, Ingredient, ForgotPassword, ResetPassword} from "../pages/pages";
import Layout from "./layout/layout";
import Modal from "./modals/modal/modal";
import {ForAuthUser, ForUnAuthUser} from "./protected-route/protected-route";
import {useDispatch} from "react-redux";
import {checkUserAuth} from "../services/actions/user-action";


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state?.background;
  const dispatch = useDispatch();

  useEffect(() => {
      // @ts-ignore
      dispatch(checkUserAuth())
  },[])

  const toCloseModal = () => {
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
