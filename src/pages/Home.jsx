import "./Home.css";

// Import Images
import saree1 from "../assets/sarees/saree1.JPG";
import saree2 from "../assets/sarees/saree2.JPG";
import saree3 from "../assets/sarees/saree3.JPG";
import tops1 from "../assets/tops/tops1.jpg";
import kurti1 from "../assets/kurtis/kurti1.jpg";

// Import offer images
import offer1 from "../assets/images/offer1.jpg";
import offer2 from "../assets/images/offer2.jpg";
import offer3 from "../assets/images/offer3.jpg";

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">

        <div className="hero-box">
          <img src={saree1} alt="Elegant Saree" />
          <div className="hero-text">
            <h2>Elegant Sarees</h2>
            <button>SHOP NOW</button>
          </div>
        </div>

        <div className="hero-box">
          <img src={saree2} alt="Designer Materials" />
          <div className="hero-text">
            <h2>Designer Materials</h2>
            <button>EXPLORE NOW</button>
          </div>
        </div>

      </div>

      {/* CATEGORY SECTION */}
      <h2 className="section-title">Shop by Category</h2>

      <div className="category">

        <div className="cat-card">
          <img src={saree3} alt="Sarees" />
          <button>Sarees</button>
        </div>

        <div className="cat-card">
          <img src={tops1} alt="Tops" />
          <button>Tops</button>
        </div>

        <div className="cat-card">
          <img src={kurti1} alt="Kurtis" />
          <button>Kurtis</button>
        </div>

      </div>

      {/* OFFERS SECTION */}
      <h2 className="section-title">🔥 Hot Offers</h2>

      <div className="offers-slider">
        <div className="offers-track">

          {/* Offer 1 */}
          <div className="offer-box">
            <img src={offer1} alt="Flat 50% Off" />
            <div className="offer-content">
              <h3>FLAT 50% OFF</h3>
              <p>On selected Sarees</p>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="offer-box">
            <img src={offer2} alt="Buy 1 Get 1 Free" />
            <div className="offer-content">
              <h3>BUY 1 GET 1 FREE</h3>
              <p>On Tops & Kurtis</p>
            </div>
          </div>

          {/* Offer 3 */}
          <div className="offer-box">
            <img src={offer3} alt="Season Sale" />
            <div className="offer-content">
              <h3>SEASON SALE</h3>
              <p>Up to 70% Discount</p>
            </div>
          </div>

          {/* Duplicate Offers for infinite sliding */}
          <div className="offer-box">
            <img src={offer1} alt="Flat 50% Off Duplicate" />
            <div className="offer-content">
              <h3>FLAT 50% OFF</h3>
              <p>On selected Sarees</p>
            </div>
          </div>

          <div className="offer-box">
            <img src={offer2} alt="Buy 1 Get 1 Free Duplicate" />
            <div className="offer-content">
              <h3>BUY 1 GET 1 FREE</h3>
              <p>On Tops & Kurtis</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
