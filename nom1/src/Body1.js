import "./App.css";
import img1 from "./Group 64 (1).png";

// import logo from "./logo-d.png";
// import image from "./image 22.png";
import img2 from "./Group 67.png";
import img3 from "./Group 68.png";
import img4 from "./Group 69.png";
import img5 from "./Group 70.png";
import img6 from "./Group 71.png";
import img7 from "./Group 72.png";
import img8 from "./image 22.png"
function App() {
  return (
    <div className="App">
      <div className="div1">
        <div className="div2">
          <h4>Ваш Путеводитель в Мире Заботы о Здоровье</h4>
          <p>
            Откройте доступ к широкому выбору врачей. Записывайтесь онлайн,
            читайте <br /> отзывы пациентов и делайте правильный выбор для
            своего здоровья.
          </p>
          <div className="div6">
            <button className="button1">
              Персоны, Клиники, Услуги, Диагностика, Лечение ...
            </button>
            <button className="button2">ПОИСК</button>
          </div>
        </div>
        <div className="div7">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="div4">
        <img src={img2} alt="" />
        <img  src={img3} alt="" />
        <img  src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img  src={img7} alt="" />
      </div>

    </div>
  );
}

export default App;
