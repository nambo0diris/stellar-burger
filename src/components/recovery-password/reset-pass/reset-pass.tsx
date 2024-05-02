import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-pass.module.css";
import {Location, NavigateFunction, NavLink, useLocation, useNavigate} from "react-router-dom";
import {savePassword} from "../../../services/actions/user-action";
import {useDispatch} from "../../../services/types/store-and-thunk-types";

const ResetPass = () => {
    const dispatch = useDispatch();
    const [passwordValue, setPasswordValue] = React.useState<string>('')
    const [isHiddenPassword, setHiddenPassword] = useState<boolean>(true)
    const [codeValue, setCodeValue] = React.useState<string>('')
    const passwordRef = React.useRef<HTMLInputElement>(null)
    const codedRef = React.useRef<HTMLInputElement>(null)

    const location: Location = useLocation();
    const resetRequested: true | undefined = location.state?.resetRequested;
    const navigate:NavigateFunction = useNavigate();

    useEffect(()=>{
        if (!resetRequested) {
            navigate('/forgot-password');
        }
    },[])

    const onIconClick: () => void = () => {
        setHiddenPassword(!isHiddenPassword)
    }
    const onSubmitHandler: (e:SyntheticEvent) => void = (e) => {
        e.preventDefault()
        // @ts-ignore
        dispatch(savePassword({password:passwordValue, code:codeValue}))
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <div className={`text text_type_main-default ${styles.form_title}`} >Восстановление пароля</div>
                <Input
                    placeholder={"Введите новый пароль"}
                    type={isHiddenPassword ? 'password' : 'text'}
                    onChange={e => setPasswordValue(e.target.value)}
                    value={passwordValue}
                    icon={isHiddenPassword ? 'ShowIcon' : 'HideIcon'}
                    name={'password'}
                    error={false}
                    ref={passwordRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Input
                    placeholder={"Введите код из письма"}
                    type={'text'}
                    onChange={e => setCodeValue(e.target.value)}
                    value={codeValue}
                    name={'code'}
                    error={false}
                    ref={codedRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Button extraClass={styles.register} htmlType="submit" type="primary" size="medium">
                    Сохранить
                </Button>
            </form>
            <div>
                <div className={`text text_type_main-small ${styles.underform_text}`}>Вспомнили пароль? <NavLink to={'/login'}>Войти</NavLink></div>
            </div>
        </div>
    );
};

export default ResetPass;
