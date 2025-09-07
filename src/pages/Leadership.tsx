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

      {/* Team photo grid */}
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

      {/* CTA Section */}
      <section className="py-16 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Set up a world-class tech team in Bangalore
          </h2>
          <p className="text-xl mb-8 text-navy-foreground/80">
            Connect with our leadership team to discuss your offshore development needs
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

export default Leadership;