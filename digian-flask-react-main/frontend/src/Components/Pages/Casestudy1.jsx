import React from 'react';

const CaseStudy1 = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-left">
            <h2>E-Commerce Platform Enhancement</h2>
            <p className="mb-4">
              <strong>Client:</strong> XYZ E-Commerce Company
              <br />
              <strong>Challenge:</strong> The client was facing low conversion rates and high bounce rates on their e-commerce platform. Users were frequently abandoning their shopping carts.
              <br />
              <strong>Solution:</strong> The company conducted user research and website analysis to improve the user experience and boost conversion rates. Key changes included a mobile-friendly design, faster page loading times, and streamlined payment processes.
              <br />
              <strong>Result:</strong> The revamped platform led to a 25% increase in conversion rates and a 15% reduction in bounce rates. Positive feedback was received from user satisfaction surveys, and customer loyalty improved.
            </p>
            <a className="btn btn-primary rounded-pill py-3 px-5" href="/index">Go Back To Home</a>
          </div>
          <div className="col-lg-6">
            {/* Sağ tarafta resim kutusunu ekleyin */}
            <img src="/images/contact-img.png" alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy1;
