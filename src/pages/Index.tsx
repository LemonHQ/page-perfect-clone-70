import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ContactSection from "@/components/ContactSection";
import heroTeam from "@/assets/hero-team.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import diverseTeam from "@/assets/diverse-team.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import developersCoding from "@/assets/developers-coding.jpg"; 

// Import article images
import agileTransformationImage from "@/assets/articles/agile-transformation-team.jpg";
import digitalTransformationImage from "@/assets/articles/digital-transformation.jpg";
import teamCollaborationArticleImage from "@/assets/articles/team-collaboration.jpg";
import portfolioManagementImage from "@/assets/articles/portfolio-management.jpg";
import agileCoachingImage from "@/assets/articles/agile-coaching.jpg";
import devopsIntegrationImage from "@/assets/articles/devops-integration.jpg";
const Index = () => {
  const latestInsights = [{
    id: 1,
    title: "The Future of Agile Transformation: Beyond Frameworks to Cultural Change",
    excerpt: "Explore how successful organizations are moving beyond traditional agile frameworks to create lasting cultural transformations.",
    author: "Sarah Chen",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Agile Transformation",
    image: agileTransformationImage,
    link: "/insights/agile-transformation"
  }, {
    id: 2,
    title: "5 Signs Your Digital Transformation Initiative Needs Course Correction",
    excerpt: "Learn to identify early warning signals that indicate your transformation program may be heading off track.",
    author: "Michael Rodriguez",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Digital Transformation",
    image: digitalTransformationImage,
    link: "/insights/digital-transformation-signs"
  }, {
    id: 3,
    title: "Building High-Performance Teams: Lessons from 100+ Agile Implementations",
    excerpt: "Key insights and proven strategies for creating teams that consistently deliver exceptional results.",
    author: "Emma Thompson",
    date: "2024-03-08",
    readTime: "10 min read",
    category: "Team Building",
    image: teamCollaborationArticleImage,
    link: "/insights/building-high-performance-teams"
  }, {
    id: 4,
    title: "Portfolio Management in the Age of Rapid Change",
    excerpt: "How modern portfolio management practices are evolving to handle increased uncertainty and accelerated delivery expectations.",
    author: "David Park",
    date: "2024-03-05",
    readTime: "7 min read",
    category: "Portfolio Management",
    image: portfolioManagementImage,
    link: "/insights/portfolio-management-rapid-change"
  }, {
    id: 5,
    title: "The ROI of Agile Coaching: Measuring Success Beyond Velocity",
    excerpt: "Discover comprehensive metrics and KPIs that demonstrate the true business impact of agile coaching initiatives.",
    author: "Lisa Anderson",
    date: "2024-03-02",
    readTime: "9 min read",
    category: "Agile Coaching",
    image: agileCoachingImage,
    link: "/insights/agile-coaching-roi"
  }, {
    id: 6,
    title: "DevOps Integration Strategies for Enterprise Organizations",
    excerpt: "Practical approaches for integrating DevOps practices into existing enterprise structures without disrupting operations.",
    author: "James Wilson",
    date: "2024-02-28",
    readTime: "12 min read",
    category: "DevOps",
    image: devopsIntegrationImage,
    link: "/insights/devops-integration-strategies"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1>Proven Agile Acceleration and Delivery</h1>
              <p className="body-text text-lg mb-12">For CTOS, CDOS, Product portfolio owners & PMOS under pressure to perform and deliver change and transformation initiatives.
                <br /><br />We help firms beat the odds, accelerate initiatives delivery across their product and market portfolios, recover struggling projects, and build teams that deliver sustainable value, so your success continues long after we're gone.</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-medium px-8 py-4 text-base" asChild>
                  <Link to="/our-approach">OUR APPROACH</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
                  <Link to="/contact">LET'S TALK</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={heroTeam} alt="Professional development team collaboration" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      

      {/* Our Offerings Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Our Offerings</h2>
            <p className="body-text text-lg max-w-3xl mx-auto">Whether you're preparing to launch or navigating the path to business-as-usual (BAU), we provide the strategic guidance and hands-on support needed to build momentum, create structure, and drive success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center flex flex-col">
              <h3 className="h4 mb-4">Portfolio Development</h3>
              <p className="body-text mb-6 flex-1">Successfully develop and execute your change or transformation roadmap and delivery plan with Agile practices</p>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white mt-auto" asChild>
                <Link to="/portfolio-development">Learn More</Link>
              </Button>
            </Card>
            <Card className="p-8 text-center flex flex-col">
              <h3 className="h4 mb-4">Product Recovery</h3>
              <p className="body-text mb-6 flex-1">Turn around struggling initiatives and get your products back on track.</p>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white mt-auto" asChild>
                <Link to="/product-recovery">Learn More</Link>
              </Button>
            </Card>
            <Card className="p-8 text-center flex flex-col">
              <h3 className="h4 mb-4">Agile Coaching</h3>
              <p className="body-text mb-6 flex-1">Build sustainable agile practices and high-performing teams that continue to deliver sustainable value.</p>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white mt-auto" asChild>
                <Link to="/agile-coaching">Learn More</Link>
              </Button>
            </Card>
            <Card className="p-8 text-center flex flex-col">
              <h3 className="h4 mb-4">Portfolio Operations</h3>
              <p className="body-text mb-6 flex-1">Streamline workflows, initiatives delivery, and implement scalable processes—ensuring teams have the right tools, insights, and frameworks to drive efficiency and growth.</p>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white mt-auto" asChild>
                <Link to="/portfolio-operations">Learn More</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Scale Your Tech Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6">
              <img src={teamCollaboration} alt="Team collaboration in modern office" className="rounded-lg w-full h-full object-cover" />
              <img src={officeWorkspace} alt="Modern office workspace environment" className="rounded-lg w-full h-full object-cover" />
              <img src={diverseTeam} alt="Diverse software engineering team" className="rounded-lg w-full h-full object-cover" />
              <img src={developersCoding} alt="Developers coding and collaborating" className="rounded-lg w-full h-full object-cover" />
            </div>
            <div>
              <div className="h6 tracking-wide mb-6">
                THE SMARTER WAY
              </div>
              <h2>Innovative and comprehensive agile transformation consulting and services</h2>
              <p className="body-text text-lg mb-12">
                Our agile experts help assess your readiness and maturity to develop innovative, comprehensive agile strategies and roadmaps. 
                <br /><br />
                We provide continuous coaching and support to enhance the capabilities of your agile teams, leveraging our experienced and certified agile practitioners.
                <br /><br />
                We collaborate with clients to strategically plan and implement long-term agile  programs. Additionally, we utilize a proven agile delivery model for numerous application development projects.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 font-medium px-8 py-4" asChild>
                <Link to="/our-model">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      

      {/* How We Work */}
      

      {/* Work with your offshore team */}
      

      {/* Statistics Section */}
      

      {/* Silicon Valley of Asia */}
      

      {/* European and Indian Leadership */}
      

      {/* Powered by People */}
      

      {/* We'll help you section */}
      

      {/* Case Studies */}
      

      {/* Testimonial */}
      

      {/* Latest Insights Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Latest Insights</h2>
            <p className="body-text text-lg max-w-3xl mx-auto">
              Stay ahead with our expert perspectives on agile transformation, digital innovation, and organizational change.
            </p>
          </div>
          
          <div className="relative">
            <Carousel opts={{
            align: "start",
            slidesToScroll: 1
          }} className="w-full">
              <CarouselContent className="-ml-4">
                {latestInsights.map(insight => <CarouselItem key={insight.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link to={insight.link}>
                      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full overflow-hidden">
                        <img src={insight.image} alt={insight.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline" className="text-xs">{insight.category}</Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {new Date(insight.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                            </div>
                          </div>
                          <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {insight.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                            {insight.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {insight.readTime}
                            </div>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/insights">View All Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>;
};
export default Index;