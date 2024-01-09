import React, { Component } from 'react'
import nom from '../img/logo-d24 1.png'
import s from "../css/Navbar_page.module.css"
import nom1 from "../img/Group 63 (2).png";
export default class Navbar_page extends Component {
  render() {
    return (
      <div>
        <div className={s.navbar1}>
          <div className="div88">
            <img src={nom1} alt="" />
            <div className={s.tash}> Tashkent</div>
          </div>
          <img src={nom} alt="" />
          <button className="button3">Войти</button>
        </div>
      </div>
    );
  }
}
