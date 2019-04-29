import React from "react";
import "../public/stylesheets/App.css";

class App extends React.Component {
  render() {
    const IMAGES_DIRECTORY = "/images/";
    const logoURL = `${IMAGES_DIRECTORY}ironhack-logo.svg`;

    const taglineTitle = "Say hello to ReactJS";
    const taglineDesc = "You will learn a Frontend framework from scratch, to became a Ninja Developer";

    const heroContainer = (
      <section className="hero-container d-flex w-100">
        <div className="hero">
          <div className="top-bar d-flex">
            <div className="top-bar__logo">
              <img src={logoURL} />
            </div>
            <div className="top-bar__menu">
              <img src="/images/menu-top.svg" />
            </div>
          </div>

          <div className="tagline">
            <h1 className="tagline__title">{taglineTitle}</h1>
            <p className="tagline__description">{taglineDesc}</p>
            <button className="tagline__btn">Awesome!</button>
          </div>
        </div>
      </section>
    );

    const featuresContainer = (
      <section className="features-container d-flex w-100">
        <div className="features d-flex w-100">
          <div className="feature d-flex">
            <img src="/images/icon1.png" className="feature__icon" />
            <h2 className="feature__title">Declarative</h2>
            <p className="feature__description">React makes it painless to create interactive UIs.</p>
          </div>
          <div className="feature d-flex">
            <img src="/images/icon2.png" className="feature__icon" />
            <h2 className="feature__title">Declarative</h2>
            <p className="feature__description">React makes it painless to create interactive UIs.</p>
          </div>
          <div className="feature d-flex">
            <img src="/images/icon3.png" className="feature__icon" />
            <h2 className="feature__title">Declarative</h2>
            <p className="feature__description">React makes it painless to create interactive UIs.</p>
          </div>
          <div className="feature d-flex">
            <img src="/images/icon4.png" className="feature__icon" />
            <h2 className="feature__title">Declarative</h2>
            <p className="feature__description">React makes it painless to create interactive UIs.</p>
          </div>
        </div>
      </section>
    );

    const mainComponent = (
      <div className="app-container">
        {heroContainer}
        {featuresContainer}
      </div>
    );

    return mainComponent;
  }
}

export default App;
