import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-pass.module.css"
import {NavigateFunction, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {forgotPassword} from "../../../services/actions/user-action";
import {Dispatch} from "redux";
const ForgotPass = () => {
    // @ts-ignore
    const {resetPasswordSuccess} = useSelector(state => state.userReducer)
    const navigate: NavigateFunction = useNavigate();
    const [emailValue, setEmailValue] = React.useState<string>('')
    const emailInputRef = React.useRef<HTMLInputElement>(null)
    const dispatch: Dispatch = useDispatch();
    const onSubmitHandler:(evt:SyntheticEvent) => void = (evt) => {
        evt.preventDefault();
        // @ts-ignore
        dispatch(forgotPassword(emailValue));
    }

    useEffect(() => {
        if (resetPasswordSuccess){
            navigate("/reset-password", { state: { resetRequested: true } })
        }
    },[resetPasswordSuccess])
    return (

        <div className={styles.wrapper}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <div className={`text text_type_main-default ${styles.form_title}`} >Восстановление пароля</div>
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
                <div className={`text text_type_main-small ${styles.underform_text}`}>Вспомнили пароль? <NavLink to={'/login'}>Войти</NavLink></div>
            </div>
        </div>
    );
};

export default ForgotPass;
