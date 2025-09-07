import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Locations Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-black mb-12">Our locations:</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏙️</span>
              </div>
              <h4 className="font-bold text-black text-lg mb-3">INDIA</h4>
              <p className="text-black font-medium">Bangalore</p>
              <p className="text-gray-600 text-sm">43 Residency Road</p>
              <p className="text-gray-600 text-sm">Bangalore, 560025</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h4 className="font-bold text-black text-lg mb-3">IRELAND</h4>
              <p className="text-black font-medium">Dublin</p>
              <p className="text-gray-600 text-sm">13 Adelaide Road</p>
              <p className="text-gray-600 text-sm">Dublin 2, D02 P950</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h4 className="font-bold text-black text-lg mb-3">UK</h4>
              <p className="text-black font-medium">London</p>
              <p className="text-gray-600 text-sm">127 Cheapside</p>
              <p className="text-gray-600 text-sm">London, EC2V 6BT</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🌉</span>
              </div>
              <h4 className="font-bold text-black text-lg mb-3">AUSTRALIA</h4>
              <p className="text-black font-medium">Sydney</p>
              <p className="text-gray-600 text-sm">383 George St</p>
              <p className="text-gray-600 text-sm">Sydney, NSW 2000</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="text-2xl font-bold text-black mb-6">
              H2
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              We scale your tech team with world-class engineers from Bangalore.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Facebook</a>
            </div>
          </div>

          {/* What we do */}
          <div>
            <h3 className="font-medium mb-6 text-black">What we do</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/our-model" className="text-gray-600 hover:text-black transition-colors">Our model overview</Link></li>
              <li><Link to="/dedicated-team" className="text-gray-600 hover:text-black transition-colors">Dedicated teams</Link></li>
              <li><Link to="/team-extension" className="text-gray-600 hover:text-black transition-colors">Team extension</Link></li>
              <li><Link to="/offshore-centre" className="text-gray-600 hover:text-black transition-colors">Offshore centers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-6 text-black">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/case-studies" className="text-gray-600 hover:text-black transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-black transition-colors">Blog</Link></li>
              <li><Link to="/news" className="text-gray-600 hover:text-black transition-colors">News</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-black transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium mb-6 text-black">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors">About us</Link></li>
              <li><Link to="/leadership" className="text-gray-600 hover:text-black transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-12 text-center">
          <p className="text-sm text-gray-500">
            © 2024 H2. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;