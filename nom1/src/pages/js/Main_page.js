import "../../App.css";
import img1 from "../img/Group 64 (1).png";

// import logo from "../img/logo-d.png";
// import image from "../img/image 22.png";
import img2 from "../img/Group 67.png";
import img3 from "../img/Group 68.png";
import img4 from "../img/Group 69.png";
import img5 from "../img/Group 70.png";
import img6 from "../img/Group 71.png";
import img7 from "../img/Group 72.png";
import img8 from "../img/image 22.png"
import Navbar_page from "./Navbar_page";
import Main_persons from "./Main_persons"
function App() {
  return (
    <div className="App">
<Navbar_page />

      <div className="div1">
        <div className="div2">
          <h1 className="div3">Ваш Путеводитель в Мире Заботы о Здоровье</h1>
          <p>
            Откройте доступ к широкому выбору врачей. Записывайтесь онлайн,
            читайте <br /> отзывы пациентов и делайте правильный выбор для
            своего здоровья.
          </p>
          <input
            className="button1"
            placeholder="    Персоны, Клиники, Услуги, Диагностика, Лечение ..."
            type="text"
          />
          <button className="button2">ПОИСК</button>
        </div>
        <img className="img1" src={img1} alt="" />
      </div>
      <div className="div4">
        <img src={img2} alt="" />
        <img className="img2" src={img3} alt="" />
        <img className="img3" src={img4} alt="" />
        <img className="img4" src={img5} alt="" />
        <img className="img5" src={img6} alt="" />
        <img className="img6" src={img7} alt="" />
      </div>
      <div className="div33">
        <img src={img8} alt="" />
      </div>
      <Main_persons />
    </div>
  );
}

export default App;
