import React from 'react'

import s from "../Styles/prizeAnimation.module.scss"

import phone from "../assets/img/phone.png"

const PrizeAnimation = () => {
  return (
    <div className={s.prizeAnimationWrapper}>
        <div className={s.prizeAnimation}>
            <img src={phone} alt="" />
        </div>
    </div>
  )
}

export default PrizeAnimation;
