import React from 'react';
import { useService } from '../Hooks';

function Services() {

  const [serviceData, serviceError] = useService();

  if (serviceError) return <p>{serviceError.message}</p>;
  if (!serviceData) return null;

  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            Our Services
          </h2>
          <p>
            Important practices that will make your organization stand out.
          </p>
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
  );
}

export default Services;
