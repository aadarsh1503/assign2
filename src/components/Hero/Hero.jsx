import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineApple, AiOutlineAndroid, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import Icons
import { FaLaptopCode, FaSearchDollar, FaPaintBrush } from 'react-icons/fa'; // More Icons

const Hero = () => {
  const [navOpen, setNavOpen] = useState(false); // State for mobile menu toggle

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/020/190/476/original/infosys-logo-infosys-icon-free-free-vector.jpg" alt="Logo" className="h-14 w-14" />
            <span className="ml-2 font-bold text-xl">Code Infosys</span>
          </a>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#home" className="text-black font-bold hover:text-blue-500">Home</a>
            <a href="#services" className="text-black font-bold hover:text-blue-500">Services</a>
            <a href="#portfolio" className="text-black font-bold hover:text-blue-500">Portfolio</a>
            <a href="#case-studies" className="text-black font-bold hover:text-blue-500">Case Studies</a>
            <a href="#about" className="text-black font-bold hover:text-blue-500">About Us</a>
            <a href="#blog" className="text-black font-bold hover:text-blue-500">Blog</a>
            <a href="#jobs" className="text-black font-bold hover:text-blue-500">Apply For Job</a>
            <a href="#contact" className="text-white bg-blue-500 font-bold px-3 py-2 rounded-lg hover:bg-blue-600">Get an Estimation</a>
          </div>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden bg-white space-y-4 p-4">
            <a href="#home" className="block text-black font-bold hover:text-blue-500">Home</a>
            <a href="#services" className="block text-black font-bold hover:text-blue-500">Services</a>
            <a href="#portfolio" className="block text-black font-bold hover:text-blue-500">Portfolio</a>
            <a href="#case-studies" className="block text-black font-bold hover:text-blue-500">Case Studies</a>
            <a href="#about" className="block text-black font-bold hover:text-blue-500">About Us</a>
            <a href="#blog" className="block text-black font-bold hover:text-blue-500">Blog</a>
            <a href="#jobs" className="block text-black font-bold hover:text-blue-500">Apply For Job</a>
            <a href="#contact" className="block text-white bg-blue-500 font-bold px-3 py-2 rounded-lg hover:bg-blue-600">Get an Estimation</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-8 md:py-16">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
    
    {/* Left Content */}
    <div className="md:w-2/4">
      <p className="text-lg md:text-xl font-bold text-black">
        As a leading IT company based in Surat, Code Infosys empowers businesses with tailor-made digital solutions, 
        helping them gain better mileage, exposure, and reach to their target audience for improved ROI.
      </p>
      <p className="mt-4 text-lg md:text-xl">
        <span className="text-blue-500 font-bold">Team Code Infosys</span> is a 
        <span className="text-red-500 font-bold"> workaholic group of professionals</span> and 
        <span className="text-green-500 font-bold"> aware of the latest trends</span> in 
        <span className="text-blue-500 font-bold"> the market</span>.
      </p>
      <p className="mt-4 text-sm md:text-lg text-gray-700">
        Operating since 2014, we've crossed significant milestones in delivering creative and on-demand digital solutions to our clients. 
        We continue to expand and strive to reach the pinnacle of excellence in our professional niche.
      </p>
      <a href="#services" className="mt-6 inline-block bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 text-sm md:text-base">Explore Us</a>
    </div>

    {/* Right Content */}
    <div className="w-full md:w-1/2 p-3 mt-8 md:mt-0">
      <img 
        src="https://media.istockphoto.com/id/1250005831/vector/company-employees-planning-task-and-brainstorming.jpg?s=612x612&w=0&k=20&c=6U5s4fa8e4wMYSJyhEFyosUnYxEI8ehJ_sf4JFkpmE8=" 
        alt="Hero Image" 
        className="w-full rounded-lg"
      />
    </div>
  </div>
</section>
      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Services We Offer</h2>
          <p className="mt-4 text-gray-600">Versatile and customized digital services for boosting your business.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Service 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <AiOutlineAndroid className="text-blue-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Android App Development</h3>
              <p className="mt-4 text-gray-600">
                Comprehensive and cost-effective Android app development services.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <AiOutlineApple className="text-red-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">iOS App Development</h3>
              <p className="mt-4 text-gray-600">
                Professional iOS app development support, from concept to launch.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <FaSearchDollar className="text-green-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">SEO & Marketing</h3>
              <p className="mt-4 text-gray-600">
                Digital marketing solutions for maximizing your online presence.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <FaLaptopCode className="text-purple-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Web Development</h3>
              <p className="mt-4 text-gray-600">
                Build a state-of-the-art website with our expert web development services.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <FaPaintBrush className="text-blue-400 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Graphic Design</h3>
              <p className="mt-4 text-gray-600">
                Creative design solutions to make a lasting impression for your business.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <AiOutlineHome className="text-orange-500 text-6xl mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-800">Smart Home Solutions</h3>
              <p className="mt-4 text-gray-600">
                Intelligent home automation for convenience, security, and energy efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
