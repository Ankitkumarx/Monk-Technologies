import React, { useState } from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/contact.scss';

const Contact = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="contact_page">
        <div className="contact_hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Get in touch with us for any questions or inquiries</p>
          </div>
        </div>
      
        <section className="contact_section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact_info">
                  <h3>Get in Touch</h3>
                  <div className="info_items">
                    <div className="info_item">
                      <i className="fas fa-envelope"></i>
                      <div className="info_content">
                        <h5>Email Us</h5>
                        <p>support@monk-technologies.com</p>
                      </div>
                    </div>
                    <div className="info_item">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="info_content">
                        <h5>Our Locations</h5>
                        <p>Bengaluru | Hyderabad | Lagos | Nairobi | Delaware</p>
                      </div>
                    </div>
                    <div className="info_item">
                      <i className="fas fa-clock"></i>
                      <div className="info_content">
                        <h5>Business Hours</h5>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                {/* <h1>Contact us!</h1> */}
              {/* <div className="contact_form" id="contact-form"> */}
      {!formLoaded && <div className="form-loading">Loading contact form...</div>}
      <iframe 
        src="https://share-na2.hsforms.com/1uScDDy0zQUWqlMDfCNn0GA40l72z"
        width="100%"
        height="600"
        title="HubSpot Contact Form"
        className={`hubspot-form ${formLoaded ? 'visible' : ''}`}
        loading="lazy"
        onLoad={() => setFormLoaded(true)}
      />
    {/* </div> */}
                </div>
            </div>
          </div>
        </section>

        <section className="map_section">
          <div className="container">
            <div className="map_container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490448696!2d77.30125374670206!3d12.954459543640922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1748543184644!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;