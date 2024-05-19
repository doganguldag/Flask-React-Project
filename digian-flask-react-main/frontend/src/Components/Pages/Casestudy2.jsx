import React from 'react';

const CaseStudy2 = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-left">
            <h2>Digitization of Business Processes</h2>
            <p className="mb-4">
              <strong>Client:</strong> ABC Financial Company
              <br />
              <strong>Challenge:</strong> ABC Financial was experiencing efficiency loss due to manual business processes. Manual handling of documents resulted in lengthy approval processes and increased errors.
              <br />
              <strong>Solution:</strong> The company initiated a software development project to digitize and automate business processes. Solutions such as online document management, electronic signatures, and workflow automation were implemented.
              <br />
              <strong>Result:</strong> Digital transformation led to a 40% increase in process speed and a significant reduction in errors. This allowed the company to enhance customer service and gain a competitive advantage. Additionally, employee productivity increased, and operational costs decreased.
            </p>
            <a className="btn btn-primary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
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

export default CaseStudy2;
