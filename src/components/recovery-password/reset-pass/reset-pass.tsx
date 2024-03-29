import React, {SyntheticEvent, useState} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-pass.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {savePassword} from "../../../services/actions/user-action";

const ResetPass = () => {
    const dispatch = useDispatch();
    const [passwordValue, setPasswordValue] = React.useState('')
    const [isHiddenPassword, setHiddenPassword] = useState(true)
    const [codeValue, setCodeValue] = React.useState('')
    const passwordRef = React.useRef<HTMLInputElement>(null)
    const codedRef = React.useRef<HTMLInputElement>(null)
    const onIconClick = () => {
        setHiddenPassword(!isHiddenPassword)
    }
    const onSubmitHandler = (e:SyntheticEvent) => {
        e.preventDefault()
        // @ts-ignore
        dispatch(savePassword({password:passwordValue, token:codeValue}))
    }
    return (
        <div style={{display:"flex", flexDirection:"column", gap:"24px", margin:"auto", marginTop:"120px"}}>
            <form onSubmit={onSubmitHandler} style={{display:"flex", flexDirection:"column", gap:"24px"}}>
                <div className={"text text_type_main-default"} style={{textAlign:"center"}}>Восстановление пароля</div>
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
                <div className={"text text_type_main-small"} style={{textAlign:"center"}}>Вспомнили пароль? <NavLink to={'/login'}>Войти</NavLink></div>
            </div>
        </div>
    );
};

export default ResetPass;
