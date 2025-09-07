import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroTeam from "@/assets/hero-team.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import diverseTeam from "@/assets/diverse-team.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-turquoise-light to-turquoise py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-turquoise-foreground mb-6">
                130+ world-class tech teams built in Bangalore
              </h1>
              <p className="text-xl text-turquoise-foreground/80 mb-8">
                Scale your software development with dedicated offshore teams
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-navy text-navy-foreground hover:bg-navy/90 font-semibold"
                  asChild
                >
                  <Link to="/our-model">OUR MODEL</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-turquoise-foreground text-turquoise-foreground hover:bg-turquoise-foreground hover:text-turquoise"
                  asChild
                >
                  <Link to="/contact">LET'S TALK</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroTeam} 
                alt="Professional development team collaboration" 
                className="rounded-lg shadow-strong w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">MICROSOFT</div>
            <div className="text-2xl font-bold text-muted-foreground">FLIPKART</div>
            <div className="text-2xl font-bold text-muted-foreground">OPTUM</div>
            <div className="text-2xl font-bold text-muted-foreground">SWIGGY</div>
            <div className="text-2xl font-bold text-muted-foreground">NASSCOM</div>
          </div>
        </div>
      </section>

      {/* Scale Your Tech Team Section */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-yellow-foreground mb-6">
                Scale your tech team easily
              </h2>
              <p className="text-lg text-yellow-foreground/80 mb-8">
                Access world-class engineers from Bangalore through our proven offshore development model
              </p>
              <Button 
                className="bg-navy text-navy-foreground hover:bg-navy/90 font-semibold"
                asChild
              >
                <Link to="/our-model">LEARN MORE</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={officeWorkspace} alt="Modern office workspace" className="rounded-lg shadow-medium" />
              <img src={diverseTeam} alt="Diverse engineering team" className="rounded-lg shadow-medium" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-turquoise mb-4">130+</div>
              <p className="text-xl font-semibold text-foreground mb-2">Teams built</p>
              <p className="text-muted-foreground">World-class development teams delivered</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-turquoise mb-4">39+</div>
              <p className="text-xl font-semibold text-foreground mb-2">Countries served</p>
              <p className="text-muted-foreground">Global reach and expertise</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-turquoise mb-4">3</div>
              <p className="text-xl font-semibold text-foreground mb-2">Months average</p>
              <p className="text-muted-foreground">Time to build your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              We build our teams
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven process for scaling your development capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-turquoise-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We build our teams</h3>
              <p className="text-muted-foreground">
                Carefully selected engineers with proven track records in cutting-edge technologies
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We run your operations</h3>
              <p className="text-muted-foreground">
                Complete operational support including infrastructure, HR, and project management
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-navy-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We work as one team</h3>
              <p className="text-muted-foreground">
                Seamless integration with your existing team and development processes
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Work with your offshore team */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-foreground mb-6">
                Work with your offshore team in the same way as your local team
              </h2>
              <p className="text-lg text-yellow-foreground/80 mb-8">
                Transparent processes, regular communication, and aligned working hours ensure seamless collaboration.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-background rounded-lg p-4">
                <div className="text-2xl font-bold text-turquoise mb-2">0M</div>
                <p className="text-sm text-muted-foreground">Upfront cost</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="text-2xl font-bold text-turquoise mb-2">30K</div>
                <p className="text-sm text-muted-foreground">Engineers available</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="text-2xl font-bold text-turquoise mb-2">133</div>
                <p className="text-sm text-muted-foreground">Teams delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite engineers */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={ceoPortrait} 
                alt="Elite engineering talent in Bangalore" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Elite engineers in Bangalore
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access to India's largest tech talent pool with engineers from top universities and leading technology companies.
              </p>
              <Button 
                className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 font-semibold"
                asChild
              >
                <Link to="/about">LEARN MORE</Link>
              </Button>
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
            Tell us what you need and we'll help you scale your development capabilities
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-sm font-bold">1</span>
              </div>
              <span>Tell us what you need</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-sm font-bold">2</span>
              </div>
              <span>Talk to our experts</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-sm font-bold">3</span>
              </div>
              <span>Get a tailored proposal</span>
            </div>
          </div>
          <div className="mt-8">
            <Button 
              size="lg"
              className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 font-semibold"
              asChild
            >
              <Link to="/contact">LET'S TALK</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;