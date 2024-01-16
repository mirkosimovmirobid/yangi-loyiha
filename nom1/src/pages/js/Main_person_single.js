import React from 'react'
import Navbar_page from '../js/Navbar_page'
import "../css/Mainlaruchun.css"
import gh from "../img/gh.png"
import { FaMoneyBillWave, FaPhone, FaStar } from "react-icons/fa";
export default function Main_person_single() {
  return (
    <div>
      <Navbar_page />

      <h1 className="h1">Персоны (2 355)</h1>
      <div className="main6">
        <input className="button5" placeholder="Персоны ..." type="" />
        <button className="button4">ПОИСК</button>
      </div>
      <h3>Главная / Персоны / Yetta Rasmussen</h3>
      <div className="main9">
        <div className="main24">
          <img
            className="img22"
            src="https://th.bing.com/th/id/OIP.3G6k73B4lvRM4SAno5JemgHaFz?rs=1&pid=ImgDetMainhttps://bilder.fernsehserien.de/gfx/person_1000/d/dave-franco.jpg"
            alt=""
          />
          <div className="main25">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <p className="p1">0 отзовов</p>
          </div>
        </div>
        <div className="main11">
          <h4 className="h41">Yetta Rassmusen</h4>
          <h4 className="h42">Ортопед. Психиатр</h4>
          <h4 className="h43">Стаж 30 г.</h4>
          <h4 className="h44">Высшая категория</h4>
          <h4 className="h45">
            <FaMoneyBillWave className="icon-money" /> от 150000.00 сум
          </h4>
          <h4 className="h46">Запись на приём:</h4>
          <h4 className="h47">
            <FaPhone className="icon-phone" /> +1 (809) 329-6178
          </h4>
          <h4 className="h48">lllum dolor quis ar</h4>
        </div>
      </div>
    </div>
  );
}

