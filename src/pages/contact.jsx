import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './contact.css';
import map from '../assets/map.png';
import { BsTwitterX } from 'react-icons/bs';
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    Dropdown:'',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Our team will contact you soon.');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      subject: '',
    Dropdown:'',
      message: ''
    });
  };

  return (
    <>
<div className='py-3 py-md-5 contactus'>
            <p className='text-white text-center  fs-6'>HOME <span className='fs-5'>&gt;</span> CONTACT US</p>
                <h1 className='title text-white text-center pb-2'>CONTACT US</h1>
            </div>


    <section className="contact-container mx-0 mx-lg-5  row p-md-5">
      <div className="contact-info-section shadow text-center text-md-start col-lg-4   px-4 py-5">
        <h1>Launch & Grow Your Business 10X Faster</h1>
        <p className="subtitle">Let's discuss potential opportunities for your Business! Apply Now!</p>
        
        <div className="expertise-support">
          <h3>Expertise Support:</h3>
          <div className="contact-details">
            <p c><strong>Phone:</strong><a className='text-white fw-bold' href="tel:7550332202">&nbsp; +91 7550332202</a></p>
            <p><strong>Email:</strong>&nbsp; &nbsp; <a className='text-white fw-bold' href="mailto:support@tragard.com">support@tragard.com</a>  </p>
            <div className="social-links">
              <span><strong>Social Links:</strong></span>
              <div className="social-icons  d-flex gap-2   py-3 ms-md-0  ">
                <a target='blank' href="https://www.facebook.com/tragardcompanies" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a target='blank' href="https://www.instagram.com/tragardcompanies/" aria-label="Instagram">
                  <FaInstagram/>
                </a>
                <a target='blank' href="https://x.com/tragardgroup" aria-label="Twitter">
                  <BsTwitterX/>
                </a>
                <a target='blank' href="https://www.linkedin.com/company/tragard/" aria-label="LinkedIn">
                  <FaLinkedinIn/>
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section shadow col-lg-8  px-4 py-5 ">
        <h2 className='fw-bolder'>GET IN TOUCH</h2>
        <p className="form-subtitle">Fill This form, Our Expertise will reach you soon!</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="eg: 9876543210"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>
          
          <div className='form-row'>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          
          <div className="form-group">
              <label htmlFor="fullName">How did you here about us?</label>
              <select required id="Dropdown" value={formData.Dropdown}
                onChange={handleChange} name="Dropdown" className='form-select'>
                        <option value="" disabled>select</option>
                        <option value="Google">Google</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Referral">Referral</option>
                        <option value="Others">Others</option>
                      </select>
      
            </div>
          </div>
            <div className="form-group">
              <label htmlFor="fullName">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"

              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              required
            ></textarea>
          </div>
          <div class=" d-flex ">
    <div><input className='me-2 align-content-start' type="checkbox" id="agree" name="agree" required /></div>
       <p> I agree to the <a className='text-primary' href="/policy" target="_blank"> Privacy Policy </a> and  
       <a className='text-primary' href="/terms" target="_blank">  Terms and Conditions</a>.</p>
</div>
          <button type="submit" className="submit-btn mx-auto ">Send Message</button>
        </form>
      </div>
    </section>
    <section className='row mappp  px-lg-5 mx-0 mx-md-5'>
      <div className="col-md-8 col-12 p-md-0 p-2  shadow-md">
        <h1 className='text-center py-4 fs-bolder d-md-none d-block'>Our <span className='zoom'>Location</span></h1>
        <iframe

          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d985.3677542348521!2d76.94291975511526!3d11.040397741139893!3m2!1i1024!
2i768!4f13.1!3m3!1m2!1s0x3ba85895d8cd2999%3A0x19981e24c83c2c22!2sPRICOL%20COLONY%2C%20Koundampalayam%2C%20Coimbatore%2C%20Tamil%20Nadu%20641030!5e1!
3m2!1sen!2sin!4v1750658771426!5m2!1sen!2sin"
          className='w-100 rounded-4  maplink p-4 p-md-0 '
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
      </div>
      <div className="col-4 mapsec d-md-block d-none shadow ">
        <img className='w-75 mx-auto d-flex' src={map} alt="" />
      </div>
    </section>
    </>
  );
};

export default Contact;