import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
              <h1 className="h1 mb-8">Proven Agile Acceleration and Delivery</h1>
              <p className="body-text text-lg mb-12">For CTOS, CDOS, Product portfolio owners & PMOS under pressure to perform and deliver change and transformation initiatives.
                <br /><br />We help firms beat the odds, accelerate initiatives delivery across their product and market portfolios, recover struggling projects, and build teams that deliver sustainable value, so your success continues long after we're gone.</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-medium px-8 py-4 text-base" asChild>
                  <Link to="/our-model">OUR APPROACH</Link>
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
            <h2 className="h2 mb-8">Our Offerings</h2>
            <p className="body-text text-lg max-w-3xl mx-auto">Whether you're preparing to launch or navigating the path to business-as-usual (BAU), we provide the strategic guidance and hands-on support needed to build momentum, create structure, and drive success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center">
              <h3 className="h4 mb-4">Portfolio Development</h3>
              <p className="body-text">Successfully develop and execute your change or transformation roadmap and delivery plan with Agile practices</p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="h4 mb-4">Product Recovery</h3>
              <p className="body-text">Turn around struggling initiatives and get your products back on track.</p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="h4 mb-4">Agile Coaching</h3>
              <p className="body-text">Build sustainable agile practices and high-performing teams that continue to deliver sustainable value.</p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="h4 mb-4">Portfolio Operations</h3>
              <p className="body-text">Streamline workflows, initiatives delivery, and implement scalable processes—ensuring teams have the right tools, insights, and frameworks to drive efficiency and growth.</p>
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
              <h2 className="h2 mb-8">Innovative and comprehensive agile transformation consulting and services</h2>
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
      

      {/* CTA Section */}
      <section className="py-16 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h6 font-semibold tracking-wide mb-4">
                FROM 5 TO 100+ ENGINEERS
              </div>
              <h2 className="h2 mb-8">
                Set up a world-class tech team in Bangalore
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Tell us what you need</h3>
                    <p className="body-text">Fill in your details — your data is 100% confidential and secure</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Talk to our experts</h3>
                    <p className="body-text">One of our team members will contact you promptly for a brief discovery call</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Get a tailored proposal</h3>
                    <p className="body-text">We'll prepare a solution matched to your needs and timeline</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="mb-6">
                <div className="h6 font-semibold">
                  Let's talk
                </div>
              </div>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full name*" className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Business email*" className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                  <input type="tel" placeholder="Phone number*" className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <input type="text" placeholder="Company name*" className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <textarea placeholder="Message*" rows={4} className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"></textarea>
                
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3 rounded-full">
                  SEND NOW →
                </Button>
                
                <div className="caption flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>100% confidential</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>We sign NDAs</span>
                  </div>
                </div>
                
                <p className="caption">
                  To give you the content requested, we need to store and process your personal data. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;