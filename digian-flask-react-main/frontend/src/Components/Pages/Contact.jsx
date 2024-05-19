import React from 'react';
import MessagesForm from '../Forms/MessagesForm';

function Contact() {
  return (
    <section className="contact_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 offset-md-1">
            <div className="form_container">
              <div className="heading_container">
                <h2>
                  Request A Call back
                </h2>
              </div>
              <MessagesForm />
            </div>
          </div>
          <div className="col-md-6 col-lg-7 px-0">
            <div className="map_container">
              <div className="map">
                {/* Google Maps Embed Code */}
                <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameBorder="0" style={{minHeight: '300px', border: '0'}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0">
                </iframe>
                {/* End Google Maps Embed Code */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
