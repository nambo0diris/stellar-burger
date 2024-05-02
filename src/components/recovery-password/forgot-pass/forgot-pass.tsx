import React, {SyntheticEvent, useEffect} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-pass.module.css"
import {NavigateFunction, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "../../../services/types/store-and-thunk-types";
import {forgotPassword} from "../../../services/actions/user-action";
const ForgotPass = () => {

    const {resetPasswordSuccess} = useSelector(state => state.userReducer)
    const navigate: NavigateFunction = useNavigate();
    const [emailValue, setEmailValue] = React.useState<string>('')
    const emailInputRef = React.useRef<HTMLInputElement>(null)
    const dispatch = useDispatch();
    const onSubmitHandler:(evt:SyntheticEvent) => void = (evt) => {
        evt.preventDefault();
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
