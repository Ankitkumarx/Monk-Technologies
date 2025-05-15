import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/main.scss';
import '../styles/hero.scss';
import '../styles/service.scss';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Cloud Solutions",
      description: "Transform your business with our cutting-edge cloud infrastructure and DevOps solutions. We help organizations achieve scalability, reliability, and efficiency in their digital operations.",
      image: "/images/slider-img.png",
      cta: { text: "Explore Solutions", link: "/services" }
    },
    {
      title: "DevOps Excellence",
      description: "Streamline your development and operations with our comprehensive DevOps services. From CI/CD pipelines to infrastructure automation, we've got you covered.",
      image: "/images/slider-img.png",
      cta: { text: "Learn More", link: "/services#devops" }
    },
    {
      title: "24/7 Support",
      description: "Our expert team provides round-the-clock support to ensure your cloud infrastructure runs smoothly. We're here to help you succeed in your digital transformation journey.",
      image: "/images/slider-img.png",
      cta: { text: "Contact Support", link: "/contact" }
    }
  ];

  useEffect(() => {
    // Update the display year in the footer
    const displayYear = document.getElementById('displayYear');
    if (displayYear) {
      displayYear.textContent = new Date().getFullYear();
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
  
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="/images/hero-bg.png" alt="" />
          </div>
        </div>

        <Header />

        <section className="slider_section">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h1>{slide.title}</h1>
                          <p>{slide.description}</p>
                          <div className="btn-box">
                            <Link to={slide.cta.link} className="btn1">
                              {slide.cta.text}
                              <i className="fas fa-arrow-right ms-2"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="img-box">
                          <img src={slide.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <ol className="carousel-indicators">
              {slides.map((_, index) => (
                <li
                  key={index}
                  className={index === currentSlide ? 'active' : ''}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </ol>
            
            <button className="carousel-control-prev" onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}>
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}>
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </section>
      </div>
      
      <section className="trusted_by_section">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="container">
          <div className="heading_container">
            <h2>We empower builders 
               <span>  for innovation</span></h2>
            <p>
             Our deep care for our people and customers allows us to achieve substantial results with small teams and fosters creativity at the edge of what's possible.
            </p>
          </div>
          <h3>Trusted By</h3>
          <div className="companies_circle">
            <div className="company_logo">
              <img src="/images/companies/aws.png" alt="AWS" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/google-cloud.png" alt="Google Cloud" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/azure.png" alt="Microsoft Azure" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/kubernetes.png" alt="Kubernetes" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/docker.png" alt="Docker" />
            </div>
            <div className="company_logo">
              <img src="/images/companies/github.png" alt="GitHub" />
            </div>
          </div>
        </div>
      </section>

      <section className="service_section">
        <div className="service_container">
          <div className="container">
            <div className="heading_container">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                We provide comprehensive cloud and DevOps solutions to help your business thrive in the digital age. Our services are designed to enhance efficiency, reduce costs, and drive innovation.
              </p>
            </div>
            <div className="row">
              {[
                {
                  icon: "fa-cloud",
                  title: "Cloud Infrastructure",
                  description: "Scalable and secure cloud solutions tailored to your business needs."
                },
                {
                  icon: "fa-code",
                  title: "DevOps Services",
                  description: "End-to-end DevOps solutions including CI/CD pipelines, containerization, and infrastructure as code to accelerate your development process."
                },
                {
                  icon: "fa-shield-alt",
                  title: "Cloud Security",
                  description: "Comprehensive security solutions to protect your cloud infrastructure. We ensure your data and applications are safe and compliant."
                }
              ].map((service, index) => (
                <div className="col-md-4" key={index}>
                  <div className="box" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="img-box">
                      <i className={`fa ${service.icon}`} aria-hidden="true"></i>
                    </div>
                    <div className="detail-box">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                      <Link to="/services" className="read-more">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
     
      

      {/* Contact Section */}
      <section className="contact_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact_content">
                <h2>Ready to Get Started?</h2>
                <p>Have a project in mind? Let's discuss how we can help bring your vision to life. Our team is ready to assist you with innovative solutions and expert guidance.</p>
                <div className="contact_features">
                  <div className="feature_item">
                    <i className="fas fa-check-circle"></i>
                    <span>24/7 Support Available</span>
                  </div>
                  <div className="feature_item">
                    <i className="fas fa-check-circle"></i>
                    <span>Free Consultation</span>
                  </div>
                  <div className="feature_item">
                    <i className="fas fa-check-circle"></i>
                    <span>Custom Solutions</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact_cta">
                <h3>Let's Start Your Project</h3>
                <p>Get in touch with us today and take the first step towards your digital success.</p>
                <Link to="/contact#contact-form" className="btn btn-primary btn-lg">
                  Contact Us Now
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;