import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="bg-background text-navy px-3 py-1 rounded font-bold text-lg mb-4 inline-block">
              THE SCALERS
            </div>
            <p className="text-sm text-navy-foreground/80 mb-4">
              We scale your tech team with world-class engineers from Bangalore.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy-foreground/80 hover:text-navy-foreground">LinkedIn</a>
              <a href="#" className="text-navy-foreground/80 hover:text-navy-foreground">Twitter</a>
              <a href="#" className="text-navy-foreground/80 hover:text-navy-foreground">Facebook</a>
            </div>
          </div>

          {/* What we do */}
          <div>
            <h3 className="font-semibold mb-4">What we do</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dedicated-team" className="text-navy-foreground/80 hover:text-navy-foreground">Our model overview</Link></li>
              <li><Link to="/team-extension" className="text-navy-foreground/80 hover:text-navy-foreground">We build your team</Link></li>
              <li><Link to="/offshore-centre" className="text-navy-foreground/80 hover:text-navy-foreground">We scale without limits</Link></li>
              <li><Link to="/about" className="text-navy-foreground/80 hover:text-navy-foreground">You scale without limits</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/case-studies" className="text-navy-foreground/80 hover:text-navy-foreground">Case Studies</Link></li>
              <li><Link to="/blog" className="text-navy-foreground/80 hover:text-navy-foreground">Blog</Link></li>
              <li><Link to="/news" className="text-navy-foreground/80 hover:text-navy-foreground">News</Link></li>
              <li><Link to="/faq" className="text-navy-foreground/80 hover:text-navy-foreground">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-navy-foreground/80 hover:text-navy-foreground">About us</Link></li>
              <li><Link to="/leadership" className="text-navy-foreground/80 hover:text-navy-foreground">Leadership</Link></li>
              <li><Link to="/contact" className="text-navy-foreground/80 hover:text-navy-foreground">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-navy-foreground/60">
            © 2024 The Scalers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;