import React from 'react';
import NewsletterForm from './Forms/NewsletterForm';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-info-detail">
                <h4>Digian</h4>
                <p>
                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto">
              <div className="footer-info-links">
                <h4>Links</h4>
                <div className="footer-info-detail">
                  <a href="/">Home</a>
                  <br></br>
                  <a href="/about">About</a>
                  <br></br>
                  <a href="/services">Services</a>
                  <br></br>
                  <a href="/contact">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Subscribe</h4>
              <NewsletterForm />
            </div>
            <div className="col-md-6 col-lg-3 mb-0 ml-auto">
              <div className="footer-info-contact">
                <h4>Adres</h4>
                <div className="footer-info-detail">
                  <a href="/contact">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <br></br>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call Digian</span>
                  </a>
                  <br></br>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>digian@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="footer-info-social">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end footer-info */}
      {/* footer section */}
      <div className="container">
        <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
      {/* end footer section */}
    </footer>
  );
};

export default Footer;
