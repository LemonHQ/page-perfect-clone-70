import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "How Preqin gained a 450+ person global R&D centre",
      company: "Preqin",
      industry: "Financial Services",
      excerpt: "Learn how Preqin scaled their development team from 5 to 450+ engineers in Bangalore, transforming their global R&D capabilities.",
      image: "/placeholder.svg",
      readTime: "8 min read",
      date: "March 2024",
      results: ["450+ engineers hired", "3x faster product delivery", "60% cost savings"],
      tags: ["FinTech", "Scaling", "R&D"]
    },
    {
      id: 2,
      title: "Ykone's Journey: Building a Global MarTech Powerhouse",
      company: "Ykone",
      industry: "Marketing Technology",
      excerpt: "Discover how Ykone leveraged our MarTech expertise to build a world-class influencer marketing platform with a dedicated team in Bangalore.",
      image: "/placeholder.svg",
      readTime: "10 min read",
      date: "February 2024",
      results: ["50+ MarTech specialists", "40% faster time-to-market", "Global platform launch"],
      tags: ["MarTech", "Influencer Marketing", "Platform"]
    },
    {
      id: 3,
      title: "NextPoint's Retail Revolution: E-commerce at Scale",
      company: "NextPoint",
      industry: "Retail & E-commerce",
      excerpt: "How NextPoint transformed their e-commerce platform with a dedicated development team, achieving remarkable growth in online sales.",
      image: "/placeholder.svg",
      readTime: "6 min read",
      date: "January 2024",
      results: ["300% sales increase", "35+ developers", "Mobile-first platform"],
      tags: ["E-commerce", "Retail Tech", "Mobile"]
    },
    {
      id: 4,
      title: "Swiggy's Tech Transformation: Food Delivery Innovation",
      company: "Swiggy",
      industry: "Food Technology",
      excerpt: "Explore how Swiggy partnered with us to enhance their delivery platform and expand their engineering capabilities across multiple verticals.",
      image: "/placeholder.svg",
      readTime: "12 min read",
      date: "December 2023",
      results: ["100+ engineers", "Real-time delivery optimization", "Multi-city expansion"],
      tags: ["Food Tech", "Logistics", "Real-time Systems"]
    },
    {
      id: 5,
      title: "Microsoft's Innovation Hub: Cloud-First Development",
      company: "Microsoft",
      industry: "Cloud Technology",
      excerpt: "See how Microsoft leveraged our offshore capabilities to accelerate cloud product development and innovation in emerging markets.",
      image: "/placeholder.svg",
      readTime: "9 min read",
      date: "November 2023",
      results: ["200+ cloud engineers", "5 new products launched", "Enterprise solutions"],
      tags: ["Cloud", "Enterprise", "Innovation"]
    },
    {
      id: 6,
      title: "Flipkart's Growth Story: E-commerce Excellence",
      company: "Flipkart",
      industry: "E-commerce",
      excerpt: "Learn about Flipkart's journey in building a robust e-commerce platform with our dedicated engineering teams.",
      image: "/placeholder.svg",
      readTime: "11 min read",
      date: "October 2023",
      results: ["500+ engineers", "99.9% uptime", "Billion+ transactions"],
      tags: ["E-commerce", "Scale", "Performance"]
    }
  ];

  const industries = ["All", "Financial Services", "Marketing Technology", "Retail & E-commerce", "Food Technology", "Cloud Technology"];

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

      {/* CTA Section */}
      <section className="py-16 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to write your success story?
          </h2>
          <p className="text-xl mb-8 text-navy-foreground/80">
            Join the companies that have transformed their development capabilities with The Scalers
          </p>
          <Button 
            size="lg"
            className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 font-semibold"
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