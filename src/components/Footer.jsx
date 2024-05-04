import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333] text-white">
      <div className="container mx-auto py-12 px-20 leading-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl mb-3 w-[45%] border-b-4 border-[#8C86AA] font-bold">Our Services</h4>
            <ul>
              <li><Link to="/web" className="hover:text-gray-500">Web development</Link></li>
              <li><Link to="/mobile" className="hover:text-gray-500">App development</Link></li>
              <li><Link to="/graphics" className="hover:text-gray-500">Graphic designing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-3 w-[45%] border-b-4 border-[#8C86AA] font-bold">Discover</h4>
            <ul>
              <li><Link to="/testimonials" className="hover:text-gray-500">Testimonials</Link></li>
              <li><Link to="/careers" className="hover:text-gray-500">Career at Quantix</Link></li>
              <li><Link to="/blogs" className="hover:text-gray-500">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-3 w-[45%] border-b-4 border-[#8C86AA] font-bold">Get help</h4>
            <ul>
              <li><a href="tel:+918925179168" className="hover:text-gray-500">Call: +91 89251 79168</a></li>
              <li><a href="mailto:srikanth.esa@quantixtecon.com" className="hover:text-gray-500">srikanth.esa@quantixtecon.com</a></li>
              <li><a href="mailto:contact@quantixtecon.com" className="hover:text-gray-500">contact@quantixtecon.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-3 w-[45%] border-b-4 border-[#8C86AA] font-bold">Follow us</h4>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <div className='flex flex-col mt-[40px]'>
              <h1 className='text-2xl font-[800] text-[#8C86AA]'>Quantix</h1>
              <h5 className='text-md'>Technology & Consulting Services, LLP</h5>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© {currentYear} Quantix. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
