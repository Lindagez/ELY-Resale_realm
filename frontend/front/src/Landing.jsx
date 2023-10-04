import React from 'react';
import './Landing.css';
import './contact.css';
import './land.css';

export const Landing = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <ul>
            <li>
              {/* <img className="logo" src="./icon.jpg" alt="Logo" /> */}
              <p className="ely">ELY</p>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="https://github.com/Yosinan/Resale_Realm">Project's Github Link</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="feature-container" id="home">
        <h2>Intro</h2>
      </div>
      <section id="home">
        <div className="cover-image">
          <img src="./images/icon.jpg" alt="Cover Image" />
        </div>
        <div className="project-info">
          <h3>ELY - Resale Realm</h3>
          <p>A Resale Platform for Buying and Selling Used Items</p>
          <button className="button" href="#" onClick={() => alert("oops, under construction. Will be deployed soon.")}>
            Try ELY
          </button>
        </div>
      </section>
      <div className="feature-container" id="feature">
        <h2>Features</h2>
        <section id="features">
          <div className="feature">
            <img className="image" src="./images/buySell.jpg" alt="Feature 1" />
            <div className="feature-content">
              <h2>Easy Buying and Selling</h2>
              <p>
                With ELY, you can effortlessly buy and sell used items in just a few clicks. Say goodbye to the hassle of
                traditional classifieds.
              </p>
            </div>
          </div>
          <div className="feature">
            <img className="image" src="./images/secure.jpg" alt="Feature 2" />
            <div className="feature-content">
              <h2>Secure Transactions</h2>
              <p>
                Your transactions on ELY are fully secure. We prioritize the safety and privacy of our users to provide a
                worry-free selling and buying experience.
              </p>
            </div>
          </div>
          <div className="feature">
            <img className="image" src="./images/fee.jpg" alt="Feature 2" />
            <div className="feature-content">
              <h2>No service charge</h2>
              <p>
                ELY eliminates any fees or commissions typically associated with transactions on the platform. <br />
                It ensures that sellers can maximize their profits by receiving the full amount from their item sales without
                any deductions.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="feature-container" id="about">
        <h2>About</h2>
      </div>
      <div className="about-us">
        <section>
          <p>
            <br />
            <br />
            📌 Our project was inspired by the growing need for a platform that facilitates the buying and selling of used/secondhand
            products with fair prices. <br />
            The idea behind Resale originated from observing the increasing popularity of the secondhand market and recognizing the
            potential to create a user-friendly online platform to connect buyers and sellers.
            <br /> 📌 The rise of e-commerce and online marketplaces has made it easier for people to sell and buy products remotely.
            However, existing platforms often lack dedicated features for secondhand items, making it challenging to find relevant
            listings and negotiate fair prices. This lack of specialized focus sparked the idea of creating a dedicated resale web
            app that addresses these specific needs.
            <br />📌 By focusing solely on resale, we aim to create a curated marketplace that promotes transparency, trust, and fair
            pricing.
          </p>
          <br />
          <h3>💻 Teams </h3>
          <div className="main">
            <div className="second">
              <table className="sertabel1">
                <tr>
                  <td className="tdata" id="tdata1">
                    <figure className="fig">
                      <img src="./images/Me.png" alt="profile" className="yos" width="250cm" height="250cm" />
                      <figcaption className="caption">
                        <div className="captiontxt">
                          <h3>Yoseph Zewdu</h3>
                          <p> &lt; Software Developer &sol;&gt;</p>
                          <p>
                            He has experience in backend dev and skills in organizing, planning, and leading projects, and managing
                            project timelines and resources.
                          </p>
                        </div>
                      </figcaption>
                      <div className="social" id="social">
                        <a href="https://github.com/Yosinan">
                          <i className="fab fa-github" style={{ fontSize: '30px' }}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/yoseph-zewdu-708048251/">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/Yoseph43810128?t=PFhEPDBa05xTrGG50PkHJw&s=09">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </figure>
                  </td>
                  <td className="tdata" id="tdata2">
                    <figure className="fig">
                      <img id="imgs" src="https://avatars.githubusercontent.com/u/106866923?v=4" width="258cm" height="277cm" />
                      <figcaption className="caption">
                        <div className="captiontxt">
                          <h3>Lidiya Gezahegn</h3>
                          <p>&lt; Software Developer &sol;&gt;</p>
                          <p>
                            She has prior experience and skills in designing and developing the user interface and experience (UI/UX).
                          </p>
                        </div>
                      </figcaption>
                      <div className="social" id="social">
                        <a href="https://github.com/lindagez">
                          <i className="fab fa-github" style={{ fontSize: '30px' }}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/lidiya-gezahegn-9491a9211/">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </figure>
                  </td>
                  <td className="tdata" id="tdata3">
                    <figure className="fig">
                      <img id="imgs" src="https://avatars.githubusercontent.com/u/111453895?v=4" width="258cm" height="277cm" />
                      <figcaption className="caption">
                        <div className="captiontxt">
                          <h3>Esrael Berhanu</h3>
                          <p>&lt; Software Developer &sol;&gt;</p>
                          <p>
                            He has expertise in developing and maintaining the server-side, including the database, API, and
                            server-side logic.
                          </p>
                        </div>
                      </figcaption>
                      <div className="social" id="social">
                        <a href="https://github.com/esru13">
                          <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/esrael-berhanu-360ba6248/">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </figure>
                  </td>
                </tr>
              </table>
              <br />
              <br />
            </div>
          </div>
        </section>
      </div>
      <div className="contact-container">
        <section id="contact">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <textarea name="message" placeholder="Your Message"></textarea>
              {/* <input className="button" type="submit" value="Send Message"> */}
              <button className="button" onClick="con()">
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>© 2023 ELY. All Rights Reserved.</p>
      </footer>
   </div>
  
  );
}
