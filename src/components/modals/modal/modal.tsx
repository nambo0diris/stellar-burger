import React, {FC, ReactNode, SyntheticEvent, useEffect} from 'react';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
interface ModalProps {
    children: ReactNode
    title?: string
    toCloseModal: () => void
}
const Modal:FC<ModalProps> = (props) => {
    const onESCCloseHandler = (event: KeyboardEvent) => {
        if(event.key === "Escape"){
            props.toCloseModal();
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', onESCCloseHandler);
        return () => {
            document.removeEventListener('keydown', onESCCloseHandler);
        }
    },[]);

    return (
        <ModalOverlay>
            <div className={`${styles.modal_wrapper} p-10`}>
                <div className={`${styles.title_wrapper}`}>
                    {props.title && <h1 className={`text text_type_main-large`}>{props.title}</h1>}
                    <button className={`${styles.close_button}`} onClick={props.toCloseModal}>
                        <CloseIcon type="primary" />
                    </button>
                </div>
                <div className={styles.modal_content}>
                    {props.children}
                </div>
            </div>
        </ModalOverlay>
    );
};

export default Modal;