import React, {useState, useEffect} from 'react'
import { TailSpin } from "react-loader-spinner";

import s from "../Styles/loader.module.scss"

const Loader = ({array}) => {
        
    return (
        <div className={s.checking}>
            <h1>Мы проверяем ваш ответ...</h1>
            <div className={s.loader}>
            <TailSpin
                height="50"
                width="50"
                color="#5b6ca4"
                ariaLabel="tail-spin-loading"
                radius="2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            </div>
            <div className={s.textWrapper}>
            {array.map((item, i) => (
                <div className={s.text} key={i}>{item}</div>
            ))}
            </div>
    </div>
    )
}

export default Loader;
