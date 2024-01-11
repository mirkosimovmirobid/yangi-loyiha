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
        <div className="main8">
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
                <p className='p1'>0 отзовов</p>
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
          <div className="main10">
            <div className="main22">
              <img
                className="img23"
                src="https://media.licdn.com/dms/image/D5603AQHTVFHF7ConMg/profile-displayphoto-shrink_800_800/0/1666030920135?e=2147483647&v=beta&t=aKQBPYZSItzi3ofcwjEO1OI7HoZX3FwuR2KTz5dMMSs"
                alt=""
              />
              <div className="main23">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className='p1'>0 отзовов</p>
              </div>
            </div>
            <div className="main12">
              <h4 className="h41">Piper Beasley</h4>
              <h4 className="h42">Врач УЗИ</h4>
              <h4 className="h43">Стаж 2 г.</h4>
              <h4 className="h44">Высшая категория</h4>
              <h4 className="h45">
                <FaMoneyBillWave className="icon-money" />
                от 270000.00 сум
              </h4>
              <h4 className="h46">Запись на приём:</h4>
              <h4 className="h47">
                <FaPhone className="icon-phone" /> +1 (805) 452-7194
              </h4>
              <h4 className="h48">Minima ut dolor non</h4>
            </div>
          </div>
        </div>
        <div className="main8">
          <img className="img11" src={img11} alt="" />
        </div>
      </div>
    </div>
  </div>
);
}
}
