import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Leadership = () => {
  const leaders = [
    {
      name: "Emilien Corcuard",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg",
      bio: "Emilien brings over 15 years of experience in scaling technology companies across Europe and Asia. Prior to founding The Scalers, he led engineering teams at several successful startups and has a deep understanding of the challenges companies face when scaling their development capabilities."
    },
    {
      name: "Deepak Ramakrishnan",
      role: "CTO & Co-Founder", 
      image: "/placeholder.svg",
      bio: "Deepak is a seasoned technology leader with extensive experience in building and managing large-scale engineering teams. His expertise in distributed systems and offshore development models has been instrumental in creating The Scalers' unique approach to team building."
    },
    {
      name: "Ryan Choon",
      role: "VP Operations",
      image: "/placeholder.svg",
      bio: "Ryan oversees all operational aspects of The Scalers, ensuring smooth delivery and exceptional client experience. With his background in project management and business operations, he ensures that our teams deliver consistent, high-quality results."
    },
    {
      name: "Monica Antanacci",
      role: "VP People & Culture",
      image: "/placeholder.svg",
      bio: "Monica leads our talent acquisition and culture initiatives, focusing on creating an environment where engineers thrive. Her expertise in human resources and organizational psychology helps us build teams that are not just technically excellent but also culturally aligned."
    },
    {
      name: "Balasundar Pulnintasamy",
      role: "VP Engineering",
      image: "/placeholder.svg", 
      bio: "Balasundar brings deep technical expertise and leadership experience from his time at leading technology companies. He oversees our technical standards, mentoring programs, and ensures that our engineering practices meet global standards."
    },
    {
      name: "Adithi Kiran",
      role: "VP Talent Acquisition",
      image: "/placeholder.svg",
      bio: "Adithi leads our talent acquisition strategy, ensuring we identify and attract the best engineering talent in India. Her extensive network and deep understanding of the Indian tech landscape enable us to build exceptional teams for our clients."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-turquoise py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-turquoise-foreground mb-6">
              Leadership
            </h1>
            <p className="text-xl text-turquoise-foreground/80 max-w-3xl mx-auto">
              Come and say hello
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-foreground mb-4">4</div>
              <p className="text-xl font-semibold text-yellow-foreground mb-2">Minutes on call</p>
              <p className="text-yellow-foreground/80">Average response time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-foreground mb-4">52+</div>
              <p className="text-xl font-semibold text-yellow-foreground mb-2">Years of</p>
              <p className="text-yellow-foreground/80">Combined experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-foreground mb-4">4</div>
              <p className="text-xl font-semibold text-yellow-foreground mb-2">Cups of coffee</p>
              <p className="text-yellow-foreground/80">Per day per person</p>
            </div>
          </div>
        </div>
      </section>

      {/* The people that propel us forward */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The people that propel us forward
            </h2>
          </div>

          <div className="space-y-16">
            {leaders.map((leader, index) => (
              <div key={leader.name} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:col-start-9' : ''}`}>
                  <div className="relative">
                    <div className="w-full aspect-square bg-turquoise rounded-full overflow-hidden border-4 border-turquoise">
                      <img 
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-lg text-turquoise font-semibold mb-4">
                    {leader.role}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl text-navy-foreground/20 mb-6">"</div>
          <blockquote className="text-2xl lg:text-3xl font-medium mb-8">
            At The Scalers, we believe people build amazing companies, not the reverse. 
            Our job is to find the best people and help them build the future.
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="/placeholder.svg" 
              alt="CEO"
              className="w-16 h-16 rounded-full border-2 border-navy-foreground"
            />
            <div className="text-left">
              <div className="font-semibold">Emilien Corcuard</div>
              <div className="text-navy-foreground/80">CEO & Co-Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at The Scalers */}
      <section className="py-16 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-turquoise-foreground mb-4">
              Life at The Scalers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img 
              src="/placeholder.svg" 
              alt="Team collaboration" 
              className="w-full h-64 object-cover rounded-lg shadow-medium"
            />
            <img 
              src="/placeholder.svg" 
              alt="Office culture" 
              className="w-full h-64 object-cover rounded-lg shadow-medium"
            />
            <img 
              src="/placeholder.svg" 
              alt="Team building" 
              className="w-full h-64 object-cover rounded-lg shadow-medium"
            />
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-turquoise-foreground mb-4">
              About Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-turquoise">Our model</h4>
                <p className="text-sm text-muted-foreground">
                  We build dedicated teams that become true extensions of your company
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-turquoise text-turquoise hover:bg-turquoise hover:text-turquoise-foreground"
                  asChild
                >
                  <Link to="/our-model">LEARN MORE</Link>
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-yellow">Bangalore</h4>
                <p className="text-sm text-muted-foreground">
                  Located in India's Silicon Valley with access to world-class talent
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-yellow text-yellow hover:bg-yellow hover:text-yellow-foreground"
                  asChild
                >
                  <Link to="/about">EXPLORE</Link>
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-navy">Leadership</h4>
                <p className="text-sm text-muted-foreground">
                  Experienced leaders who understand both technology and business
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-navy text-navy hover:bg-navy hover:text-navy-foreground"
                  asChild
                >
                  <Link to="/leadership">MEET US</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk Form Section */}
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

      {/* Our Locations Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Our locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Global presence with local expertise to serve your development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Bangalore, India</h3>
              <p className="text-muted-foreground">Silicon Valley of Asia - Our main development hub</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🇬🇧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">London, UK</h3>
              <p className="text-muted-foreground">European headquarters and client services</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-turquoise-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <h3 className="text-xl font-bold mb-2">New York, USA</h3>
              <p className="text-muted-foreground">North American operations and partnerships</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to meet the team?
          </h2>
          <p className="text-xl mb-8 text-background/80">
            Connect with our leadership team to discuss your offshore development needs
          </p>
          <Button 
            size="lg"
            className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 font-semibold"
            asChild
          >
            <Link to="/contact">GET STARTED</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Leadership;