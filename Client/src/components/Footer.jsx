import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Lost & Found Hub</h3>
            <p className="text-sm">
              Reuniting students with their lost belongings since 2023.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-sm hover:text-white transition-colors">
                  Report Lost Item
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-sm hover:text-white transition-colors">
                  Browse Found Items
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Campus Map
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiMail className="h-4 w-4 mr-2" />
                <span className="text-sm">help@lostfoundhub.edu</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="h-4 w-4 mr-2" />
                <span className="text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="h-4 w-4 mr-2 mt-1" />
                <span className="text-sm">Student Services Building, Room 101</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-center">
            &copy; 2025 Lost-Found Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
