import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const navigation = [
    { name: "Our Model", href: "/our-model" },
    { name: "Solutions", href: "/solutions", submenu: [
      { name: "Dedicated Development Team", href: "/dedicated-team" },
      { name: "Development Team Extension", href: "/team-extension" },
      { name: "Offshore Development Centre", href: "/offshore-centre" }
    ]},
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources", submenu: [
      { name: "News & Media", href: "/news" },
      { name: "FAQ", href: "/faq" }
    ]},
    { name: "Company", href: "/company", submenu: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/leadership" }
    ]},
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-background shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-navy text-navy-foreground px-3 py-1 rounded font-bold text-lg">
              THE SCALERS
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-turquoise ${
                    location.pathname === item.href ? 'text-turquoise' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-turquoise-light hover:text-turquoise-foreground transition-colors"
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
            className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 font-medium"
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