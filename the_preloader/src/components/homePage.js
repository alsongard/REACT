import React from 'react'
import LaptopImage from "../images/laptop_1.jpg";
import {Link} from "react-router-dom";
import Gaming_laptop from "../images/gaming.avif";
import business_laptop from '../images/business.jpg';
import student_laptop from "../images/student.jpg"
import { FaShippingFast, FaLaptop, FaUsers, FaEnvelope } from 'react-icons/fa';
export default function HomePage() {
  return (
    <section className="home h-[100vh]">
      <div className="relative w-[300px]  top-[150px] left-[28px]  ">
        <h1 className="text-white text-[33px]">Best Selling <br/> Laptop Platform</h1>
        {/* <h2 className="text-white">Find your best products with ease and at affordable prices</h2> */}
      </div>
      {/* Featured Products */}
      <div className="pt-[650px] px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Laptops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="border p-4 rounded-lg shadow-lg">
            <img src={Gaming_laptop} alt="Gaming Laptop" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">Gaming Laptop</h3>
            <p className="text-gray-600">Powerful specs for immersive gaming.</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div>
          <div className="border p-4 rounded-lg shadow-lg">
            <img src={business_laptop} alt="Business Laptop" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">Business Laptop</h3>
            <p className="text-gray-600">Reliable and efficient for professionals.</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div>
          <div className="border p-4 rounded-lg shadow-lg">
            <img src={student_laptop} alt="Student Laptop" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">Student Laptop</h3>
            <p className="text-gray-600">Budget-friendly and perfect for studies.</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div>
        </div>
      </div>
      {/* style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?laptop')" }} */}
      <div className="mt-[80px]  py-[40px]  flex items-center justify-center text-white text-center px-4">
        <div className="bg-black bg-opacity-50 p-6 myImage rounded-lg">
          <h1 className="text-4xl font-bold">Find Your Perfect Laptop</h1>
          <p className="text-lg mt-2">High-performance laptops at unbeatable prices.</p>
          <Link to="/shop" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white text-lg font-semibold">Shop Now</Link>
        </div>
      </div>

      <div className="mt-[100px] mb-[50px] py-[50px]   bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <FaShippingFast className="text-blue-600 text-4xl" />
            <h3 className="text-xl font-semibold mt-4">Fast Shipping</h3>
            <p className="text-gray-600">Get your laptop delivered quickly and securely.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLaptop className="text-blue-600 text-4xl" />
            <h3 className="text-xl font-semibold mt-4">Premium Quality</h3>
            <p className="text-gray-600">We offer only the best brands and models.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-blue-600 text-4xl" />
            <h3 className="text-xl font-semibold mt-4">Customer Support</h3>
            <p className="text-gray-600">Our team is here to assist you 24/7.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
