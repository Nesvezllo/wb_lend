import React, { useState, useEffect } from 'react'
import {ReactComponent as WhatsApp} from "../assets/img/icons/whatsapp.svg"

import s from "../Styles/congratulation.module.scss"

import phone from "../assets/img/phone.png"

import Warning from "./Warning.jsx"

export const Congratulation = () => {
    const [count, setCount] = useState(11)
    const [firstCount, setFirstCount] = useState(0)
    const [res, setRes] = useState(0)
    const [open, setOpen] = useState(false)
    const lineStyle = {
        width: firstCount == 0 || firstCount == 11 ? `${(firstCount / 20) * 100}%` : `${(count / 20) * 100}%`,
        height: '20px',
        background: '#128c7f',
        transition: 'width 0.5s ease-in-out',
        border: 0,
        borderRadius: "10px"
    };
    
    function clickOnButton() {
        setCount(prevState => prevState + 0.5)
        setFirstCount(prevState => prevState + 11)
        calculatePercent()
        window.location.href = "https://api.whatsapp.com/send?text=www.google.com"
    }

    useEffect(() => {
        calculatePercent()
    }, [count])

    function calculatePercent() {
        let num = 20
        let oneHundredPercent = 100
        if(firstCount == 11) {
            setRes((oneHundredPercent / num) * 11)
        } else if(count > 11) {
            setRes(Math.round((oneHundredPercent / num) * count))
        }
        console.log(res);
    }

    function clickOnBottomButton() {
        setOpen(!open)
    }

    return (
        <>
            {open && <Warning clickOnBottomButton={() => clickOnBottomButton()}/>}
            <div className={s.congratulation}>
                <div className={s.title}>
                    <h1>Поздравляем!</h1>
                </div>
                <div className={s.img}>
                    <img src={phone} alt="" />
                </div>
                <div className={s.text}>
                    <p>Ваш приз: vivo V25e. Следуйте инструкциям на следующей странице, чтобы получить свой приз!</p>
                </div>
                {res == 100 ?
                    <div className={s.atl_block}>
                        <p><b>
                            Поздравляем! Вы закончили делиться, пожалуйста, терпеливо дождитесь нашей проверки фона, награда будет выдана сразу после завершения проверки.
                            Проверка будет завершена в течение 7 дней.
                        </b></p>
                    </div>
                    :
                    <div className={s.bottomBlock}>
                    <div className={s.desc}>
                        <p>1. Поделитесь с 5 группами/20 друзьями в следующих приложениях (нажмите на соответствующий значок ниже)</p>
                    </div>
                    <div className={s.desc}>
                        <p>2. Нажмите «Продолжить» и получите свой приз.</p>
                    </div>
                    <div className={s.button}>
                        <button type='button' onClick={() => clickOnButton()}>
                            <WhatsApp />
                            <p>WhatsApp</p>
                        </button>
                    </div>
                    <div className={s.bar_block}>
                        <p>Делитесь им, пока зелёная полоска не заполнится!</p>
                        <div className={s.bar}>
                            <div className={s.insideBar}>
                                <p>{res}%</p>
                                <hr style={lineStyle} />
                            </div>
                        </div>
                    </div>
                    <div className={s.bottomButton}>
                        <button type='button' onClick={() => clickOnBottomButton()}><p>Продолжить</p></button>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default Congratulation;
