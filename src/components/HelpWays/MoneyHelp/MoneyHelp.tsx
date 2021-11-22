import React, {useState} from "react";
import style from "./MoneyHelp.module.css";
import {SuperInput} from "../../SuperInput/SuperInput";

export const MoneyHelp = () => {
    let [paymentTypeId, setPaymentTypeId] = useState(1)
    const cardTypes = [
        {id: 1, title: "VISA"},
        {id: 2, title: "Privat24"},
        {id: 3, title: "Ukrainian terminal"},
        {id: 4, title: "WebMoney"},
        {id: 5, title: "PayPal"},
    ]

    return (
        <div >
            <div className={style.paymentAreaTitles}>
                <span style={{flex: 2}}>Payment ways</span>
                <span style={{flex: 1}}>Enter valid data</span>
            </div>
            <div className={style.moneyHelp}>
                <div className={style.paymentWays}>
                    {cardTypes.map(t => <PaymentWay
                        isActive={paymentTypeId === t.id}
                        setPaymentTypeId={setPaymentTypeId}
                        id={t.id}
                        key={t.id}
                        title={t.title}
                    />)}
                </div>
                <div className={style.cardInfo}>
                    <div className={style.card}>
                        <span>Cards number</span>
                        <div className={style.cardHighInputs}>
                            <SuperInput title={""} width={"50px"} />
                            <SuperInput title={""} width={"50px"} />
                            <SuperInput title={""} width={"50px"} />
                            <SuperInput title={""} width={"50px"} />
                        </div>
                        <div className={style.cardLowInputs}>
                            <SuperInput title={"Data"} width={"100px"} color={"white"}/>
                            <SuperInput title={"CVC/CVV"} width={"100px"} color={"white"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type PaymentWayPropsType = {
    title: string
    id: number
    isActive: boolean
    setPaymentTypeId: (id: number) => void
}
const PaymentWay = (props: PaymentWayPropsType) => {
    return (
        <div className={`${style.paymentWay} ${props.isActive && style.activePaymentWay}`} onClick={() => props.setPaymentTypeId(props.id)}>
            <h3>{props.title}</h3>
        </div>
    )
}