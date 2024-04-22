import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import styles from "./profile-data.module.css";
import {updateUser} from "../../services/actions/user-action";
import {Dispatch} from "redux";

interface IUserData {
    name:string
    email:string
    password?:string
}
const ProfileData = () => {
    const dispatch: Dispatch = useDispatch()
    // @ts-ignore
    const {user} = useSelector(state => state.userReducer)

    const [nameValue, setNameValue] = React.useState<string>('')
    const inputNameRef = React.useRef<HTMLInputElement>(null)
    const [nameReadOnly, setNameReadOnly] = useState<boolean>(true)

    const [passwordValue, setPasswordValue] = React.useState<string>('')
    const inputPasswordRef = React.useRef<HTMLInputElement>(null)
    const [passwordReadOnly, setPasswordReadOnly] = useState<boolean>(true)
    const [isHiddenPassword, setHiddenPassword] = useState<boolean>(true)

    const [emailValue, setEmailValue] = React.useState<string>('')
    const inputEmailRef = React.useRef<HTMLInputElement>(null)
    const [emailReadOnly, setEmailReadOnly] = useState<boolean>(true)


    const onInputNameIconClick: () => void = () => {
        if (inputNameRef.current !== null){
            setNameReadOnly(!nameReadOnly)
            inputNameRef.current.focus()
        }

    };
    const onInputEmailIconClick: () => void = () => {
        if (inputEmailRef.current !== null){
            setEmailReadOnly(!emailReadOnly)
            inputEmailRef.current.focus()
        }

    }
    const onInputPasswordIconClick: () => void = () => {
        if (inputPasswordRef.current !== null){
            inputPasswordRef.current.focus()
            setHiddenPassword(!isHiddenPassword)
            setPasswordReadOnly(!passwordReadOnly)
        }
    }

    const onSaveHandler:(e:SyntheticEvent) => void = (e) => {
        e.preventDefault()
        const userData: IUserData = {
            name: nameValue ? nameValue : user.name,
            email: emailValue ? emailValue : user.email,
        }
        if (passwordValue) {
            userData.password = passwordValue
        }
        // @ts-ignore
        dispatch(updateUser(userData))
    }

    const onCanceledHandler:() => void = () => {
        setNameValue("")
        setEmailValue("")
        setPasswordValue("")
        setNameReadOnly(true)
        setPasswordReadOnly(true)
        setEmailReadOnly(true)
    }

    return (
        <form className={styles.form} onSubmit={onSaveHandler}>
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
