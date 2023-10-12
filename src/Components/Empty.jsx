import React, { useEffect } from "react";

import s from "../Styles/empty.module.scss"

import { useStateContext } from "../context/StateContext"

const Empty = ({setViewBox, viewBox, setOpen, open, numSet}) => {

    function emptyRemove() {
        let empty = document.querySelector("#empty")
        empty && empty.remove()
    }

    useEffect(() => {
        setTimeout(() => {
            setViewBox(!viewBox)
            setOpen(!open)
            numSet()
            emptyRemove()
        }, 2000)
    }, [])


    return (
        <div className={s.empty} id="empty">
            <div className={s.emptyBody}>
                <h1>Пусто</h1>
            </div>
        </div>
    )
}

export default Empty