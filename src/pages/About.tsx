import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-turquoise py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-turquoise-foreground mb-6">
                About Us
              </h1>
              <p className="text-xl text-turquoise-foreground/80 mb-8">
                Hello, 팀원들, Ciao다, Bonjour, We are The Scalers!
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-background rounded-lg p-4">
                  <div className="text-2xl font-bold text-turquoise mb-2">1</div>
                  <p className="text-sm text-muted-foreground">Office in India</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-2xl font-bold text-turquoise mb-2">47+</div>
                  <p className="text-sm text-muted-foreground">Countries served</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-2xl font-bold text-turquoise mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Years in business</p>
                </div>
              </div>
            </div>
            <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-64 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Global Presence Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We don't build software */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-yellow-foreground mb-6">
              We don't build software, we build teams who build software
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-yellow-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Team Building Philosophy</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-foreground mb-4">Why we're here</h3>
              <p className="text-lg text-yellow-foreground/80 mb-6">
                We believe that great software comes from great teams. Our mission is to connect 
                global companies with India's finest engineering talent, creating partnerships 
                that drive innovation and growth.
              </p>
              <p className="text-lg text-yellow-foreground/80">
                Founded with the vision of making world-class engineering talent accessible to 
                companies worldwide, we've helped over 130 organizations build their dream teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How The Scalers took off */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How The Scalers took off
            </h2>
          </div>

          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="w-24 h-24 bg-background rounded-lg border-2 border-turquoise flex items-center justify-center">
                  <span className="text-turquoise text-lg font-semibold">2021</span>
                </div>
              </div>
              <div className="lg:col-span-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Founding team" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-xl font-bold mb-3">The Beginning</h3>
                <p className="text-muted-foreground">
                  Started with a simple idea: connecting global companies with India's best engineering talent 
                  through a transparent, people-first approach.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-2 lg:order-3">
                <div className="w-24 h-24 bg-background rounded-lg border-2 border-yellow flex items-center justify-center">
                  <span className="text-yellow text-lg font-semibold">2022</span>
                </div>
              </div>
              <div className="lg:col-span-4 lg:order-2">
                <img 
                  src="/placeholder.svg" 
                  alt="First office" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-6 lg:order-1">
                <h3 className="text-xl font-bold mb-3">First Major Milestone</h3>
                <p className="text-muted-foreground">
                  Established our first dedicated development center and successfully delivered 
                  our first 10 teams to clients across different industries.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="w-24 h-24 bg-background rounded-lg border-2 border-navy flex items-center justify-center">
                  <span className="text-navy text-lg font-semibold">2023</span>
                </div>
              </div>
              <div className="lg:col-span-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Team expansion" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-xl font-bold mb-3">Scaling Success</h3>
                <p className="text-muted-foreground">
                  Reached 100+ successful team deployments and expanded to serve clients 
                  in 47+ countries worldwide.
                </p>
              </div>
            </div>

            {/* More timeline items */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-2 lg:order-3">
                <div className="w-24 h-24 bg-background rounded-lg border-2 border-turquoise flex items-center justify-center">
                  <span className="text-turquoise text-lg font-semibold">2024</span>
                </div>
              </div>
              <div className="lg:col-span-4 lg:order-2">
                <img 
                  src="/placeholder.svg" 
                  alt="Current operations" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-6 lg:order-1">
                <h3 className="text-xl font-bold mb-3">Today & Beyond</h3>
                <p className="text-muted-foreground">
                  Continuing to innovate in the offshore development space with 130+ teams delivered 
                  and a growing network of world-class engineering talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're people people */}
      <section className="py-16 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-turquoise-foreground mb-4">
              We're people people
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise-foreground text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                Open communication and honest partnerships in everything we do
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-foreground text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p className="text-muted-foreground">
                Empowering both our clients and engineers to achieve their full potential
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-foreground text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Building long-term relationships based on trust and mutual respect
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Behind the scenes */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Behind the scenes
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team combines deep technical expertise with a passion for building meaningful 
                connections between global companies and Indian engineering talent.
              </p>
              <Button 
                className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90"
                asChild
              >
                <Link to="/leadership">MEET OUR TEAM</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/placeholder.svg" 
                alt="Team at work" 
                className="rounded-lg shadow-medium"
              />
              <img 
                src="/placeholder.svg" 
                alt="Office environment" 
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our locations */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our locations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <img 
                src="/placeholder.svg" 
                alt="Bangalore office" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Bangalore</h3>
              <p className="text-muted-foreground">
                Our main development hub in India's Silicon Valley
              </p>
            </Card>

            <Card className="p-6 text-center">
              <img 
                src="/placeholder.svg" 
                alt="Global reach" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Global</h3>
              <p className="text-muted-foreground">
                Serving clients across 47+ countries worldwide
              </p>
            </Card>

            <Card className="p-6 text-center">
              <img 
                src="/placeholder.svg" 
                alt="Remote collaboration" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Remote</h3>
              <p className="text-muted-foreground">
                Seamless remote collaboration capabilities
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Set up a world-class tech team in Bangalore
          </h2>
          <p className="text-xl mb-8 text-navy-foreground/80">
            Join the growing number of companies that trust The Scalers with their offshore development needs
          </p>
          <Button 
            size="lg"
            className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 font-semibold"
            asChild
          >
            <Link to="/contact">LET'S TALK</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;