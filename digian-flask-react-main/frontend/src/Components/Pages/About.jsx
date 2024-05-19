import React from 'react';

function About() {
  return (
    <div>
      <section className="about_section layout_padding layout_margin">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About Us
                  </h2>
                </div>
                <p>
                  This company specializes in offering tailored e-commerce SEO consulting services, empowering businesses to optimize their online presence and drive targeted traffic. Leveraging their expertise, they guide clients in enhancing their websites for effective e-commerce success. With a focus on customized SEO strategies for e-commerce platforms, this service provider plays a pivotal role in helping clients maximize their digital reach and achieve their online sales goals.
                </p>
                <a href="/">  
                  Go Back to Home
                </a>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="img-box">
                <img src='../../public/images/slider-img.png' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
