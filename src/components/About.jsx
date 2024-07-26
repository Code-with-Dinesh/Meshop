import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import about from "../assets/Images/about.jpg";
const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              TECHNOLOGY AT MESHOP
            </h1>
            <p className="mb-8 leading-relaxed">
              Meshop technology drives path-breaking, customer-focused
              innovation that makes high quality products accessible to Indian
              shoppers, besides making the online shopping experience
              convenient, intuitive and seamless.The future of e-commerce is
              sustainable, equitable and inclusive. As we continue to drive
              changes across key areas of our operations, our commitment is
              embedded in our vision to create a positive impact, for the planet
              and communities.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={about}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
