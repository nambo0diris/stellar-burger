import React, {useState} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./sign-in-form.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../services/actions/user-action";
const SignInForm = () => {
    const dispatch = useDispatch();

    const [emailValue, setEmailValue] = useState('');
    const emailInputRef = React.useRef<HTMLInputElement>(null);
    const [passwordValue, setPasswordValue] = useState('');
    const passwordInputRef = React.useRef<HTMLInputElement>(null);

    const [isHiddenPassword, setHiddenPassword] = useState(true);

    const onIconClick = () => {
        setHiddenPassword(!isHiddenPassword);
    }

    const onSubmitHandler = (e:any) => {
        e.preventDefault();
        // @ts-ignore
        dispatch(login({email:emailValue, password: passwordValue}))
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <div className={`text text_type_main-default ${styles.form_title}`} >Вход</div>
                <Input
                    placeholder={"email"}
                    type={'text'}
                    onChange={e => setEmailValue(e.target.value)}
                    value={emailValue}
                    name={'email'}
                    error={false}
                    ref={emailInputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Input
                    type={'text'}
                    placeholder={"password"}
                    onChange={e => setPasswordValue(e.target.value)}
                    icon={!isHiddenPassword ? 'HideIcon' :'ShowIcon'}
                    value={passwordValue}
                    name={'password'}
                    error={false}
                    ref={passwordInputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Button extraClass={styles.enter} htmlType="submit" type="primary" size="medium">
                    Войти
                </Button>
            </form>
            <div>
                <div className={`text text_type_main-small ${styles.underform_text}`} >Вы — новый пользователь? <NavLink to={'/register'}>Зарегистрироваться</NavLink>  </div>
                <div className={`text text_type_main-small ${styles.underform_text}`} >Забыли пароль? <NavLink to={"/forgot-password"}>Восстановить пароль</NavLink></div>
            </div>
        </div>
    )
};

export default SignInForm;
