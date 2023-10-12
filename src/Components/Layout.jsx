import React from 'react'
import s from "../Styles/layout.module.scss"

import Header from './Header.jsx'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={s.layout}>
        {children}
      </div>
    </>
  )
}

export default Layout;