import React, { useEffect, useState } from "react"

import s from "../Styles/prizePopUp.module.scss"

import {Link} from "react-router-dom"

import img from "../assets/img/close.png"
import img2 from "../assets/img/card.png"
import prize from "../assets/img/prize1.jpg"

import Empty from "./Empty.jsx"
import PrizeAnimation from "./PrizeAnimation.jsx"
import ConfettiScreen from "./Confetti.js"
import LastPopUp from "./LastPopUp.jsx"


    function go() {
        window.location.href = "https://aslgo.ru/13z9fA"
    }

const PrizePopUp = ({setOpen, setViewBox, open, viewBox, numSet, number, setHiddenPrizes, hiddenPrizes}) => {
    const [wait, setWait] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [visible, setVisible] = useState(true)
    
    // function closePopUp() {
    //     setVisible(!visible)
    //     setHiddenPrizes(true)
    // }

    function dialogClose() {
        let dialog = document.querySelector("dialog")
        dialog.close()

        setViewBox(!viewBox)
        go()
    }

    function stateWaiting() {
        setTimeout(() => {
            setWait(!wait)
        }, 1000)
    }

    useEffect(() => {
        stateWaiting()

        setTimeout(() => {
            setHidden(!hidden)
        }, 5000)
    }, [])

    return (
        number == 3 ?
        <Empty setViewBox={setViewBox} viewBox={viewBox} setOpen={() => setOpen()} open={open} numSet={() => numSet()}/>
        :number == 2 ?
        wait && 
            <>
                <ConfettiScreen open={open}/>
                {!hidden && <PrizeAnimation />}
                {hidden && <LastPopUp setHiddenPrizes={setHiddenPrizes} setViewBox={() => setViewBox()} hiddenPrizes={hiddenPrizes}/>}
            </>
        // <dialog className={s.prizepopup}>
        //         <div className={s.head}>
        //         </div>  
        //         <div className={s.body}>
        //             <img src={prize}></img>
        //         </div>
        //         <div className={s.btnBlock}>
        //             <Link className={s.button} onClick={() => dialogClose()}>Забрать</Link>
        //         </div>
        //     </dialog>
        // <Empty setViewBox={setViewBox} viewBox={viewBox} setOpen={() => setOpen()} open={open} numSet={() => numSet()}/>
        :number == 1 &&  <Empty setViewBox={setViewBox} viewBox={viewBox} setOpen={() => setOpen()} open={open} numSet={() => numSet()}/>
    )

    // switch (number){
    //     case 4: 
    //     return (
    //         <dialog className={s.prizepopup}>
    //             <div className={s.head}>
    //                 <h1>Ваш Приз</h1>
    //             </div>  
    //             <div className={s.body}>
    //                 <img src={img2}></img>
    //             </div>
    //             <div className={s.btnBlock}>
    //                 <button className={s.button}>Забрать</button>
    //             </div>
    //         </dialog>)

    //     case 3:
    //     return (
    //         <dialog className={s.prizepopup}>
    //             <div className={s.head}>
    //                 <h1>Ваш Приз</h1>
    //             </div>  
    //             <div className={s.body}>
    //                 <img src={img2}></img>
    //             </div>
    //             <div className={s.btnBlock}>
    //                 <button className={s.button}>Забрать</button>
    //             </div>
    //         </dialog>
    //     )
    //     case 2: 
    //     return (
    //         <dialog className={s.prizepopup}>
    //             <div className={s.head}>
    //                 <h1>Ваш Приз</h1>
    //             </div>  
    //             <div className={s.body}>
    //                 <img src={img2}></img>
    //             </div>
    //             <div className={s.btnBlock}>
    //                 <button className={s.button}>Забрать</button>
    //             </div>
    //         </dialog>
    //     )
        
    //     case 1:
    //     return (
    //         <dialog className={s.prizepopup}>
    //             <div className={s.head}>
    //                 <h1>Ваш Приз</h1>
    //             </div>  
    //             <div className={s.body}>
    //                 <img src={img2}></img>
    //             </div>
    //             <div className={s.btnBlock}>
    //                 <button className={s.button}>Забрать</button>
    //             </div>
    //         </dialog>
    //     )

    //     case 0:
    //     return (
    //         <dialog className={s.prizepopup}>
    //             <div className={s.head}>
    //                     <h1>Ваш Приз</h1>
    //             </div>  
    //             <div className={s.body}>
    //                 <img src={img2}></img>
    //             </div>
    //             <div className={s.btnBlock}>
    //                 <button className={s.button}>Забрать 0</button>
    //             </div>
    //         </dialog>
    //     )

    //     default:
    //     return <Empty setViewBox={setViewBox} viewBox={viewBox} setOpen={() => setOpen()} open={open} numSet={() => numSet()}/>
    // }   
}

export default PrizePopUp