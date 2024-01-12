import React, { Component } from 'react'
import "../css/Main_persons.css";
// import img10 from "../img/image 24.png"
import img11 from "../img/image 25.png"
import Navbar_page from "./Navbar_page";
import { FaMoneyBillWave, FaPhone, FaStar } from "react-icons/fa";
export default class Main_persons extends Component {
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
        <h2 className="h2">Результаты поиска (501)</h2>
        <div className="glavn-div">

        </div>
        
      </div>
    </div>
  </div>
);
}
}
