import React, { Component } from 'react'
import nom from '../img/logo-d24 1.png'
import s from "../css/Navbar_page.module.css"
export default class Navbar_page extends Component {
  render() {
    return (
      <div>
        
<div className={s.navbar1}>
    <div className={s.tash}> Tashkent</div>
    <img src={nom} alt="" />
    <button className='button3'>Войти</button>
</div>


      </div>
    )
  }
}
