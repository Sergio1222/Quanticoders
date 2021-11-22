import {SuperInput} from "../SuperInput/SuperInput";
import React from "react";
import style from "./SuperForm.module.css"

export const SuperForm = () => {
    return (
        <form className={style.superForm}>
            <div className={style.formWrapper}>
                <div>
                    <div className={style.formColumn}>
                        <div className={style.twoInputs}>
                            <SuperInput title={"Name"} width={"10.2vw"}/>
                            <SuperInput title={"Surname"} width={"10.2vw"}/>
                        </div>
                        <SuperInput title={"Name of company, organization"} isAddInput width={"21.8vw"}/>
                        <SuperInput title={"E-mail address"} width={"21.8vw"}/>
                        <SuperInput title={"Telephone number"} width={"21.8vw"}/>
                    </div>
                </div>
                <div>
                    <div className={style.formColumn}>
                        <SuperInput title={"Country"} width={"21.8vw"}/>
                        <div className={style.twoInputs}>
                            <SuperInput title={"City"} width={"10.2vw"}/>
                            <SuperInput title={"State"} width={"10.2vw"}/>
                        </div>
                        <SuperInput title={"Address"} width={"21.8vw"}/>
                        <SuperInput title={"Post index"} width={"10.2vw"}/>
                    </div>
                </div>
            </div>
        </form>
    )
}