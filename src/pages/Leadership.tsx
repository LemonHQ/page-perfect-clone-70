import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Leadership = () => {
  const leaders = [
    {
      name: "Emilien Corcuard",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg",
      bio: "Emilien brings over 15 years of experience in scaling technology companies across Europe and Asia. Prior to founding H2, he led engineering teams at several successful startups and has a deep understanding of the challenges companies face when scaling their development capabilities."
    },
    {
      name: "Deepak Ramakrishnan",
      role: "CTO & Co-Founder", 
      image: "/placeholder.svg",
      bio: "Deepak is a seasoned technology leader with extensive experience in building and managing large-scale engineering teams. His expertise in distributed systems and offshore development models has been instrumental in creating H2's unique approach to team building."
    },
    {
      name: "Ryan Choon",
      role: "VP Operations",
      image: "/placeholder.svg",
      bio: "Ryan oversees all operational aspects of H2, ensuring smooth delivery and exceptional client experience. With his background in project management and business operations, he ensures that our teams deliver consistent, high-quality results."
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
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Leadership
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the team that steers H2
            </p>
          </div>
        </div>
      </section>

      {/* Come and say hello */}
      <section className="py-24 bg-gradient-to-br from-yellow via-yellow to-yellow-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-yellow to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold text-navy mb-8 leading-tight">
              Come and say hello
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/37696dce-96b1-4dc3-bdba-67bbf6ac9877.png" 
                alt="Cross-cultural team illustration"
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
            <div>
              <p className="text-xl text-navy mb-8 leading-relaxed">
                Meet the <span className="font-bold text-navy">cross-cultural team of IT and offshoring experts who ensure the success of your operations.</span> We don't do things by halves — when we say we're committed to making the tech industry a more diverse place, we really mean it.
              </p>
              <p className="text-xl text-navy leading-relaxed">
                With <span className="font-bold text-navy">leadership from France, India, Ireland, Poland</span> — we've created the ideal environment for cross-cultural collaboration and creative thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="relative">
              <div className="w-48 h-32 bg-yellow rounded-[3rem] mx-auto mb-8 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl font-bold text-navy">11</span>
              </div>
              <p className="text-2xl font-medium text-foreground">nationalities in the team</p>
            </div>
            <div className="relative">
              <div className="w-48 h-32 bg-turquoise-light rounded-[3rem] mx-auto mb-8 flex items-center justify-center relative overflow-hidden">
                <span className="text-5xl font-bold text-navy">130+</span>
              </div>
              <p className="text-2xl font-medium text-foreground">teams built</p>
              <p className="text-2xl font-medium text-foreground">since 2014</p>
            </div>
            <div className="relative">
              <div className="w-48 h-32 bg-turquoise rounded-[3rem] mx-auto mb-8 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl font-bold text-white">10</span>
              </div>
              <p className="text-2xl font-medium text-foreground">years of successful</p>
              <p className="text-2xl font-medium text-foreground">partnerships</p>
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
      <section className="py-16 bg-panel-soft text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl text-foreground/20 mb-6">"</div>
          <blockquote className="text-2xl lg:text-3xl font-medium mb-8">
            At H2, we believe people build amazing companies, not the reverse. 
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

      {/* Life at H2 / Read more about H2 */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              READ MORE ABOUT H2
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-0 overflow-hidden">
              <img 
                src="/lovable-uploads/ad17ffa6-5e2e-4ba7-bacb-df7a6d76d25e.png" 
                alt="About Us - H2 team"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="w-12 h-1 bg-turquoise mb-6"></div>
                <h3 className="text-2xl font-bold text-foreground mb-4">About Us</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Read more on how we got started, where we've been, where we're headed — and what makes us, us.
                </p>
                <Button 
                  variant="outline"
                  className="rounded-full border-panel-medium text-panel-medium hover:bg-panel-medium hover:text-background font-semibold px-6 py-2"
                  asChild
                >
                  <Link to="/about">LEARN MORE →</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <img 
                src="/lovable-uploads/ad17ffa6-5e2e-4ba7-bacb-df7a6d76d25e.png" 
                alt="Our model - H2 office"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="w-12 h-1 bg-turquoise mb-6"></div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our model</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Learn about our approach that combines finely-tuned recruitment, managed operations, and cultural alignment.
                </p>
                <Button 
                  className="rounded-full bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold px-6 py-2"
                  asChild
                >
                  <Link to="/our-model">LEARN MORE →</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <img 
                src="/lovable-uploads/ad17ffa6-5e2e-4ba7-bacb-df7a6d76d25e.png" 
                alt="Bangalore cityscape"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="w-12 h-1 bg-turquoise mb-6"></div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Bangalore</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Discover the world's fastest-growing tech hub. It's the Silicon Valley of Asia and the place we call home.
                </p>
                <Button 
                  variant="outline"
                  className="rounded-full border-panel-medium text-panel-medium hover:bg-panel-medium hover:text-background font-semibold px-6 py-2"
                >
                  LEARN MORE →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Let's Talk Form Section */}
      <section className="py-16 bg-panel-soft text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-foreground/70 tracking-wide mb-4">
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
                  className="w-full bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold py-3 rounded-full"
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
      <section className="py-16 bg-panel-medium text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to meet the team?
          </h2>
          <p className="text-xl mb-8 text-background/80">
            Connect with our leadership team to discuss your offshore development needs
          </p>
          <Button 
            size="lg"
            className="bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold"
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