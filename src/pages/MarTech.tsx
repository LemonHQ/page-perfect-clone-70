import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MarTech = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-turquoise to-navy py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-navy-foreground">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              MarTech Software Development
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Increase the ROI of development with world-class MarTech engineering talent
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium">Python</span>
              <span className="bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium">React</span>
              <span className="bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium">AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom-built MarTech engineering teams */}
      <section className="py-16 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-turquoise-foreground mb-4">
              Custom-built MarTech engineering teams
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Tech Icons Grid */}
            <Card className="p-6 text-center bg-background">
              <div className="text-3xl mb-3">AD</div>
              <p className="text-sm font-medium">Ad Tech</p>
            </Card>
            <Card className="p-6 text-center bg-turquoise-light">
              <div className="text-3xl mb-3">📊</div>
              <p className="text-sm font-medium">Analytics</p>
            </Card>
            <Card className="p-6 text-center bg-yellow">
              <div className="text-3xl mb-3">🎯</div>
              <p className="text-sm font-medium">Marketing Automation</p>
            </Card>
            <Card className="p-6 text-center bg-background">
              <div className="text-3xl mb-3">📱</div>
              <p className="text-sm font-medium">CRM Systems</p>
            </Card>

            <Card className="p-6 text-center bg-yellow-light">
              <div className="text-3xl mb-3">🛒</div>
              <p className="text-sm font-medium">E-commerce</p>
            </Card>
            <Card className="p-6 text-center bg-turquoise">
              <div className="text-3xl mb-3">📈</div>
              <p className="text-sm font-medium">Data Science</p>
            </Card>
            <Card className="p-6 text-center bg-background">
              <div className="text-3xl mb-3">🤖</div>
              <p className="text-sm font-medium">AI/ML</p>
            </Card>
            <Card className="p-6 text-center bg-navy text-navy-foreground">
              <div className="text-3xl mb-3">☁️</div>
              <p className="text-sm font-medium">Cloud Infrastructure</p>
            </Card>
          </div>

          <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
            <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
              <span className="text-foreground text-lg font-semibold">MarTech Innovation Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Innovation */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-yellow-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Scaling Innovation Diagram</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-foreground mb-6">
                Scaling Innovation: People over profit
              </h2>
              <p className="text-lg text-yellow-foreground/80 mb-8">
                Our MarTech teams are built around innovation, not just delivery. We focus on 
                creating sustainable, scalable solutions that grow with your business needs.
              </p>
              <Button 
                className="bg-navy text-navy-foreground hover:bg-navy/90"
                asChild
              >
                <Link to="/contact">BUILD YOUR TEAM</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* We build the best MarTech talent hub */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                We build the best MarTech talent hub
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our specialized MarTech division connects you with engineers who understand 
                the unique challenges of marketing technology - from data integration to 
                real-time personalization and campaign optimization.
              </p>
              
              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                  <span className="w-6 h-6 bg-turquoise rounded-full"></span>
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                  <span className="w-6 h-6 bg-yellow rounded-full"></span>
                  <span className="text-sm font-medium">Node.js</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                  <span className="w-6 h-6 bg-navy rounded-full"></span>
                  <span className="text-sm font-medium">Python</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                  <span className="w-6 h-6 bg-turquoise rounded-full"></span>
                  <span className="text-sm font-medium">AWS</span>
                </div>
              </div>

              <Button 
                className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90"
                asChild
              >
                <Link to="/dedicated-team">LEARN MORE</Link>
              </Button>
            </div>
            <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">MarTech Talent Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The smarter way to scale */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The smarter way to scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-turquoise-foreground font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Stand out in your industry</h3>
                  <p className="text-muted-foreground text-sm">
                    Build differentiated MarTech solutions that give you a competitive edge
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-foreground font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Boost on-demand</h3>
                  <p className="text-muted-foreground text-sm">
                    Scale your development capacity instantly based on project demands
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-navy-foreground font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Access on-demand specialized skills</h3>
                  <p className="text-muted-foreground text-sm">
                    Get expertise in niche MarTech domains without long-term hiring commitments
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-turquoise rounded-lg flex items-center justify-center">
                <span className="text-turquoise-foreground text-lg font-semibold">Scaling Strategy Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your dedicated offshore team can help you with */}
      <section className="py-16 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-turquoise-foreground mb-4">
              Your dedicated offshore team can help you with
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-turquoise-foreground text-lg">🚀</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Campaign Management Platforms</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-foreground text-lg">📊</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Analytics & Attribution</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-navy-foreground text-lg">🎯</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Personalization Engines</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-turquoise-foreground text-lg">🔗</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">API Integrations</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-foreground text-lg">📱</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Customer Journey Mapping</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-navy-foreground text-lg">🤖</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Marketing Automation</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-turquoise-foreground text-lg">💰</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Revenue Attribution</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-foreground text-lg">📈</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Performance Optimization</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* We build the best MarTech teams */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              We build the best MarTech teams
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Best MarTech Teams</span>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-turquoise-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Experienced team delivery</h3>
                    <p className="text-muted-foreground text-sm">
                      Pre-vetted engineers with proven MarTech experience
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Innovative team solutions</h3>
                    <p className="text-muted-foreground text-sm">
                      Creative approaches to complex MarTech challenges
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Bulletproof team protocol</h3>
                    <p className="text-muted-foreground text-sm">
                      Rigorous security and compliance standards for sensitive marketing data
                    </p>
                  </div>
                </div>
              </div>
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
            Build your specialized MarTech development team with India's top engineering talent
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

export default MarTech;