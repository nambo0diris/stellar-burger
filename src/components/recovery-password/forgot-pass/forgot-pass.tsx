import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-pass.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {forgotPassword} from "../../../services/actions/user-action";
const ForgotPass = () => {
    // @ts-ignore
    const {resetPasswordSuccess} = useSelector(state => state.userReducer)
    const navigate = useNavigate();
    const [emailValue, setEmailValue] = React.useState('')
    const emailInputRef = React.useRef<HTMLInputElement>(null)
    const dispatch = useDispatch();
    const onSubmitHandler = (evt:SyntheticEvent) => {
        evt.preventDefault();
        // @ts-ignore
        dispatch(forgotPassword(emailValue));
    }

    useEffect(() => {
        if (resetPasswordSuccess){
            navigate("/reset-password", {replace: true})
        }
    },[resetPasswordSuccess])
    return (
        <div style={{display:"flex", flexDirection:"column", gap:"24px", margin:"auto", marginTop:"120px"}}>
            <div className={"text text_type_main-default"} style={{textAlign:"center"}}>Восстановление пароля</div>

            <form style={{display:"flex", flexDirection:"column", gap:"24px"}} onSubmit={onSubmitHandler}>
                <Input
                    placeholder={"email"}
                    type={'text'}
                    onChange={e => setEmailValue(e.target.value)}
                    value={emailValue}
                    name={'email'}
                    error={false}
                    ref={emailInputRef}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Button extraClass={styles.register} htmlType="submit" type="primary" size="medium">
                    Восстановить
                </Button>
            </form>

            <div>
                <div className={"text text_type_main-small"} style={{textAlign:"center"}}>Вспомнили пароль? <NavLink to={'/login'}>Войти</NavLink></div>
            </div>
        </div>
    );
};

export default ForgotPass;
