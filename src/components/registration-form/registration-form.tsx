import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./registration-form.module.css";
import {registration} from "../../services/actions/user-action";
import {useDispatch} from "react-redux";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const [nameValue, setNameValue] = useState('');
    const inputNameRef = useRef<HTMLInputElement>(null);

    const [emailValue, setEmailValue] = useState('');
    const inputEmailRef = useRef<HTMLInputElement>(null);

    const [passwordValue, setPasswordValue] = useState('');
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const onIconClick = () => {
        setIsHiddenPassword(!isHiddenPassword);
    }

    const onSubmitHandler = (evt:SyntheticEvent) => {
        evt.preventDefault();
        // @ts-ignore
        dispatch(registration({name: nameValue, password: passwordValue, email: emailValue}))

    }
    const onNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.target.value);
    }
    const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(event.target.value);
    }
    const onPassChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <div className={`text text_type_main-default ${styles.form_title}`} >Регистрация</div>
                <Input
                    placeholder={"Имя"}
                    type={'text'}
                    onChange={onNameChangeHandler}
                    value={nameValue}
                    name={'name'}
                    error={false}
                    ref={inputNameRef}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Input
                    placeholder={"E-mail"}
                    type={'email'}
                    onChange={onEmailChangeHandler}
                    value={emailValue}
                    name={'email'}
                    error={false}
                    ref={inputEmailRef}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Input
                    placeholder={"Пароль"}
                    type={isHiddenPassword ? 'password' : 'text'}
                    onChange={onPassChangeHandler}
                    icon={!isHiddenPassword ? 'HideIcon' :'ShowIcon'}
                    value={passwordValue}
                    name={'name'}
                    error={false}
                    ref={inputPasswordRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Button extraClass={styles.register} htmlType="submit" type="primary" size="medium">
                    Зарегистрироваться
                </Button>
            </form>
            <div>
                <div className={`text text_type_main-small ${styles.underform_text}`}>Уже зарегистрированы? Войти</div>
            </div>
        </div>
    );
};

export default RegistrationForm;
