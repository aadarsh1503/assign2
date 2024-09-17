import React from 'react';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineBank, AiOutlineCar } from 'react-icons/ai';
import { FaUtensils, FaPlane, FaTrophy, FaFilm } from 'react-icons/fa';

const Middle = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Diverse Experiences Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Diverse Experiences Across Several Industries
          </h2>
          <p className="mt-4 text-gray-600">
            To succeed in your business, you need a professional marketing strategy.
            Code Infosys can offer a business boost through tailor-made digital solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            {/* Industry Item */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <AiOutlineHome className="text-blue-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Real Estate</h3>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <FaTrophy className="text-yellow-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Sports</h3>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <FaPlane className="text-blue-400 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Travel</h3>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <FaFilm className="text-red-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Entertainment</h3>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <FaUtensils className="text-green-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Restaurant</h3>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <AiOutlineBank className="text-gray-700 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Banking & Finance</h3>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <AiOutlineShoppingCart className="text-purple-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Ecommerce & Retail</h3>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <AiOutlineCar className="text-orange-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Transport</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800">Our Portfolio</h2>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
      {/* Portfolio Image 1 */}
      <div className="flex justify-center">
        <img
          src="https://img.lovepik.com/photo/45015/7638.jpg_wh860.jpg"
          alt="Portfolio 1"
          className="h-40 w-full object-cover rounded-lg shadow-md"
        />
      </div>
      {/* Portfolio Image 2 */}
      <div className="flex justify-center">
        <img
          src="https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg"
          alt="Portfolio 2"
          className="h-40 w-full object-cover rounded-lg shadow-md"
        />
      </div>
      {/* Portfolio Image 3 */}
      <div className="flex justify-center">
        <img
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/how-to-make-an-online-portfolio.webp"
          alt="Portfolio 3"
          className="h-40 w-full object-cover rounded-lg shadow-md"
        />
      </div>
      {/* Portfolio Image 4 */}
      <div className="flex justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZWQlo8v2szeR55CNOTMHZHTirPtsHEU2Qg&s"
          alt="Portfolio 4"
          className="h-40 w-full object-cover rounded-lg shadow-md"
        />
      </div>
      {/* Portfolio Image 5 */}
      <div className="flex justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0C8d2mySddLzZreWOHLtP4OkMI-Ec7ngow&s"
          alt="Portfolio 5"
          className="h-40 w-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default Middle;
