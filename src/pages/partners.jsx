import React, { useEffect } from 'react'
import './partners.css';
import 'animate.css';
import WOW from 'wow.js';
import amazon from '../assets/Amazon_Logo.png';
import flipkart from '../assets/Flipkart_Logo.png';
import shopify from '../assets/Shopify_Black_logo.png';
import HR1 from '../assets/HROne_Logo.jpg'; 
import amazonship from '../assets/amazonship.png';
import bonton from '../assets/bonton.png';
import ekart from '../assets/ekart.png';
import redbus from '../assets/redbus.png';
import mmtrip from '../assets/mmtrip.png';
import petpooja from '../assets/petpooja.png';
import zoho from '../assets/Zoho_Logo.png';
import shipway from '../assets/Shipway_Logo.png';
import razorpay from '../assets/Razorpay_Logo.png';
import Gbox from '../assets/Gallabox_Logo.png';  
import vyapar from '../assets/Vyapar_Logo.png';   
const Partners = () => {

  useEffect(() => {
    // Ensure WOW runs on the client side
    if (typeof window !== 'undefined') {
      const wow = new WOW({
        boxClass: 'wow', // default class name for wow elements
        animateClass: 'animate__animated', // default animate.css class
        offset: 0, // distance to start the animation
        mobile: true, // trigger animations on mobile
        live: true, // check for new elements on the page
      });
      wow.init();
    }
  }, []);

  const partnerdata = [
    {
        img: amazon,
        upcomming: true,
    },
    {
        img: flipkart,
    },
    {
        img: shopify,
    },
    {
        img: amazonship,
    },
    {
        img: ekart,
    },
    {
        img: shipway,
    },
    {
        img: bonton,
    },
    {
        img: mmtrip,
        upcomming: false,
    },
    {
        img: redbus,
    },
    {
        img: razorpay,
    },
    {
        img: Gbox,
    },
    {
        img: HR1,
    },
    {
        img: petpooja,
    },
    {
        img: vyapar,
    },
    {
        img: zoho,
        upcomming: true,
    }
];
  return (
    <>
     <div className='py-3 py-md-5 partner'>
            <p className='text-white text-center  fs-6'>HOME <span className='fs-5'>&gt;</span> PARTNERS</p>
                <h1 className='title text-white text-center pb-2'>PARTNERS</h1>
            </div>
    <section className='container partsec'>
      
    <div className='text-center animate__animated animate__fadeInDown wow py-4'>
    <p className='line m-auto d-block '></p>
                    <h2 className='pt-3  title fs-bolder'>OUR<span className='zoom px-2 '>PARTNERS</span> </h2>
                    <h6 className='text-center animate_ animated  animate__slideInDown wow fw-bold'>"STRONGER TOGETHER"</h6>
                   
                    </div>
                <div>
                  <div className="row px-md-3 px-3 pb-5">
                    {partnerdata.map((partner, index) => (
                      <div className="col-lg-4 animate__animated animate__zoomIn wow  partcover py-3 col-md-4 col-6 align-items-center d-flex justify-content-center " key={index}>
                        <img className='img-fluid animate__animated animate__zoomIn wow p-1  part' src={partner.img} alt="" />
                        {partner.upcomming && <div className='sticker'>&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; Upcoming &nbsp; &nbsp; &nbsp;</div>}
                      </div>
                    ))}
                  </div>
                </div>
                
      </section>
      <section className='container-fluid partform'>
     <div className="row">
      <div className="col-md-6 text-white p-md-5 p-4">
        <h1 className='fw-bolder py-2'>Partner with Tragard</h1>
        <h6 className='fw-3 pb-2'>Together, We Can Achieve Greatness</h6>
        <p className=' animate__animated animate__fadeInUp wow'>At Tragard, we believe in the power of collaboration. By working together with like-minded businesses, 
          creators, and organizations, we aim to create meaningful experiences, innovate new solutions, and
           grow collectively.</p>
           <h6 className='fw-3 pb-2'>Why Partner with Tragard?</h6>
           <ul className='formlist' type="none">
            <li className='animate__animated animate__fadeInLeft wow'><p>Innovative Vision : We thrive on bold ideas and fresh perspectives.</p></li>
            <li  className='animate__animated animate__fadeInLeft wow'><p>Mutual Growth : Our partnerships are built on trust and shared success.</p></li>
            <li  className='animate__animated animate__fadeInLeft wow'><p>Expanding Reach : Together, we amplify impact through our growing network.</p></li>
            <li  className='animate__animated animate__fadeInLeft wow'><p><span>Supportive Team :</span> We work closely with our partners to bring concepts to life.</p></li>
           </ul>
      </div>
      <div className="col-md-6 p-5"> <form>
        <div className="row">
          <div className="col-md-6 mb-3">
           
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
           
            <input
              type="text"
              className="form-control"
              id="companyName"
              placeholder="Enter your company or brand name"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
           
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="location (city, state, country)"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            
            <input
              type="url"
              className="form-control"
              id="website"
              placeholder="Enter your website or social page URL"
            />
          </div>
          <div className="col-md-6 mb-3">
            <select
              className="form-select"
              id="partnershipNature"
              required
            >
              <option className='opthead' value="" disabled selected hidden >Nature Of Partnership</option>
              <option value="Reseller">Reseller</option>
              <option value="Distribution">Distribution</option>
              <option value="Promotion/Marketing">
                Promotion/Marketing
              </option>
              <option value="Vendor/Supplier">Vendor/Supplier</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              id="productService"
              placeholder="Describe your product or service"
              required
            />
          </div>
          <div className="col-12 mb-3">
            <textarea
              className="form-control"
              id="partnershipReason"
              rows="4"
              placeholder="Why do you want to partner with TRAGARD?"
              required
            ></textarea>
          </div>
          <div class=" d-flex mt-2 text-white">
    <div><input className='me-2 align-content-start' type="checkbox" id="agree" name="agree" required /></div>
       <p> I agree to the <a className='text-warning' href="/policy" target="_blank"> Privacy Policy </a> and  
       <a className='text-warning' href="/terms" target="_blank">  Terms and Conditions</a>.</p>
</div>
        </div>
        <button type="submit" className="btn btn-primary">
        Submit Interest 
        </button>
      </form></div>
     </div>
        </section></>
  );
};

export default Partners;
