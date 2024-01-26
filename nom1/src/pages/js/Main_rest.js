import React, { Component } from 'react'
import Navbar_page from "./Navbar_page";
import "../css/Mainlaruchun.css";
import { FaMoneyBillWave, FaPhone, FaStar } from "react-icons/fa";
 //import dedr from "../img/dedr.png"
export default class Main_rest extends Component {
  render() {
    return (
      <div>
        <Navbar_page />
        <div className="main3">
          <div className="main5">
            <h4 className="h4">Персоны</h4>
            <h4 className="h4">Организации</h4>
            <h4 className="h4">Услуги</h4>
            <h4 className="h4">Диагностика</h4>
            <h4 className="h4">Лечение</h4>
            <h4 className="h4">Аптеки</h4>
          </div>
          <div className="main7"></div>
          <div className="main4">
            <h1 className="h1">Персоны (2 355)</h1>
            <div className="main6">
              <input className="button5" placeholder="Персоны ..." type="" />
              <button className="button4">ПОИСК</button>
            </div>
            <h2 className="h2">Главная / Персоны / Yetta Rasmussen</h2>
          </div>
          {/* <img className='hj' src={dedr} alt="" /> */}
        </div>
      </div>
    );
  }
}
