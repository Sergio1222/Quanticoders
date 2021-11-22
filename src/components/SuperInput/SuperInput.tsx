import React from "react";
import style from "./SuperInput.module.css"
import addLogo from "../../assets/addLogo.png"


type SuperInputPropsType = {
    title: string
    width: string
    color?: string
    isAddInput?: boolean
}
export const SuperInput = (props: SuperInputPropsType) => {
    const ref = React.createRef<HTMLInputElement>()

    return (
        <div className={style.inputAndTitle}>
            <span style={{color: props.color}}>{props.title}</span>
            <input type="text" className={style.input} style={{width: props.width}} />
            {props.isAddInput && <div>
                <img className={style.addLogo} src={addLogo} onClick={() => ref.current && ref.current.click()}/>
                <input style={{display: "none"}} ref={ref} type="file"/>
            </div>}
        </div>
    )
}