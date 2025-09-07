import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const navigation = [
    { name: "Our Model", href: "/our-model" },
    { 
      name: "Solutions", 
      href: "/dedicated-team", 
      megamenu: {
        businessNeed: [
          { 
            name: "Dedicated Development Team", 
            href: "/dedicated-team",
            description: "Build your development team in Bangalore with elite engineers",
            icon: "🚀"
          },
          { 
            name: "Development Team Extension", 
            href: "/team-extension",
            description: "Extend your software delivery capacity with an integrated team",
            icon: "👥"
          },
          { 
            name: "Offshore Development Centre", 
            href: "/offshore-centre",
            description: "Scale your development operations at speed with a captive centre",
            icon: "🏢"
          }
        ],
        industry: [
          { 
            name: "Financial Software Development", 
            href: "/financial-software",
            description: "Scale your FinTech company with a dedicated tech team in India's tech capital",
            icon: "🏛️"
          },
          { 
            name: "Retail & Ecommerce Software Development", 
            href: "/retail-ecommerce",
            description: "Deliver exceptional online and offline retail experiences with a dedicated team",
            icon: "🛒"
          },
          { 
            name: "MarTech Software Development", 
            href: "/martech",
            description: "Enhance your digital marketing solutions with expert MarTech developers",
            icon: "📢"
          }
        ]
      }
    },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/news", submenu: [
      { name: "News & Media", href: "/news" },
      { name: "FAQ", href: "/faq" }
    ]},
    { name: "Company", href: "/about", submenu: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/leadership" }
    ]},
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h3 font-bold">
              H2
            </div>
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
                {item.megamenu && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="grid grid-cols-2 gap-0">
                      {/* Left Column - By Business Need */}
                      <div className="p-6 border-r border-border">
                        <div className="h6 uppercase tracking-wider mb-4">
                          BY BUSINESS NEED
                        </div>
                        <div className="space-y-1">
                          {item.megamenu.businessNeed.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.href}
                              className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                            >
                              <div className="w-8 h-8 bg-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-sm">{subitem.icon}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="button-text group-hover/item:text-turquoise transition-colors">
                                  {subitem.name}
                                </div>
                                <div className="caption mt-1 leading-relaxed">
                                  {subitem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Column - By Industry */}
                      <div className="p-6">
                        <div className="h6 uppercase tracking-wider mb-4">
                          BY INDUSTRY
                        </div>
                        <div className="space-y-1">
                          {item.megamenu.industry.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.href}
                              className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                            >
                              <div className="w-8 h-8 bg-yellow/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-sm">{subitem.icon}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="button-text group-hover/item:text-yellow-foreground transition-colors">
                                  {subitem.name}
                                </div>
                                <div className="caption mt-1 leading-relaxed">
                                  {subitem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {item.submenu && !item.megamenu && (
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