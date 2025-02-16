import React from 'react'
import LaptopImage from "../images/laptop_1.jpg";
import {Link} from "react-router-dom";
import Gaming_laptop from "../images/gaming.avif";
import business_laptop from '../images/business.jpg';
import student_laptop from "../images/student.jpg"
import { FaShippingFast, FaLaptop, FaUsers, FaEnvelope } from 'react-icons/fa';
export default function HomePage() {
  return (
    <section className="home static h-[100vh]">
      <div className="absolute  bottom-[30px] left-[40%]  text-center">
        <h1 className="text-white">Best Selling Laptop Platform</h1>
        <h2 className="text-white">Find your best products with ease and at affordable prices</h2>
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
      
      
      
      {/* Footer */}

    </section>
  )
}
