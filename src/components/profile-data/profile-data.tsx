import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";
import styles from "./profile-data.module.css";

const ProfileData = () => {

    // @ts-ignore
    const {user} = useSelector(state => state.userReducer)

    const [nameValue, setNameValue] = React.useState('')
    const inputNameRef = React.useRef<HTMLInputElement>(null)
    const [nameReadOnly, setNameReadOnly] = useState(true)

    const [passwordValue, setPasswordValue] = React.useState('')
    const inputPasswordRef = React.useRef<HTMLInputElement>(null)
    const [passwordReadOnly, setPasswordReadOnly] = useState(true)
    const [isHiddenPassword, setHiddenPassword] = useState(true)

    const [emailValue, setEmailValue] = React.useState('')
    const inputEmailRef = React.useRef<HTMLInputElement>(null)
    const [emailReadOnly, setEmailReadOnly] = useState(true)


    const onInputNameIconClick = () => {
        if (inputNameRef.current !== null){
            setNameReadOnly(!nameReadOnly)
            inputNameRef.current.focus()
        }

    };
    const onInputEmailIconClick = () => {
        if (inputEmailRef.current !== null){
            setEmailReadOnly(!emailReadOnly)
            inputEmailRef.current.focus()
        }

    }
    const onInputPasswordIconClick = () => {
        if (inputPasswordRef.current !== null){
            inputPasswordRef.current.focus()
            setHiddenPassword(!isHiddenPassword)
            setPasswordReadOnly(!passwordReadOnly)
        }
    }

    const onSaveHandler = (e:SyntheticEvent) => {
        e.preventDefault()

    }

    const onCanceledHandler = () => {
        setNameValue("")
        setEmailValue("")
        setPasswordValue("")
        setNameReadOnly(true)
        setPasswordReadOnly(true)
        setEmailReadOnly(true)
    }

    return (
        <form action="" style={{display:"flex", flexDirection:"column", gap:"24px"}}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setNameValue(e.target.value)}
                icon={'EditIcon'}
                value={nameValue ? nameValue : user.name}
                name={'name'}
                error={false}
                ref={inputNameRef}
                onIconClick={onInputNameIconClick}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="ml-1"
                readOnly={nameReadOnly}
            />
            <Input
                type={'text'}
                placeholder={'Логин'}
                onChange={e => setEmailValue(e.target.value)}
                icon={'EditIcon'}
                value={emailValue ? emailValue :user.email}
                name={'email'}
                error={false}
                ref={inputEmailRef}
                onIconClick={onInputEmailIconClick}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="ml-1"
                readOnly={emailReadOnly}

            />
            <Input
                type={isHiddenPassword ? 'password' : 'text'}
                placeholder={'Пароль'}
                onChange={e => setPasswordValue(e.target.value)}
                icon={'EditIcon'}
                value={passwordValue}
                name={'password'}
                error={false}
                ref={inputPasswordRef}
                onIconClick={onInputPasswordIconClick}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="ml-1"
                readOnly={passwordReadOnly}
            />
            <div className={styles.button_wrapper}>
                <Button extraClass={styles.cancel} onClick={onCanceledHandler} htmlType="button" type="secondary" size="medium">
                    Отмена
                </Button>
                <Button extraClass={styles.register} htmlType="submit" type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
        </form>

    )
};

export default ProfileData;