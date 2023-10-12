import React, { useState, useEffect } from 'react'

import s from "../Styles/home.module.scss"

import Test from "./Test.jsx"

import { questions } from "../data/questions.js";

import Prizes from "../Components/Prizes.jsx"
import BoxPopUp from "./BoxPoUp.jsx"
import Layout from './Layout.jsx';
import Congratulation from './Congratulation.jsx';

const DynamicScreen = () => {
    const [questionNum, setQuestionNum] = useState(0);
    const [text, setText] = useState([
        "Вы ответили на все 4 вопроса",
        "Ваш IP-адрес действителен для этой акции",
        "Подарки в наличии и на складе!",
    ]);
    const [array, setArray] = useState([])
    const [count, setCount] = useState()
    const [visible, setVisible] = useState(false)
    const [number, setNumber] = useState(3)
    const [open, setOpen] = useState(false); 
    const [viewBox, setViewBox] = useState(false)
    const [hiddenPrizes, setHiddenPrizes] = useState(false)

    function changeQuestionNum() {
        setQuestionNum((prev) => prev + 1);
    }

    function textLoader() {
        for (let i = 0; i <= 3; i++) {
            setTimeout(() => {
                setArray(prev => [...prev, text[i]])
                setCount(i)
            }, 2000 * i);
        }
    }

        useEffect(() => {
        if(questionNum == 4) {
            setTimeout(() => {
              textLoader()
            }, 2000)
        }
        }, [questionNum]);
    
        function numSet() {
            setNumber(number - 1)
        }
        
    
        function boxHandleClick() {
            setOpen(true);
        }
    
        function handleClick(e, num, list, setList) {
            // setViewBox(true)
            // prizesRemove(e, num, list, setList)
            setTimeout(() => {
                e.target.parentElement.parentElement.style.visibility = "hidden"
            }, 1000)
        }


    return (
        array.length == 4 ?
        <>
            {/* <BoxPopUp 
                viewBox={viewBox} 
                open={open} 
                setViewBox={() => setViewBox()} 
                boxHandleClick={() => boxHandleClick()} 
                setOpen={() => setOpen()} numSet={numSet} 
                number={number}
                setHiddenPrizes={setHiddenPrizes}
                hiddenPrizes={hiddenPrizes}
            /> */}
            {!hiddenPrizes ? 
            <Prizes 
                handleClick={(e, num, list, setList) => handleClick(e, num, list, setList)} 
                boxHandleClick={() => boxHandleClick()}
                setHiddenPrizes={setHiddenPrizes}
                setViewBox={() => setViewBox()}
                hiddenPrizes={hiddenPrizes}
            />
            : 
                <Congratulation />
            }
        </>
        :
        <Test 
            questionNum={questionNum}
            array={array}
            changeQuestionNum={changeQuestionNum}
            questions={questions}
            setArray={setArray}
            text={text}
        />
    )
}

export default DynamicScreen;