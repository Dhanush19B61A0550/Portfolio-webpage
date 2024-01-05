import "./banner.css";

export default function Banner() {
  return (
    <div className="cst-banner" id="about">
      <div className="cst-banner-left">
        <div className="cst-designation">UI/UX Designer</div>
        <div className="cst-intro">Hello, my name is Madelyn Torff</div>
        <div className="cst-desc">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </div>
        <div className="cst-buttons">
          <a href="#">
            <button className="btn primary">Projects</button>
          </a>
          <a href="#">
            <button className="btn secondary">Linkedln</button>
          </a>
        </div>
      </div>
      <div className="cst-banner-right">
      <div className="avatar-container">
          <div className="avatar-background"></div>
          <img src="/images/avatar.png" alt="Avatar" className="avatar-image"/>
        </div>
      </div>
    </div>
  );
}
