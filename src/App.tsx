import React, {useCallback, useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {Title} from "./components/Title/Title";
import {SuperForm} from "./components/SuperForm/SuperForm";
import {HelpWays} from "./components/HelpWays/HelpWays";
import {Modal} from "./components/Modals/Modal";


function App() {
    const [open, setOpen] = useState(false);
    const [isIndividual, setIsIndividual] = useState(true);
    const [currentPaymentWayId, setCurrentPaymentWayId] = useState(2)
    const helpWays = [
        {id: 1, title: "Physical work"},
        {id: 2, title: "Money help"},
        {id: 3, title: "Clothes help"},
        {id: 4, title: "Volunteer"},
    ]

    const setPhysFace = useCallback(() => {
        setIsIndividual(true)
    }, [setIsIndividual])
    const setLayerFace = useCallback(() => {
        setIsIndividual(false)
    }, [setIsIndividual])

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen])
    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    return (
        <div className="App">
            <Button  variant="outlined" color="primary" onClick={handleOpen}>
                Click for help
            </Button>

            <Modal
                CSSStyles={{
                    transform: `translateY(${open ? 7 : -210}%)`
                }}
                bgOnClick={handleClose}
                backgroundDiv={open}
            >
                <Title text={"Fill in the form"}>
                    <div className={"titleChildren1"}>
                        <span className={isIndividual ? "activeField" : ""}
                              onClick={setPhysFace}>Individual</span>
                        <span className={!isIndividual ? "activeField" : ""}
                              onClick={setLayerFace}>Legal entity</span>
                    </div>
                </Title>

                {isIndividual ? <SuperForm/> : <div style={{marginTop: 20}}>Legal entity</div>}

                <Title text={"Ways to help"}>
                    <span className={"titleChildren2"}>You can choose a way to help</span>
                </Title>

                <HelpWays
                    setCurrentPaymentWayId={setCurrentPaymentWayId}
                    helpWays={helpWays}
                    currentPaymentWayId={currentPaymentWayId}
                />

                <Button style={{marginTop: 33, width: 200}} variant="contained" color="secondary" onClick={handleClose}>
                    Help
                </Button>
            </Modal>
        </div>
    );
}


export default App;
