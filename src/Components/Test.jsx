import React, { useState, useEffect } from "react";

import s from "../Styles/test.module.scss";

import Loader from "./Loader.jsx"

import mainImg from "../assets/img/mainimg.jpg";

const Test = ({setArray, array, changeQuestionNum, questionNum, questions, text}) => {

  return questionNum == 4 ? (
    <Loader array={array}/>
  ) : (
      <div className={s.mainBlock}>
        <div className={s.mb_desc}>
          <h1>Поздравляем!</h1>
          <p>Потребительские подарки к 20-летнему юбилею Wildries</p>
          <p>Через анкету у вас будет шанс получить vivo V25e.</p>
        </div>
        <div className={s.mb_test_wrapper}>
          <div className={s.mb_imgBlock}>
            <img src={mainImg} alt="" />
          </div>
          <div className={s.mb_test}>
            <p>
              <b>Вопрос {questions[questionNum].id} из 4: </b>
              {questions[questionNum].question}
            </p>
            <div
              className={
                questionNum == 1 || questionNum == 2
                  ? `${s.mb_buttonsBlock_alt} ${s.mb_buttonsBlock}`
                  : `${s.mb_buttonsBlock}`
              }
            >
              {questions[questionNum].buttons.map((item, i) => (
                <div className={s.mb_buttons} key={i}>
                  <button type="button" onClick={() => changeQuestionNum()}>
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Test;
