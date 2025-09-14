import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Locations Section */}
        

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

          {/* Our Services */}
          <div>
            <h3 className="h6 mb-6">Our Services</h3>
            <ul className="space-y-3 button-text">
              <li><Link to="/portfolio-development" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio Development</Link></li>
              <li><Link to="/product-recovery" className="text-muted-foreground hover:text-foreground transition-colors">Product Recovery</Link></li>
              <li><Link to="/portfolio-operations" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio Operations</Link></li>
              <li><Link to="/agile-coaching" className="text-muted-foreground hover:text-foreground transition-colors">Agile Coaching</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="h6 mb-6">Company</h3>
            <ul className="space-y-3 button-text">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Empty column to maintain grid layout */}
          <div></div>
        </div>

        <div className="border-t border-border mt-16 pt-12 text-center">
          <p className="button-text">© 2025 H2 IT Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;