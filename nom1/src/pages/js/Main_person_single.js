import React from 'react'
import Navbar_page from './Navbar_page'
import gh from "../img/gh.png"
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
      <div className="lop">
      <img src={gh} alt="" />
      </div>
    </div>
  );
}

