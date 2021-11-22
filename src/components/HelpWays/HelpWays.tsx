import React from "react";
import {HelpWay} from "./HelpWay/HelpWay";
import style from "./HelpWays.module.css"
import {MoneyHelp} from "./MoneyHelp/MoneyHelp";

type HelpWaysPropsType = {
    helpWays: Array<{ id: number, title: string }>
    currentPaymentWayId: number
    setCurrentPaymentWayId: (id: number) => void
}
export const HelpWays = React.memo((props: HelpWaysPropsType) => {
    let helpWay: React.ReactNode;
    switch (props.currentPaymentWayId) {
        case 1:  helpWay = <div className={style.anotherWay}>Work and help</div>
            break
        case 2:   helpWay = <MoneyHelp/>
            break
        case 3:   helpWay = <div className={style.anotherWay}>Give some clothes</div>
            break
        case 4:   helpWay = <div className={style.anotherWay}>Be volunteer</div>
            break
        default: return <div></div>
    }

    return (
        <>
            <div className={style.helpWays}>
                {props.helpWays.map(w => <HelpWay
                    setCurrentPaymentWayId={props.setCurrentPaymentWayId}
                    isActive={props.currentPaymentWayId === w.id}
                    id={w.id}
                    key={w.id}
                    title={w.title}
                />)}
            </div>
            <div className={style.paymentWrapper}>
                {helpWay}
            </div>
        </>
    )
})

