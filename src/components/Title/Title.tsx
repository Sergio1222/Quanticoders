import React from "react";
import style from "./Title.module.css";

type TitlePropsType = {
    text: string
}
export const Title: React.FC<TitlePropsType> = (props) => {
    return (
        <div>
            <h2 className={style.title}>{props.text}</h2>
            {props.children}
        </div>
    )
}