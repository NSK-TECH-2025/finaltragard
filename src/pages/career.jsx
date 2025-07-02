import React, { useState, useEffect } from 'react'
import './career.css';
import Cimg from '../assets/career.png';
import { MdOutlineTimer } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { AiOutlineStock } from "react-icons/ai";
import { GiPathDistance } from "react-icons/gi";
import 'animate.css';
import WOW from 'wow.js';



const benefits = [
  {
    icon: <RiTeamFill style={{ fontSize: '35px', color: '#0d6efd' }} />,
    title: 'Amazing Team',
    description: 'Join skilled professionals passionate about teamwork, innovation, and achieving goals.',
  },
  {
    icon: <ImOffice style={{ fontSize: '35px', color: '#0d6efd' }} />,
    title: 'Inspiring Work Environment',
    description: 'Work in a modern, creative space designed to inspire collaboration daily.',
  },
  {
    icon: <MdOutlineTimer style={{ fontSize: '35px', color: '#0d6efd' }} />,
    title: 'Flexible Working Hours',
    description: 'Balance work and life with hybrid schedules and adaptable hours.',
  },
  {
    icon: <FaAward style={{ fontSize: '35px', color: '#0d6efd' }} />,
    title: 'Recognition & Rewards',
    description: 'Celebrate success with bonuses, awards, and exciting career growth opportunities.',
  },
  {
    icon: <AiOutlineStock style={{ fontSize: '35px', color: '#0d6efd' }} />,
    title: 'Learning & Growth',
    description: 'Advance your career with workshops, certifications, and personalized development programs.',
  },
  {
    icon: <GiPathDistance style={{ fontSize: '35px', color: '#0d6efd' }} />,
    title: 'Career Path Opportunities',
    description: 'Follow structured career paths to grow into leadership and senior roles.',
  },
];

