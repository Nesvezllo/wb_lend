import React, { useState, useEffect  } from "react"

import s from "../Styles/home.module.scss"

import StartPopUp from "../Components/StartPopUp.jsx"
import Layout from "../Components/Layout.jsx"
import Comments from "../Components/Comments.jsx"
import DynamicScreen from "../Components/DynamicScreen.jsx"
import Footer from "../Components/Footer.jsx"

const Home = () => {
    const [number, setNumber] = useState(3)
    const [viewBox, setViewBox] = useState(false)
    const [open, setOpen] = useState(false);
    const [dateToday, setDateToday] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")

    useEffect(() => {
        getTodayDate()
    }, [])

    function numSet() {
        setNumber(number - 1)
    }
    

    function boxHandleClick() {
        setOpen(true);
    }

    // function prizesRemove(e, num, list, setList) {
    //     setList([...list, list.splice(num, 1)])
    //     localStorage.setItem("prizes", JSON.stringify(list))
    // }

    function handleClick(e, num, list, setList) {
        setViewBox(true)
        // prizesRemove(e, num, list, setList)
        e.target.style.visibility = "hidden"
        console.log(e); 
    }

    function getTodayDate() {
        let Data = new Date();
        let Day = Data.getDate()
        let Month = Data.getMonth();
        let Year = Data.getFullYear();
        setDateToday(Day)
        setYear(Year)
        switch (Month)
            {
                case 0: setMonth("января"); break;
                case 1: setMonth("февраля"); break;
                case 2: setMonth("марта"); break;
                case 3: setMonth("апреля"); break;
                case 4: setMonth("мае"); break;
                case 5: setMonth("июня"); break;
                case 6: setMonth("июля"); break;
                case 7: setMonth("августа"); break;
                case 8: setMonth("сентября"); break;
                case 9: setMonth("октября"); break;
                case 10: setMonth("ноября"); break;
                case 11: setMonth("ноября"); break;
                default: break
            }
    }

    return (
        <Layout>
            {/* <BoxPopUp viewBox={viewBox} open={open} setViewBox={() => setViewBox()} boxHandleClick={() => boxHandleClick()} setOpen={() => setOpen()} numSet={numSet} number={number}/>
            <div className={s.homeWrapper}>
                <Prizes handleClick={(e, num, list, setList) => handleClick(e, num, list, setList)}/>
                <div className={s.numBox}>
                    <div className={s.text}>
                        <p>Попыток</p>
                    </div>
                    <div className={s.num}>
                        <h1>{number}</h1>
                    </div>
                </div>
            </div> */}
            <StartPopUp />
            <div className={s.homeWrapper}>
                <div className={s.additional_info}>
                    <div className={s.left_block}>
                        <p>🎉Потребительские подарки к 20-летнему юбилею Wildries🎊</p>
                    </div>
                    <div className={s.date}>
                        <p>{ dateToday } { month }, { year }</p>
                    </div>
                </div>
                    <DynamicScreen />
                    <Comments />
                    <Footer />
                </div>
        </Layout>
    )
}

export default Home