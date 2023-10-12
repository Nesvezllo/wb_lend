import s from "../Styles/header.module.scss"

import { Link } from "react-router-dom"

import wb from "../assets/img/icons/wb.png"

const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.header_img}>
                <img src={wb} alt="" />
            </div>
        </div>
    )
}

export default Header