// eslint-disable-next-line no-unused-vars
import React from "react";
import './Home.css'
import Logo from "./assets/oneplus.webp";
import Logo1 from "./assets/mi1.webp";
import Logo2 from "./assets/iphone.jpg"
// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars
const Home = () => {
  return (
    <div className="hello">
      <h1>WELCOME TO THE CHENNAI MOBILES</h1>
      <p>Purchase the high quality of products at discount prices and buy amazing gifts</p>

      <div className="flex-container">
        <center>
          <img src={Logo} alt="mi" />
          <p>MI
            $4500
          </p>
        </center>
        <center>
          <img src={Logo1} alt="vivo" />
          <p>
            VIVO
            $5000
          </p>
        </center>
        <center>
          <img src={Logo2} alt="iphone15" />
          <p>
            One Plus
            $5500
          </p>
        </center>

      </div>

      <center><button className="shop-now-btn">Shop Now</button></center>

    </div>

  );
};
export default Home;