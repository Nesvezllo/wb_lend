import React, { useState } from 'react'

import s from "../Styles/congratulationPopUp.module.scss"

import banner from "../assets/img/banner.jpg"

const СongratulationPopUp = () => {
    const [hidden, setHidden] = useState(false)

    function click() {
        setHidden(!hidden)
    }

    return (
        !hidden &&
        <div className={s.congratulationPopUp_wrapper}>
            <div className={s.cngtn_popUp}>
                <div className={s.cngtn_img}>
                    <img src={banner} alt="" />
                </div>
                <div className={s.cngtn_title}>
                    <h1>Поздравляем!</h1>
                </div>
                <div className={s.cngtn_desc}>
                    <p><b>Ваш ответ успешно сохранен.</b></p>
                    <p>у вас есть шанс выиграть подарки!</p>
                    <p>Вы должны выбрать правильную коробку с призом внутри.</p>
                    <p>У вас ксть 3 попытки. Удачи!</p>
                </div>
                <div className={s.cngtn_button}>
                    <button type='button' onClick={() => click()}>ОК</button>
                </div>
            </div>
        </div>
  )
}

export default СongratulationPopUp;
