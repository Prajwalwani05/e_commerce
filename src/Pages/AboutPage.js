import React from "react";
import Header from "../components/Common/Header";

const AboutPage = () => {
  window.scrollTo(0,0)
  return (
    <div className="aboutPage">
      <Header isHeaderBg={true}/>
      <div className="cont">
        <div className="aboutContent">
          <div>
            <h1>About LeafLuxe</h1>
            <p>
              Welcome to LeafLuxe, where nature meets luxury. Established in
              2023, LeafLuxe is your destination for a
              curated selection of 20 distinctive and environmentally-conscious
              products. We're on a mission to offer you a unique shopping
              experience that combines the elegance of luxury with the purity of
              nature.
            </p>
          </div>
          <div>
            <h1>Our Story</h1>
            <p>
              At LeafLuxe, our journey began with a deep appreciation for the
              beauty and wonders of nature. Our founder, Prajwal Wani,
              envisioned a platform where individuals could access carefully
              curated products that are not only luxurious but also
              eco-friendly. Our commitment to sustainability and quality is at
              the core of what we do.
            </p>
          </div>
          <div>
            <h1>Our Mission</h1>
            <p>
              Our mission is to provide you with a thoughtfully selected range
              of products that enhance your life while minimizing our impact on
              the environment. We believe in the harmonious coexistence of
              nature and luxury, and we are dedicated to delivering products
              that reflect this ethos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
