import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import heroTeam from "@/assets/hero-team.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import diverseTeam from "@/assets/diverse-team.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import developersCoding from "@/assets/developers-coding.jpg";
const Index = () => {
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        </div>
      </section>

      {/* European and Indian Leadership */}
      

      {/* Powered by People */}
      

      {/* We'll help you section */}
      <section className="py-16">
        
      </section>

      {/* Case Studies */}
      

      {/* Testimonial */}
      

      {/* Knowledge Base */}
      

      <ContactSection />
    </div>;
};
export default Index;