import React, { useEffect } from 'react';
import './brands.css';
import Tfood from '../assets/Tfoods.png';
import Tsolution from '../assets/Tsolution.png';
import tsafeserve from '../assets/tsafeserve.png';
import tdigital from '../assets/tdigital.png';
import tenter from '../assets/tenter.png';
import thospital from '../assets/thospital.png';
import trality from '../assets/trality.png';
import tlogistic from '../assets/tlogistic.png';

import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';
import WOW from 'wow.js';

const brandsData = [
  {
    id: 1,
    name: 'TRAGARD FOODS',
    image: Tfood,
    description:
      'Innovative cloud kitchen brands and regional fusion cuisine designed for modern food lovers.',
    hoverText:
      ' Innovative cloud kitchen brands and regional fusion cuisine designed for modern food lovers.',
  },
  {
    id: 2,
    name: ' Tragard SafeServe',
    image: tsafeserve,
    description:
      ' Food safety, hygiene audits, and FSSAI compliance solutions for modern kitchens and caterers.',
    hoverText:
      'Empowering kitchens with cutting-edge food safety audits, hygiene checks, and FSSAI compliance.',
  },
  {
    id: 2,
    name: 'TRAGARD SOLUTIONS',
    image: Tsolution,
    description:
      'Business consulting, ERP solutions, and eCommerce services for startups and enterprises',
    hoverText:
      'Business consulting, ERP solutions, and eCommerce services for startups and enterprises.',
  },
  
  {
    id: 2,
    name: ' Tragard Digital',
    image: tdigital,
    description:
      'Performance marketing and SaaS-based digital tools to help brands grow and automate online',
    hoverText:
      'Boost your online presence with performance marketing and SaaS tools for seamless automation.',
  },
  {
    id: 2,
    name: ' Tragard Entertainment',
    image: tenter,
    description:
      'Production house for events, shows, and media content that blends creativity with purpose',
    hoverText:
      'Unleash creativity through captivating events, media productions, and storytelling excellence.',
  },
  {
    id: 2,
    name: ' Tragard Hospitality',
    image: thospital,
    description:
      ' Travel, tourism, and curated hospitality experiences that turn every journey into a memory.',
    hoverText:
      'Redefining travel and tourism with unique hospitality experiences that make every trip memorable.',
  },
  {
    id: 2,
    name: 'Tragard Realty',
    image: trality,
    description:
      ' Smart real estate development focused on sustainable, affordable, and community-first spaces.',
    hoverText:
      'Innovating real estate with sustainable, affordable, and community-focused developments.',
  },
  {
    id: 2,
    name: ' Tragard Logistics',
    image: tlogistic,
    description:
      ' Hyperlocal and B2B logistics solutions with a focus on fast, efficient, and reliable delivery',
    hoverText:
      'Ensuring efficient delivery with reliable, fast, and flexible hyperlocal and B2B logistics solutions.',
  },
];

const Brand = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true,
      });
      wow.init();
    }
  }, []);

  return (
    <>
      <div className="py-3 py-md-5 brand-bg">
        <p className="text-white text-center fs-6">
          HOME <span className="fs-5">&gt;</span> BRANDS
        </p>
        <h1 className="title text-white text-center pb-2">BRANDS</h1>
      </div>
      <section className=" px-md-5 px-4">
        <div className="text-center animate__animated animate__fadeInDown wow py-4">
          <h2 className="pt-3 pb-2 title fs-bolder">
            OUR<span className="zoom px-2">Brands</span>
          </h2>
          <h6 className="title ">EMPOWERING INNOVATION THROUGH TRUST AND EXCELLENCE.</h6>
          <p className='fw-bold text-muted '> TRAGARD brings together a dynamic group of brands across food, technology, logistics, real estate,
          hospitality, and  digital transformation - built with trust, innovation, and long-term impact.</p>
          <p className="line m-auto d-block my-1"></p>
        </div>
        <div className="row justify-content-center align-items-center  py-5 px-2  px-md-0 px-md-3">
          {brandsData.map((brand) => (
            <div key={brand.id} className="col-md-6 bbox col-lg-3 text-center pb-4">
              <div className=" p-lg-3 py-lg-5 py-5  p-md-5 outer animate__animated animate__zoomIn wow shadow">
                <img className="brandpic mx-auto" src={brand.image} alt={brand.name} />
                <h5>{brand.name}</h5>
                <p className=''>{brand.description}</p>
                <div className="hovcont">
                  <div className="arowlogo">
                    <FaArrowRight />
                  </div>
                  <div className="arow-btn p-3">
                    <p>{brand.hoverText}</p>
                    <button className="btn btn-light">Explore More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Brand;
