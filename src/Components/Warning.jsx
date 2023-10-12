import React, { useState, useEffect } from 'react'
import { ReactComponent as WarningImg } from "../assets/img/icons/warning.svg"

import s from "../Styles/warning.module.scss"

const Warning = ({ clickOnBottomButton }) => {
    const [show, setShow] = useState(false)

    function changeShowState() {
        setShow(!show)
    }

    useEffect(() => {
        changeShowState()
    }, [])

    return (
        <div className={s.warningWrapper}>
            <div className={show ? `${s.warning}`  : `${s.warning_hidden}`}>
                <div className={s.img}>
                    <WarningImg />
                </div>
                <div className={s.title}>
                    <h1>К сожалению...</h1>
                </div>
                <div className={s.text}>
                    <p>Вы должны поделиться с друзьями о нашем мероприятии. Делитесь, пока синяя полоса не заполнится!</p>
                </div>
                <div className={s.button}>
                    <button type='button' onClick={() => clickOnBottomButton()}>ОК</button>
                </div>
            </div>
        </div>
  )
}

export default Warning;