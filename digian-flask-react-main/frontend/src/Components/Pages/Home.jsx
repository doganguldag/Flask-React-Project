import React from 'react';
import Slider from '../Slider';
import Footer from '../Footer';
import MessagesForm from '../Forms/MessagesForm';
import { useService, useCustomers } from '../Hooks';

const Home = () => {
  const [serviceData, serviceError] = useService();
  const [customerData, customerError] = useCustomers();

  if (serviceError || customerError) return <p>{serviceError.message || customerError.message}</p>;
  if (!serviceData || !customerData) return null;

  return (
    <>
      <div className="hero_area">
        <section className="slider_section ">
          <Slider />
        </section>
      </div>

      {/* Service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Services</h2>
            <p>Important practices that will make your organization stand out.</p>
          </div>
          <div className="row">
            {serviceData.services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="box">
                  <div className="img-box">
                    <img src={`${service.photo_url}`} alt={service.pageTitle} />
                  </div>
                  <div className="detail-box">
                    <h5>{service.pageTitle}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  As a dynamic team passionate about digital excellence, we are dedicated to elevating your online presence. With a focus on innovation and tailored solutions, our expertise extends to e-commerce SEO consulting, ensuring your business thrives in the ever-evolving digital landscape. Trust us to optimize your online journey, attract the right audience, and propel your success. Welcome to a partnership where your goals become our mission.
                </p>
                <a href="/about">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/about-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case section */}
      <section className="case_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Case Studies</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="/images/case-1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>E-Commerce Platform Enhancement</h5>
                  <p>Challenge: The client was facing low conversion rates and high bounce rates on their e-commerce platform. Users were frequently abandoning their shopping carts.</p>
                  <a href="/casestudy1">
                    <span>Read More</span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="/images/case-2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Digitization of Business Processes</h5>
                  <p>Challenge: ABC Financial was experiencing efficiency loss due to manual business processes. Manual handling of documents resulted in lengthy approval processes and increased errors.</p>
                  <a href="/casestudy2">
                    <span>Read More</span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client section */}
      <section className="py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-primary text-white px-3 py-2 d-inline-block">Testimonials</h6>
            <h1 className="mb-4">What Our Customers Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            {customerData.customers.map((customer, index) => (
              <div key={index} className="testimonial-item text-center">
                <img className="rounded-circle mb-3" src="/images/client.jpg" alt="Client Image" style={{ width: '80px', height: '80px' }} />
                <h5 className="mb-0">{customer.name}</h5>
                <div className="testimonial-text bg-light p-4">
                  <p className="mb-0">{customer.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 offset-md-1">
              <div className="form_container">
                <div className="heading_container">
                  <h2>Request A Call back</h2>
                </div>
                <MessagesForm />
              </div>
            </div>
            <div className="col-md-6 col-lg-7 px-0">
              <div className="map_container">
                <div className="map">
                  {/* Google Maps Embed Code */}
                  <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder="0" style={{ minHeight: '300px', border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                  {/* End Google Maps Embed Code */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
