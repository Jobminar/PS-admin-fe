import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../../assets/images/politicalsaradi.png";
import modi from '../../assets/images/modi.jpg'
import bjp from '../../assets/images/bjp.jpg'

import MapComponent from "../Maps/Map";
const Home = () => {
  // get reportedvoters length
  const storedReportedVotersLength = sessionStorage.getItem(
    "reportedvoterslength"
  );
  // get reported incidents length
  const reportedincidentlength = sessionStorage.getItem(
    "reportedincidentlength"
  );
  // getb karyakartha length
  const karyakarthaslength = sessionStorage.getItem("karyakarthalength");

  return (
    <div className="container mx-auto p-4 bg-gray-100 ">
      <div className="flex flex-col md:flex-row items-center justify-center py-8 space-y-4 md:space-y-0 md:space-x-8">
        {/* // Define the image of the hero section */}
        <div className="w-full md:w-1/2">
          <img
            src={modi}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          {/* <MapComponent /> */}
        </div>
        {/* // Define the content of the hero section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to Political Saradhi
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            This is a Political Saradhi an Application for Empowering Democracy,
            Monitoring the Pulse of the People - Where Every Voice Counts for
            People's Rule!.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Har Ghar Bijli, Har Ghar Paani
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Jhaadu Chalao, Beimaan Bhagao.
          </p>
          <button className="bg-primary-500 text-white px-4 py-2 rounded mt-4 hover:bg-primary-600">
            Learn More
          </button>
        </div>
      </div>
      {/* // Define the feature section of the component */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-t-2 border-b-2 border-gray-200">
        {/* // Define the first feature of the component */}
        <div className="card p-4 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">Canvas today</h3>
          <p className="text-lg text-gray-600 mt-2">
            No of Karyakarthas Working
          </p>
          <p className="text-lg text-gray-600 mt-2">{karyakarthaslength}</p>
        </div>
        {/* // Define the second feature of the component */}
        <div className="card p-4 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">
            Reported Voters Till Now
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            {storedReportedVotersLength}
          </p>
        </div>
        {/* // Define the third feature of the component */}
        <div className="card p-4 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">
            Reported Incedents Till Now
          </h3>
          <p className="text-lg text-gray-600 mt-2">{reportedincidentlength}</p>
        </div>
      </div>
      {/* // Define the testimonial section of the component */}
      <div className="flex flex-col md:flex-row items-center justify-center py-8 space-y-4 md:space-y-0 md:space-x-8">
        {/* // Define the image of the testimonial section */}
        <div className="w-full md:w-1/2">
          <img
            src={bjp}
            alt="Testimonial"
            className="w-full h-full object-cover"
          />
        </div>
        {/* // Define the content of the testimonial section */}
        <div className="w-full md:w-1/2">
          <h4 className="text-2xl font-bold text-gray-800">
            What our clients say
          </h4>
          <p className="text-lg text-gray-600 mt-4">
            "We are very happy with the web application that Political Saradhi
            created for us. It is fast, reliable, creative, and innovative. They
            are a friendly and supportive team who listen to our needs and
            deliver the best results. We highly recommend them to anyone who
            needs a web application."
          </p>
          <p className="text-lg text-gray-600 mt-4">
            "They are the best in the business. They follow the principle of
            "Achhe Din Aane Wale Hain", which means "Good days are coming".
          </p>
          <p className="text-lg font-bold text-gray-800 mt-4">
            - Narendra Modi, Prime Minister of India
          </p>
        </div>
      </div>
      {/* // Define the footer of the component */}
      <div className="flex justify-between items-center py-4 border-t-2 border-gray-200">
        {/* // Define the logo of the footer */}
        <div className="flex items-center space-x-2">
          <img src="logo.svg" alt="Logo" className="h-8 w-8" />
          <h5 className="text-xl font-bold text-primary-500">
            Political Saradhi
          </h5>
        </div>
        {/* // Define the social media links of the footer */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/Political Saradhi"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com/Political Saradhi"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/Political Saradhi"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/Political Saradhi"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.whatsapp.com/Political Saradhi"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
