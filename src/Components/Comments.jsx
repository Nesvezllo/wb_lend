import React from 'react'

import s from "../Styles/comments.module.scss"

import { comments } from "../data/commets.js"

import like from "../assets/img/icons/like.png"
import dislike from "../assets/img/icons/dislike.png"

const Comments = () => {
  return (
    <div className={s.commentsWrapper}>
        <div className={s.cmnts_topBlock}>
            <div className={s.cmnts_tb_leftSide}>
                <p>Комментарии</p>
            </div>
            <div className={s.cmnts_tb_rightSide}>
                <p>10 / 183</p>
            </div>
        </div>
        <div className={s.cmnts_main}>
            {
                comments.map((item, i) => (
                    <div className={s.comment} key={i}>
                        <div className={s.cmnt_img}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className={s.cmnt_main}>
                            <h2>{item.name}</h2>
                            <div className={s.cmnt_text}>
                                <p>{item.text}</p>
                            </div>
                            <div className={s.cmnt_bottom}>
                                <div className={s.cmnt_grade}>
                                    <img src={like} alt="" />
                                    <img className={s.cmnt_dislike} src={dislike} alt=""/>
                                </div>
                                <p>{item.min} минут назад</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Comments;
