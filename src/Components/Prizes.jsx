import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import s from "../Styles/Prizes.module.scss"

import img from "../assets/img/prize.png"

import СongratulationPopUp from "../Components/СongratulationPopUp.jsx"

const Prizes = ({handleClick}) => {

    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
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

    return (
        <>
            <СongratulationPopUp />
            <div className={s.prizesWrapper}>
            <div className={s.prizesTitle}>
                <h1>Выбери любые 3 коробки</h1>
            </div>
            <div className={s.prizes}>
                {list.map((num, index) => (
                    <div key={index} className={s.prize}>
                        <img src={img} onClick={(e) => handleClick(e, num, list, () => setList())}></img>
                    </div>
                ))}
            </div>
        </div> 
        </>
    )
}

export default Prizes