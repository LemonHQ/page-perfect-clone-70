import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const OurModel = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-yellow py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-yellow-foreground mb-6">
            Our Model
          </h1>
          <p className="text-xl text-yellow-foreground/80 max-w-3xl mx-auto">
            We help you build, scale and team up with global engineering talent from Bangalore
          </p>
        </div>
      </section>

      {/* Model Steps */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              See how we scale your software development operations in Bangalore
            </h2>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-turquoise-foreground">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">We build your team</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Our experienced recruiters and technical experts carefully select engineers from 
                  Bangalore's top talent pool, ensuring they match your specific technology needs and cultural fit.
                </p>
                <Button 
                  className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90"
                  asChild
                >
                  <Link to="/dedicated-team">LEARN MORE</Link>
                </Button>
              </div>
              <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
                <div className="w-64 h-48 bg-turquoise rounded-lg flex items-center justify-center">
                  <span className="text-turquoise-foreground text-lg font-semibold">Team Building Visual</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-yellow-foreground">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">We run your operations</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  From infrastructure setup to HR management and operational support, we handle everything 
                  so you can focus on what matters most - building great products.
                </p>
                <Button 
                  className="bg-yellow text-yellow-foreground hover:bg-yellow/90"
                  asChild
                >
                  <Link to="/team-extension">LEARN MORE</Link>
                </Button>
              </div>
              <div className="lg:order-1 bg-yellow-light rounded-lg p-8 flex items-center justify-center">
                <div className="w-64 h-48 bg-yellow rounded-lg flex items-center justify-center">
                  <span className="text-yellow-foreground text-lg font-semibold">Operations Visual</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-navy-foreground">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">You scale without limits</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  With our established infrastructure and talent pipeline, scaling your team up or down 
                  becomes seamless, giving you the flexibility to respond to market demands.
                </p>
                <Button 
                  className="bg-navy text-navy-foreground hover:bg-navy/90"
                  asChild
                >
                  <Link to="/offshore-centre">LEARN MORE</Link>
                </Button>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center">
                <div className="w-64 h-48 bg-navy rounded-lg flex items-center justify-center">
                  <span className="text-navy-foreground text-lg font-semibold">Scaling Visual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Value */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The real value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-turquoise">Every piece of mind</h3>
              <p className="text-muted-foreground">
                Complete operational support and risk management so you can focus on growth
              </p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-yellow">Get the bigger picture</h3>
              <p className="text-muted-foreground">
                Strategic insights and technical expertise to help you make better decisions
              </p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-navy">Collaborate easily</h3>
              <p className="text-muted-foreground">
                Seamless integration with your existing processes and development workflows
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Scale smarter */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Scale smarter, stand apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Traditional Approach</h3>
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mr-3">
                    <span className="text-destructive-foreground text-xs">✗</span>
                  </span>
                  Limited talent pool
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mr-3">
                    <span className="text-destructive-foreground text-xs">✗</span>
                  </span>
                  High recruitment costs
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mr-3">
                    <span className="text-destructive-foreground text-xs">✗</span>
                  </span>
                  Long hiring timelines
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mr-3">
                    <span className="text-destructive-foreground text-xs">✗</span>
                  </span>
                  Scalability challenges
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">The Scalers Way</h3>
              <div className="space-y-2">
                <div className="flex items-center text-foreground">
                  <span className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center mr-3">
                    <span className="text-turquoise-foreground text-xs">✓</span>
                  </span>
                  Access to 30K+ engineers
                </div>
                <div className="flex items-center text-foreground">
                  <span className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center mr-3">
                    <span className="text-turquoise-foreground text-xs">✓</span>
                  </span>
                  Zero upfront costs
                </div>
                <div className="flex items-center text-foreground">
                  <span className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center mr-3">
                    <span className="text-turquoise-foreground text-xs">✓</span>
                  </span>
                  Teams ready in 3 months
                </div>
                <div className="flex items-center text-foreground">
                  <span className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center mr-3">
                    <span className="text-turquoise-foreground text-xs">✓</span>
                  </span>
                  Unlimited scalability
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-yellow-foreground mb-6">
              Your developers work only for your business and add long-term value to your organisation
            </h2>
            <p className="text-xl text-yellow-foreground/80 mb-8 max-w-3xl mx-auto">
              Unlike traditional outsourcing, our dedicated teams become an extension of your company, 
              deeply understanding your business goals and contributing to long-term success.
            </p>
            <Button 
              size="lg"
              className="bg-navy text-navy-foreground hover:bg-navy/90 font-semibold"
              asChild
            >
              <Link to="/contact">GET STARTED</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurModel;