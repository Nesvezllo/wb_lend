import React, { useState, useEffect } from "react"

import s from "../Styles/BoxPopUp.module.scss"

import GiftBoxAnimation from "./GiftBoxAnimations.js"
import PrizePopUp from "./PrizePopUp"

const BoxPopUp = ({viewBox, setViewBox, numSet, number, boxHandleClick, open, setOpen, setHiddenPrizes, hiddenPrizes}) => {

    function openDialog() {
        let dialog
        setTimeout(() => {
            dialog = document.querySelector("dialog")
            dialog && dialog.showModal()
        }, 700);
        let text = document.getElementById("text")
        text.style.display = "none"
    }


    return (
        viewBox && 
            <div className={s.boxPopUp}>
                <div className={s.boxPopPupBody}>
                    <GiftBoxAnimation open={open} boxHandleClick={() => boxHandleClick()} openDialog={() => openDialog()}/>
                    <div id="text" className={s.boxText}>
                        <h2>Нажмите на коробку</h2>
                    </div>    
                </div>
                {open &&
                    <PrizePopUp 
                        viewBox={viewBox} 
                        setViewBox={() => setViewBox()} 
                        boxHandleClick={() => boxHandleClick()} 
                        open={open}
                        setOpen={() => setOpen()}
                        numSet={() => numSet()}
                        number={number}
                        setHiddenPrizes={setHiddenPrizes}
                        hiddenPrizes={hiddenPrizes}
                    />  
                }
            </div>
    )
}

export default BoxPopUp