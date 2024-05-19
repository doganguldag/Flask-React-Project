import React from 'react';

const Slider = () => {
  return (
    <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                  <img src="/images/slider-img.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <h1>Digital Marketing Experts</h1>
                  <p>
                    Digital marketing experts excel in navigating online platforms, leveraging their expertise in social media, search engines, and content strategies. Armed with insights into market trends and consumer behavior, they craft targeted campaigns for maximum impact. These professionals play a vital role in enhancing businesses' online presence, fostering engagement, and achieving marketing success in the dynamic digital realm.
                  </p>
                  <div className="btn-box">
                    <a href="/contact" className="btn1">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                  <img src="/images/about-img.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <h1>About Us</h1>
                  <p>
                    As a dynamic team passionate about digital excellence, we are dedicated to elevating your online presence. With a focus on innovation and tailored solutions, our expertise extends to e-commerce SEO consulting, ensuring your business thrives in the ever-evolving digital landscape. Trust us to optimize your online journey, attract the right audience, and propel your success. Welcome to a partnership where your goals become our mission.
                  </p>
                  <div className="btn-box">
                    <a href="/about" className="btn1">About Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                  <img src="/images/contact-img.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <h1>Services</h1>
                  <p>
                    Boost your online sales with our specialized e-commerce SEO consulting! We tailor strategies to optimize your site, attract target traffic, and maximize digital reach. Elevate your online presence and achieve sales success with us!
                  </p>
                  <div className="btn-box">
                    <a href="/service" className="btn1">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li data-bs-target="#customCarousel1" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
        <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
      </ol>
    </div>
  );
};

export default Slider;
