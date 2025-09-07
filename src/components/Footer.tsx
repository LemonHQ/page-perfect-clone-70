import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Locations Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="h4 mb-12">Our locations:</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏙️</span>
              </div>
              <h4 className="h5 mb-3">INDIA</h4>
              <p className="h6">Bangalore</p>
              <p className="caption">43 Residency Road</p>
              <p className="caption">Bangalore, 560025</p>
            </div>
            
            
            
            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h4 className="h5 mb-3">UK</h4>
              <p className="h6">London</p>
              <p className="caption">127 Cheapside</p>
              <p className="caption">London, EC2V 6BT</p>
            </div>
            
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="h3 mb-6">
              H2
            </div>
            <p className="button-text mb-6 leading-relaxed">
              We scale your tech team with world-class engineers from Bangalore.
            </p>
            
          </div>

          {/* What we do */}
          <div>
            <h3 className="h6 mb-6">What we do</h3>
            <ul className="space-y-3 button-text">
              <li><Link to="/our-model" className="text-muted-foreground hover:text-foreground transition-colors">Our model overview</Link></li>
              <li><Link to="/dedicated-team" className="text-muted-foreground hover:text-foreground transition-colors">Dedicated teams</Link></li>
              <li><Link to="/team-extension" className="text-muted-foreground hover:text-foreground transition-colors">Team extension</Link></li>
              <li><Link to="/offshore-centre" className="text-muted-foreground hover:text-foreground transition-colors">Offshore centers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="h6 mb-6">Resources</h3>
            <ul className="space-y-3 button-text">
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/news" className="text-muted-foreground hover:text-foreground transition-colors">News</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="h6 mb-6">Company</h3>
            <ul className="space-y-3 button-text">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About us</Link></li>
              <li><Link to="/leadership" className="text-muted-foreground hover:text-foreground transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-12 text-center">
          <p className="button-text">© 2025 H2 IT Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;