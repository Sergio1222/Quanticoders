import React from "react";
import s from './Modal.module.css'


type ModalPropsType = {
    bgOnClick: () => void
    CSSStyles?: React.CSSProperties
    backgroundDiv: boolean
}
export const Modal: React.FC<ModalPropsType> = React.memo((props) => {

    const modalStyles = {
        ...props.CSSStyles
    } as const

    return (
        <>
            {props.backgroundDiv && <div onClick={props.bgOnClick} className={s.backgroundDiv}/>}
            <div className={props.backgroundDiv ? s.wrapper : ""}>
                <div className={s.modalWindow} style={modalStyles}>
                    <div>{props.children}</div>
                </div>
            </div>
        </>
    )
})