import React, {FC, ReactNode, useEffect} from 'react';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
interface ModalProps {
    children: ReactNode
    title?: string
    toCloseModal: () => void
}
const Modal:FC<ModalProps> = ({children, title, toCloseModal}) => {
    const onESCCloseHandler:(event: KeyboardEvent) => void = (event) => {
        if (event.key === "Escape") {
            toCloseModal();
        }
    }
    const onOverlayClick:(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>void = (event) => {
        const targetElement = event.target as HTMLDivElement;
        const className = targetElement.className;
        if (typeof className !== "object"){
            if (className.includes('modal_overlay')){
                toCloseModal();
            }
        }
    }


    useEffect(() => {
        document.addEventListener('keydown', onESCCloseHandler);
        return () => {
            document.removeEventListener('keydown', onESCCloseHandler);
        }
    },[]);

    return (
        <ModalOverlay onOverlayClick={onOverlayClick}>
            <div className={`${styles.modal_wrapper} p-10`}>
                <div className={`${styles.title_wrapper}`}>
                    {title && <h1 className={`text text_type_main-large`}>{title}</h1>}
                    <button className={`${styles.close_button}`} onClick={toCloseModal}>
                        <CloseIcon type="primary" />
                    </button>
                </div>
                <div className={styles.modal_content}>
                    {children}
                </div>
            </div>
        </ModalOverlay>
    );
};

export default Modal;
