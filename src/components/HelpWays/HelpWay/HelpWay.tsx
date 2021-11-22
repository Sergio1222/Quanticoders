import React from "react";
import style from "./HelpWay.module.css"

type HelpWayPropsType = {
    title: string
    setCurrentPaymentWayId: (id: number) => void
    id: number
    isActive: boolean
}
export const HelpWay = React.memo((props: HelpWayPropsType) => {
    return (
            <div className={style.helpWay}>
                <div className={`${style.icon} ${props.isActive && style.activeHelpWay}`}
                     onClick={() => props.setCurrentPaymentWayId(props.id)}/>
                <div className={`${style.title} ${props.isActive && style.activeTitle}`}><span>{props.title}</span></div>
                {props.isActive && <div className={style.arrow}/>}
            </div>
    )
})