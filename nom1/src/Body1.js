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
function App() {
  return (
    <div className="App">
      <div className="div1">
        <div className="div2">
          <h1 className="div3">Ваш Путеводитель в Мире Заботы о Здоровье</h1>
          <p>
            Откройте доступ к широкому выбору врачей. Записывайтесь онлайн,
            читайте <br /> отзывы пациентов и делайте правильный выбор для
            своего здоровья.
          </p>
          <button className="button1">
            Персоны, Клиники, Услуги, Диагностика, Лечение ...
          </button>
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
    </div>
  );
}

export default App;
