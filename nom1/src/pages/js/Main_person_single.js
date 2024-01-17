import React from 'react'
import Navbar_page from "./Navbar_page";
import "../css/Mainlaruchun.css";
import { FaMoneyBillWave, FaPhone, FaStar } from "react-icons/fa";
export default function Main_person_single() {
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
          <div className="hi">
            <h2>Главная / Персоны / Yetta Rasmussen</h2>
          </div>
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
              <div className="kalendar3">
                <div className="k1">
                  <h1>Мединцинский центр "Бегма"</h1>
                  <p className="we">(Cupldltate voluptate)</p>
                  <div className="kun">
                    <div className="kun1">
                      <p>6</p>
                      <p>cp</p>
                    </div>
                    <div className="kun2">
                      <p>7</p>
                      <p>чт</p>
                    </div>
                    <div className="kun3">
                      <p>8</p>
                      <p>пт</p>
                    </div>
                    <div className="kun4">
                      <p>9</p>
                      <p>сб</p>
                    </div>
                    <div className="kun5">
                      <p>10</p>
                      <p>вс</p>
                    </div>
                    <div className="kun6">
                      <p>11</p>
                      <p>пн</p>
                    </div>
                    <div className="kun7">
                      <p>12</p>
                      <p>вт</p>
                    </div>
                  </div>
                </div>
                <div className="k2">
                  <div className="soat1">
                    <p className="padruga">16:00</p>
                  </div>
                  <div className="soat1">
                    <p className="padruga">16:30</p>
                  </div>
                  <div className="soat1">
                    <p className="padruga">17:00</p>
                  </div>
                  <div className="soat1">
                    <p className="padruga">17:30</p>
                  </div>
                  <div className="soat1">
                    <p className="padruga">18:00</p>
                  </div>
                  <div className="soat1">
                    <p className="padruga">18:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


