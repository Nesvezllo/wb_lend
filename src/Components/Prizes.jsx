import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import s from "../Styles/Prizes.module.scss"

import box from "../assets/img/body2.png";
import boxLid from "../assets/img/cap2.png";

import СongratulationPopUp from "../Components/СongratulationPopUp.jsx"
import Fail from './Fail.jsx';
import LastPopUp from "./LastPopUp.jsx"
import PrizePopUp from "./PrizePopUp.jsx"
import PrizeAnimation from "./PrizeAnimation.jsx"
import ConfettiScreen from "./Confetti.js"

const Prizes = ({handleClick, setHiddenPrizes, setViewBox, hiddenPrizes}) => {

    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [openIndex, setOpenIndex] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [count, setCount] = useState(0)
    const [hidden, setHidden] = useState(false)
    // const [viewBox, setViewBox] = useState(false)

    let prizes

    function prizeRemove() {
        prizes = localStorage.setItem("prizes", JSON.stringify(list))
    }



    useEffect(() => {
        if (localStorage.getItem("prizes") === null) {
            prizeRemove()   
        } else {
            prizes = JSON.parse(localStorage.getItem("prizes"))
            setList(prizes)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            count == 2 && setHidden(!hidden)
        }, 2300)
    }, [count])

    function openBox(i) {
        setOpenIndex(i)
        setTimeout(() => {
            setCount(prevState => prevState + 1)
        }, 800)
    }

    return (
        <>

            {count == 1 && <Fail />}
            
            {count == 2 && <PrizePopUp /> && !hidden && <PrizeAnimation />}
            {count == 2 && <ConfettiScreen />}
            {hidden && <LastPopUp setHiddenPrizes={setHiddenPrizes} setViewBox={() => setViewBox()} hiddenPrizes={hiddenPrizes}/>}
            <СongratulationPopUp />
            <div className={s.prizesWrapper}>
            <div className={s.prizesTitle}>
                <h1>Выбери любые 3 коробки</h1>
            </div>
            <div className={s.prizes}>
                {list.map((num, index) => (
                    <div key={index} className={s.prize} onClick={(e) => {
                        openBox(index)
                        handleClick(e, num, list, () => setList())
                    }}>
                        <div className={`${s.box_lid} ${openIndex === index ? `${s.boxOpen}` : ''}`}>
                            <img src={boxLid} alt="" />
                        </div>
                        <div className={s.box}>
                            <img src={box} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div> 
        </>
    )
}

export default Prizes