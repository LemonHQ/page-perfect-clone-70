import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import H2Logo from "@/assets/H2-logo.jpg";

const Header = () => {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "Our Services", 
      href: "/portfolio-development", 
      submenu: [
        { name: "Portfolio Development", href: "/portfolio-development" },
        { name: "Product Recovery", href: "/product-recovery" },
        { name: "Portfolio Operations", href: "/portfolio-operations" },
        { name: "Agile Coaching", href: "/agile-coaching" }
      ]
    },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={H2Logo} 
              alt="H2 Think next" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`button-text transition-colors hover:text-foreground ${
                    location.pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-3 button-text hover:bg-muted hover:text-foreground transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            variant="default"
            className="bg-panel-medium text-background hover:bg-panel-medium/90 font-medium"
            asChild
          >
            <Link to="/contact">CONTACT US</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;