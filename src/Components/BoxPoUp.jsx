import React, { useState, useEffect } from "react"

import s from "../Styles/BoxPopUp.module.scss"

import GiftBoxAnimation from "./GiftBoxAnimations.js"
import PrizePopUp from "./PrizePopUp"

const BoxPopUp = ({viewBox, setViewBox, numSet, number, boxHandleClick, open, setOpen, setHiddenPrizes, hiddenPrizes}) => {

    return (
        viewBox && 
            <div className={s.boxPopUp}>
                <div className={s.boxPopPupBody}>
                    <GiftBoxAnimation open={open} boxHandleClick={() => boxHandleClick()}/>
                    {/* <div id="text" className={s.boxText}>
                        <h2>Нажмите на коробку</h2>
                    </div>     */}
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