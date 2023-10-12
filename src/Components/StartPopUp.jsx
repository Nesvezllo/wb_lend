import React, { useState, useEffect } from 'react'
import s from "../Styles/startPopUp.module.scss"

import mainImg from "../assets/img/mainimg.jpg"

const StartPopUp = () => {
    const [hidden, setHidden] = useState(false)
    const [vision, setVision] = useState(false)

    function popUpHidden() {
        setHidden(!hidden)
    }

    function visible() {
        setVision(!vision)
    }

    useEffect(() => {
        visible()
    }, [])

    return (
        !hidden &&
        <div className={s.popUpWrapper}>
            <div className={vision ? `${s.popUp}` : `${s.popUp_appearance}`}>
                <div className={s.popUpImg}>
                    <img src={mainImg} alt=""/> 
                </div>
                <div className={s.popUpMainBlock}>
                    <h1>Поздравляем</h1>
                    <p>У вас есть шанс выиграть подарок.Нажмите кнопку «Получить подарок», чтобы продолжить.</p>
                </div>
                <div className={s.popUpButtonBlock}>
                    <button type='button' onClick={() => popUpHidden()}>Получить подарок</button>
                </div>
            </div>
        </div>
  )
}

export default StartPopUp