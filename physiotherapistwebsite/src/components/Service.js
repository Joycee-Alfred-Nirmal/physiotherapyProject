import React from 'react';
import './service.css'

const Service = () => {
  const services = [
    {
      title: 'Weight Gain Management',
      description: 'Tailored plans to help you achieve a healthy and sustainable weight gain through proper nutrition and lifestyle changes.',
    },
    {
      title: 'Weight Loss Management',
      description: 'Effective strategies to lose weight and maintain it, focusing on balanced diets, exercise, and motivation.',
    },
    {
      title: 'Treatment Plans',
      description: 'Personalized treatment plans designed to address specific health conditions and support overall well-being.',
    },
    {
      title: 'Physical Fitness',
      description: 'Customized fitness programs to improve strength, flexibility, and cardiovascular health.',
    },
    {
      title: 'Pain Assessment Scale',
      description: 'Accurate pain assessments to guide treatments and improve comfort and recovery outcomes.',
    },
  ];

  return (
    <section className="container py-5 cont">
      <h2 className="h3 text-center mb-4 fs-1 fw-bold ">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title mb-3">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
