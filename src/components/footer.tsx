import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-white">Exclusive</h2>
          <h2 className="font-bold text-lg mb-4 text-white">Subscribe</h2>
          <p className="text-sm mb-4 text-white text-opacity-80">
            Get 10% off your first order
          </p>
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 pr-12 rounded-md bg-transparent border border-white text-white w-full placeholder-white placeholder-opacity-80 focus:outline-none"
            />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white hover:text-black hover:bg-white transition rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Support</h2>
          <address className="not-italic text-sm">
            111 Bijoy Sarani, Dhaka, <br /> DH 1515, Bangladesh. <br />
            <a href="mailto:exclusive@gmail.com" className="text-gray-400 underline">
              exclusive@gmail.com
            </a>
            <br />
            +88015-88888-9999
          </address>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">My Account</li>
            <li className="hover:underline cursor-pointer">Login / Register</li>
            <li className="hover:underline cursor-pointer">Cart</li>
            <li className="hover:underline cursor-pointer">Wishlist</li>
            <li className="hover:underline cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms Of Use</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Download App</h2>
          <p className="text-sm mb-4">Save $3 with App New User</p>
          <div className="space-y-2">
            <img
              src="/footer/app.png"
              alt="Google Play"
              className="w-36 h-auto mx-auto lg:mx-0"
            />
          </div>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Exclusive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
