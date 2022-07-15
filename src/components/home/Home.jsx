import React from "react";
import Product from "../product/Product";
import "./home.css";
import Carousel from "react-material-ui-carousel";
import { bannerData, products } from "../../constants/data";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          autoPlay="true"
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
          stopAutoPlayOnHover={true}
          cycleNavigation={true}
          navButtonsProps={{
            style: {
              background: "#FFFFFF",
              color: "#494949",
              borderRadius: 0,
              margin: 0,
            },
          }}
        >
          {bannerData.map((pic, i) => {
            return (
              <img src={pic} key={i} alt="Maroon5" className="home__image" />
            );
          })}
        </Carousel>

        <div className="home__row">
          <Product
            id="12321341"
            pic="https://m.media-amazon.com/images/I/91kcPKEG-NL._SX522_.jpg"
            title="JBL C100SI Wired In Ear Headphones with Mic, JBL Pure Bass Sound, One Button Multi-function Remote, Angled Buds for Comfort fit (Black)"
            rating={3}
            price={5999}
          />
          <Product
            id="49538094"
            pic="https://m.media-amazon.com/images/I/61-kuF3d6LL._SX522_.jpg"
            title="Amazon Brand - Eono PC Gaming Headphones Surround Sound with Boom mic, Stereo Sound Wired Over Ear Headphones with RGB Light Compatiable with PC, Computer, PS5, PS4 Console, Laptop with 3.5mm Jack"
            rating={4}
            price={8999}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1999}
            rating={3}
            pic="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98}
            rating={5}
            pic="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598}
            rating={4}
            pic="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            pic="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={products[1].id}
            pic={products[1].pic}
            title={products[1].title}
            rating={products[1].rating}
            price={products[1].price}
          />
          <Product
            id={products[3].id}
            pic={products[3].pic}
            title={products[3].title}
            rating={products[3].rating}
            price={products[3].price}
          />
          <Product
            id={products[4].id}
            pic={products[4].pic}
            title={products[4].title}
            rating={products[4].rating}
            price={products[4].price}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