const Career = () => {

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

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <section className="c1">
        <div className="row">
          <div className="col-md-6  animate__animated animate__backInLeft  wow text-white p-md-5  ">
            <div className="px-md-4  ccbox">
              <p className="join">Build Your Future with </p>
              <h1 className="head pb-md-2">TRAGARD</h1>
              <p className="desc ">
                Join an inspiring workplace where innovation, collaboration, and growth are at the core of everything we do. Your career is more than just a job – it's a journey to unleash your potential.
              </p>
              <button onClick={handleButtonClick} className="btn btn-outline-light my-md-3 my-4 rounded-pill btn-lg">
                Discover Opportunities
              </button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={Cimg} className="w-75 animate__animated animate__fadeInRight wow  py-md-5 px-md-4  my-4 " alt="Career" />
          </div>
        </div>
      </section>

      <section className="c2">
        <div className="row">
          <div className="col-lg-6 benifits pt-md-3 d-none d-md-block">
            <div className="row px-md-5 px-4  mx-md-5 mt-md-5 pt-5 pt-md-5 ">
              {benefits.map((benefit, index) => (
                <div className="col-6 text-md-center text-lg-start p-md-3 py-2" key={index}>
                  <div className='animate__animated animate__zoomIn wow'>
                    <div className='pb-3 '>{benefit.icon}</div> {/* Render icon directly */}
                    <h6 className='text-bolder'>{benefit.title}</h6>
                    <p className=' text-muted'>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 life px-lg-4 pt-5 mt-5 text-md-start text-center">
            <div className="px-md-5 mx-md-5 mx-3 ">
              <h3>
                Your Life At  <br /><span className="text-tragard ">Tragard</span>
              </h3>
              <p className='pt-md-0 pt-3 animate__animated animate__fadeInUp wow'>
                Whether you’re a student exploring opportunities, a creator
                shaping ideas, a developer pushing boundaries, or a business
                enthusiast eager to make an impact — TRAGARD welcomes you to a
                thriving community where ambitions grow.
              </p>
              <p className='animate__animated animate__fadeInUp wow'>
                Join our Startup Community to exchange ideas, apply for an
                internship to gain hands-on experience, or collaborate on a
                brand to bring creative projects to life. At TRAGARD, your
                potential meets endless possibilities.
              </p>
              <div className='my-4 d-md-flex d-block'>
                <button onClick={handleButtonClick} className="btn   btn-primary p-2 mt-3 mt-md-0  ms-lg-3 rounded-pill btn-responsive">
                  Apply For Internship
                </button>&nbsp;
                <button onClick={handleButtonClick} className="btn   btn-primary p-2 mt-3 mt-md-0  ms-lg-3 rounded-pill btn-responsive">
                  Join Our Network
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 benifits pt-md-3 d-block d-md-none text-center">
            <div className="row px-md-5 px-4  mx-md-5 mt-md-5 pt-5 pt-md-5 ">
              <p className='fs-5 pb-4 fw-bold'>"Empowering Your Career Journey"</p>
              {benefits.map((benefit, index) => (
                <div className="col-6 py-2 animate__animated animate__oomIn wow" key={index}>
                  <div className='pb-3'>{benefit.icon}</div> {/* Render icon directly */}
                  <h6 className='fw-bolder'>{benefit.title}</h6>
                  <p className=' text-muted'>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {showForm && (
        <>
          <div className="modal rounded-0 d-block">
            <div className="m-4 m-md-5">
              <div className="modal-content">
                <div className="modal-body p-4">
                  <form>
                    <div className='d-flex justify-content-between'><h2 className='text-center text-tragard'>JOIN WITH US</h2>
                      <button className='btn  clbtn1 fs-2 fw-bold text-black  ' onClick={handleClose}>X</button></div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="">Full Name <span>&#42;</span></label>
                        <input className='form-control' type="text" placeholder='First Name' required />
                        <label htmlFor="">Phone Number <span>&#42;</span></label>
                        <input className='form-control' type="number" placeholder='Phone Number' required />
                        <label htmlFor="">Role/Position Interested In<span>&#42;</span></label>
                        <input className='form-control' type="text" placeholder='Role/Position Interested In' required />
                        <label htmlFor="">Upload resume ( pdf & docs only ) <span>&#42;</span></label><br />
                        <input type="file" placeholder='upload Resume' accept=".pdf, .doc, .docx" required /><br />
                        <div className='d-md-block d-none'>
                          <label htmlFor="">Why do you want to work with TRAGARD? <span>&#42;</span></label>
                          <textarea className='form-control txtarea ' rows={3} type="text-area" placeholder='Message' required />
                        </div>

                      </div>
                      <div className="col-md-6">
                        <label htmlFor="">Email Address <span>&#42;</span></label>
                        <input className='form-control' type="email" placeholder='Email Address' required />
                        <label htmlFor="">Applying for<span>&#42;</span></label>
                        <select className='form-select' name="" id="" required>
                          <option value="" disabled>Applying For</option>
                          <option value="">Internship</option>
                          <option value="">Full-time</option>
                          <option value="">Part-time</option>
                          <option value="">Freelance</option>
                        </select>
                        <label htmlFor="">Location( City, State )<span>&#42;</span></label>
                        <input className='form-control' type="text" placeholder='Location' required />
                        <label htmlFor="">LinkedIn Profile<span>   (optional)</span></label>
                        <input className='form-control' type="text" placeholder='LinkedIn Profile' />
                        <label htmlFor="">Portfolio/Website<span>   (optional)</span></label>
                        <input className='form-control' type="url" placeholder='Portfolio/Website' />
                        <div className='d-md-none d-block'>
                          <label htmlFor="">Why do you want to work with TRAGARD? <span>&#42;</span></label>
                          <textarea className='form-control txtarea ' rows={3} type="text-area" placeholder='Message' required />
                        </div>
                      </div>
                    </div>
                    <div class=" d-flex mt-2 ">
                      <div><input className='me-2 align-content-start' type="checkbox" id="agree" name="agree" required /></div>
                      <p> I agree to the <a className='text-primary' href="/policy" target="_blank"> Privacy Policy </a> and
                        <a className='text-primary' href="/terms" target="_blank">  Terms and Conditions</a>.</p>
                    </div>
                    <button className='btn btn-primary px-4 my-4' type='submit'>Apply Now </button>
                  </form>
                </div>
              </div>
            </div>
          </div></>
      )}
    </>
  );
};

export default Career;
