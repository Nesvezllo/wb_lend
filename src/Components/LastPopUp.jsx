import React, { useState, useEffect } from 'react'

import s from "../Styles/lastPopUp.module.scss"

import phone from "../assets/img/phone.png"

const LastPopUp = ({ setHiddenPrizes, setViewBox, hiddenPrizes }) => {
    const [visible, setVisible] = useState(true)
    const [show, setShow] = useState(false)
    
    function closePopUp() {
        setVisible(!visible)
        setHiddenPrizes(true)
        setViewBox(false)
    }

    function changeShowState() {
        setShow(!show)
    }

    useEffect(() => {
        changeShowState()
    }, [])

    return (
        visible &&
        <div className={s.lastPopUpWrapper}>
            <div className={visible ? `${s.lastPopUp}` : `${s.lastPopUp_hidden}`}>
                <div className={s.lastPopUpImg}>
                    <img src={phone} alt="" />
                </div>
                <div className={s.lastPopUpTitle}>
                    <h1>Поздравляем!</h1>
                    <div className={s.lastPopUpText}>
                        <p><b>Ты сделал это! Вы выйграли vivo V25e.</b></p>
                        <p>**ПРАВИЛА**</p>
                        <p>1.Вы должны рассказать 5 группам или 20 друзьям о наших акциях.</p>
                        <p>2.Введите свой адрес и завершите регистрацию.</p>
                        <p>Подарки будут доставлены в течении 5-7 дней.</p>
                    </div>
                </div>
                <div className={s.lastPopUpButtons}>
                    <button type='button' onClick={() => closePopUp()}>ОК</button>
                </div>
            </div>
        </div>
  )
}

export default LastPopUp;
