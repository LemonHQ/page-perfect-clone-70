import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "How Preqin scaled to a 450+ person R&D Centre in Bangalore",
      company: "Preqin",
      industry: "Financial Services",
      excerpt: "In early 2018, Preqin realised it needed to expand its engineering capacity to enhance its flagship product offerings. See how they built a world-class R&D centre with 450+ professionals in Bangalore.",
      image: "/placeholder.svg",
      readTime: "8 min read",
      date: "March 2024",
      results: ["120+ Engineers and 300+ Data Team", "Launched and enhanced flagship product", "5,400 m² dedicated office space"],
      tags: ["FinTech", "Scaling", "R&D"]
    },
    {
      id: 2,
      title: "MMC Finds Offshoring Model That Works",
      company: "My Muscle Chef",
      industry: "Food Technology",
      excerpt: "Over the last 10 years, My Muscle Chef has grown from a niche startup into a national food giant. They needed a cost-effective way to increase engineering output while maintaining quality.",
      image: "/placeholder.svg",
      readTime: "10 min read",
      date: "February 2024",
      results: ["70% reduction in tech debt", "Cost-effective scaling", "Enhanced customer experience"],
      tags: ["Food Tech", "Startup Growth", "Quality"]
    },
    {
      id: 3,
      title: "Integrated tech team helps PartyLite upgrade their ecommerce platform",
      company: "PartyLite",
      industry: "Retail & E-commerce",
      excerpt: "PartyLite wanted to take the digitalisation of their candle retail and ecommerce business in-house. See how they built an integrated team of expert engineers.",
      image: "/placeholder.svg",
      readTime: "6 min read",
      date: "January 2024",
      results: ["12-person team of expert engineers", "2X increase in dev productivity", "$700,000 per year saved on external vendor"],
      tags: ["E-commerce", "Retail Tech", "Cost Savings"]
    },
    {
      id: 4,
      title: "Offshore development team helps Smart&Geek to triple output",
      company: "Smart&Geek",
      industry: "Technology Services",
      excerpt: "Smart&Geek needed to scale their development capabilities rapidly. Discover how our dedicated offshore development team helped them achieve 3x output growth.",
      image: "/placeholder.svg",
      readTime: "12 min read",
      date: "December 2023",
      results: ["Triple development output", "Dedicated offshore team", "Enhanced technical capabilities"],
      tags: ["Tech Services", "Productivity", "Offshore"]
    },
    {
      id: 5,
      title: "FinTech Startup Scales from 5 to 100+ Engineers",
      company: "Confidential Client",
      industry: "Financial Technology",
      excerpt: "A rapidly growing FinTech startup needed to scale their engineering team quickly to meet market demands while maintaining regulatory compliance.",
      image: "/placeholder.svg",
      readTime: "9 min read",
      date: "November 2023",
      results: ["100+ engineers in 18 months", "Regulatory compliance maintained", "3x faster product delivery"],
      tags: ["FinTech", "Compliance", "Rapid Scaling"]
    },
    {
      id: 6,
      title: "Global E-commerce Platform: Multi-Region Expansion",
      company: "Confidential Client",
      industry: "E-commerce",
      excerpt: "A leading e-commerce platform leveraged our expertise to expand into multiple new markets while building robust, scalable technology infrastructure.",
      image: "/placeholder.svg",
      readTime: "11 min read",
      date: "October 2023",
      results: ["Multi-region platform deployment", "99.9% uptime achieved", "50+ country expansion"],
      tags: ["E-commerce", "Global Scale", "Infrastructure"]
    }
  ];

  const industries = ["All", "Financial Services", "Food Technology", "Retail & E-commerce", "Technology Services", "Financial Technology"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-turquoise via-navy to-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-turquoise-light rounded-full opacity-20"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-yellow rounded-full opacity-30"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-turquoise rounded-full opacity-15"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-turquoise rounded-full opacity-40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Real stories of transformation. See how global companies have scaled their development teams and achieved remarkable results with The Scalers.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-turquoise mb-2">130+</div>
                    <p className="text-white/80 text-sm">Success Stories</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow mb-2">39+</div>
                    <p className="text-white/80 text-sm">Countries</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-turquoise-light mb-2">10</div>
                    <p className="text-white/80 text-sm">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={industry === "All" ? "default" : "outline"}
                className={industry === "All" ? "bg-turquoise text-turquoise-foreground hover:bg-turquoise/90" : "border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground"}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-sm font-medium text-turquoise bg-turquoise/10 px-3 py-1 rounded-full">
              FEATURED CASE STUDY
            </span>
          </div>
          
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <img 
                  src={caseStudies[0].image}
                  alt={caseStudies[0].company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-transparent" />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-muted-foreground">{caseStudies[0].industry}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {caseStudies[0].readTime}
                  </span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {caseStudies[0].date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {caseStudies[0].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {caseStudies[0].excerpt}
                </p>
                <div className="space-y-2 mb-8">
                  <h3 className="font-semibold text-foreground">Key Results:</h3>
                  <ul className="space-y-1">
                    {caseStudies[0].results.map((result, index) => (
                      <li key={index} className="text-muted-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-turquoise rounded-full" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 group">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              All Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of success stories across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(1).map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48">
                  <img 
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 text-foreground px-2 py-1 rounded text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {study.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-turquoise transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm text-foreground">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-turquoise rounded-full" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-turquoise group-hover:text-turquoise-foreground group-hover:border-turquoise transition-all">
                    Read Case Study
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk Form */}
      <section className="py-16 bg-navy text-navy-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-navy-foreground/70 tracking-wide mb-4">
                FROM 5 TO 100+ ENGINEERS
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Set up a world-class tech team in Bangalore
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-turquoise-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-turquoise mb-2">Tell us what you need</h3>
                    <p className="text-navy-foreground/80">Fill in your details — your data is 100% confidential and secure</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-turquoise-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-turquoise mb-2">Talk to our experts</h3>
                    <p className="text-navy-foreground/80">One of our team members will contact you promptly for a brief discovery call</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-turquoise-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-turquoise mb-2">Get a tailored proposal</h3>
                    <p className="text-navy-foreground/80">We'll prepare a solution matched to your needs and timeline</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8">
              <div className="mb-6">
                <div className="bg-turquoise text-turquoise-foreground px-4 py-2 rounded-full inline-block font-semibold">
                  Let's talk
                </div>
              </div>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full name*" 
                  className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Business email*" 
                    className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone number*" 
                    className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Company name*" 
                  className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                />
                <textarea 
                  placeholder="Message*" 
                  rows={4}
                  className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                ></textarea>
                
                <Button 
                  type="submit"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-3 rounded-full"
                >
                  SEND NOW →
                </Button>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-turquoise rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>100% confidential</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-turquoise rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>We sign NDAs</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  To give you the content requested, we need to store and process your personal data. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Ready to write your success story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the companies that have transformed their development capabilities with The Scalers
          </p>
          <Button 
            size="lg"
            className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 font-semibold px-8 py-4"
            asChild
          >
            <Link to="/contact">START YOUR PROJECT</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;