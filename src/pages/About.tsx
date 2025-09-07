import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
                About Us
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Hello, 팀원들, Ciao다, Bonjour, We are The Scalers!
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-foreground mb-2">1</div>
                  <p className="text-sm text-muted-foreground">Office in India</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-foreground mb-2">47+</div>
                  <p className="text-sm text-muted-foreground">Countries served</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-foreground mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Years in business</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-12 flex items-center justify-center">
              <div className="w-full h-64 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-medium">Global Presence Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We don't build software */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              We don't build software, we build teams who build software
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-background rounded-lg p-12 flex items-center justify-center">
              <div className="w-full h-48 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-medium">Team Building Philosophy</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Why we're here</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that great software comes from great teams. Our mission is to connect 
                global companies with India's finest engineering talent, creating partnerships 
                that drive innovation and growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with the vision of making world-class engineering talent accessible to 
                companies worldwide, we've helped over 130 organizations build their dream teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How The Scalers took off */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How The Scalers took off
            </h2>
          </div>

          <div className="space-y-16">
            {/* Timeline Item 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="w-24 h-24 bg-muted/50 rounded-lg border border-border flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">2021</span>
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
                <h3 className="text-xl font-bold mb-4">The Beginning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Started with a simple idea: connecting global companies with India's best engineering talent 
                  through a transparent, people-first approach.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-2 lg:order-3">
                <div className="w-24 h-24 bg-muted/50 rounded-lg border border-border flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">2022</span>
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
                <h3 className="text-xl font-bold mb-4">First Major Milestone</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Established our first dedicated development center and successfully delivered 
                  our first 10 teams to clients across different industries.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="w-24 h-24 bg-muted/50 rounded-lg border border-border flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">2023</span>
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
                <h3 className="text-xl font-bold mb-4">Scaling Success</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reached 100+ successful team deployments and expanded to serve clients 
                  in 47+ countries worldwide.
                </p>
              </div>
            </div>

            {/* More timeline items */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-2 lg:order-3">
                <div className="w-24 h-24 bg-muted/50 rounded-lg border border-border flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">2024</span>
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
                <h3 className="text-xl font-bold mb-4">Today & Beyond</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continuing to innovate in the offshore development space with 130+ teams delivered 
                  and a growing network of world-class engineering talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're people people */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We're people people
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-background text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Open communication and honest partnerships in everything we do
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-background text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering both our clients and engineers to achieve their full potential
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-background text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building long-term relationships based on trust and mutual respect
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Behind the scenes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                Behind the scenes
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Our team combines deep technical expertise with a passion for building meaningful 
                connections between global companies and Indian engineering talent.
              </p>
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4"
                asChild
              >
                <Link to="/leadership">MEET OUR TEAM</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/placeholder.svg" 
                alt="Team at work" 
                className="rounded-lg"
              />
              <img 
                src="/placeholder.svg" 
                alt="Office environment" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our locations */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our locations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-8 text-center">
              <img 
                src="/placeholder.svg" 
                alt="Bangalore office" 
                className="w-full h-32 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">Bangalore</h3>
              <p className="text-muted-foreground">
                Our main development hub in India's Silicon Valley
              </p>
            </Card>

            <Card className="p-8 text-center">
              <img 
                src="/placeholder.svg" 
                alt="Global reach" 
                className="w-full h-32 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">Global</h3>
              <p className="text-muted-foreground">
                Serving clients across 47+ countries worldwide
              </p>
            </Card>

            <Card className="p-8 text-center">
              <img 
                src="/placeholder.svg" 
                alt="Remote collaboration" 
                className="w-full h-32 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">Remote</h3>
              <p className="text-muted-foreground">
                Seamless remote collaboration capabilities
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Set up a world-class tech team in Bangalore
          </h2>
          <p className="text-xl mb-12 text-background/80 leading-relaxed">
            Join the growing number of companies that trust The Scalers with their offshore development needs
          </p>
          <Button 
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 font-medium px-8 py-4"
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