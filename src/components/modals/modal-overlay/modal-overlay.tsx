import React, {FC} from 'react';
import { createPortal } from 'react-dom';
import {ModalOverlayProps} from "../../../interfaces/interfaces";
import styles from "./modal-overlay.module.css"
const modalRoot: HTMLElement | null = document.getElementById("modal");

const ModalOverlay:FC<ModalOverlayProps> = (props) => {
    return (
        <>
            {
                modalRoot &&
                createPortal(
                    <div className={styles.modal_overlay}>
                        {props.children}
                    </div>,
                    modalRoot
                )
            }
        </>
    );
};

export default ModalOverlay;