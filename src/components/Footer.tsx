import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Locations Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-background mb-12">Our locations:</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-background rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏙️</span>
              </div>
              <h4 className="font-bold text-background text-lg mb-3">INDIA</h4>
              <p className="text-background font-medium">Bangalore</p>
              <p className="text-background/70 text-sm">43 Residency Road</p>
              <p className="text-background/70 text-sm">Bangalore, 560025</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-background rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h4 className="font-bold text-background text-lg mb-3">IRELAND</h4>
              <p className="text-background font-medium">Dublin</p>
              <p className="text-background/70 text-sm">13 Adelaide Road</p>
              <p className="text-background/70 text-sm">Dublin 2, D02 P950</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-background rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h4 className="font-bold text-background text-lg mb-3">UK</h4>
              <p className="text-background font-medium">London</p>
              <p className="text-background/70 text-sm">127 Cheapside</p>
              <p className="text-background/70 text-sm">London, EC2V 6BT</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-background rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🌉</span>
              </div>
              <h4 className="font-bold text-background text-lg mb-3">AUSTRALIA</h4>
              <p className="text-background font-medium">Sydney</p>
              <p className="text-background/70 text-sm">383 George St</p>
              <p className="text-background/70 text-sm">Sydney, NSW 2000</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="text-2xl font-bold text-background mb-6">
              THE SCALERS
            </div>
            <p className="text-sm text-background/70 mb-6 leading-relaxed">
              We scale your tech team with world-class engineers from Bangalore.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-background/70 hover:text-background transition-colors">LinkedIn</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">Twitter</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">Facebook</a>
            </div>
          </div>

          {/* What we do */}
          <div>
            <h3 className="font-medium mb-6">What we do</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/our-model" className="text-background/70 hover:text-background transition-colors">Our model overview</Link></li>
              <li><Link to="/dedicated-team" className="text-background/70 hover:text-background transition-colors">Dedicated teams</Link></li>
              <li><Link to="/team-extension" className="text-background/70 hover:text-background transition-colors">Team extension</Link></li>
              <li><Link to="/offshore-centre" className="text-background/70 hover:text-background transition-colors">Offshore centers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/case-studies" className="text-background/70 hover:text-background transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-background/70 hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/news" className="text-background/70 hover:text-background transition-colors">News</Link></li>
              <li><Link to="/faq" className="text-background/70 hover:text-background transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-background/70 hover:text-background transition-colors">About us</Link></li>
              <li><Link to="/leadership" className="text-background/70 hover:text-background transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-background transition-colors">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-16 pt-12 text-center">
          <p className="text-sm text-background/60">
            © 2024 The Scalers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;