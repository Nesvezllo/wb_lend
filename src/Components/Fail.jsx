import React, { useState } from 'react'

import s from "../Styles/fail.module.scss"

import close from "../assets/img/icons/Close.png"

const Fail = () => {
    const [show, setShow] = useState(true)

    function chengeShowState() {
        setShow(!show)
    }
    return (
        show &&
        <div className={s.failWrapper}>
            <div className={s.fail}>
                <div className={s.img}>
                    <img src={close} alt="" />
                </div>
                <div className={s.text}>
                    <h1>К сожалению...</h1>
                    <p>Извините, выбранный вами ящик пуст. У тебя еще есть 2 шанса! Удачи!</p>
                </div>
                <div className={s.button}>
                    <button type='button' onClick={() => chengeShowState()}>ОК</button>
                </div>
            </div>
        </div>
  )
}

export default Fail
