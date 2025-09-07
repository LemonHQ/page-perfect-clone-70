import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const OurModel = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Our Model
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help you build, scale and team up with global engineering talent from Bangalore
          </p>
        </div>
      </section>

      {/* Model Steps */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              See how we scale your software development operations in Bangalore
            </h2>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-6">
                    <span className="text-xl font-bold text-background">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">We build your team</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our experienced recruiters and technical experts carefully select engineers from 
                  Bangalore's top talent pool, ensuring they match your specific technology needs and cultural fit.
                </p>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4"
                  asChild
                >
                  <Link to="/dedicated-team">LEARN MORE</Link>
                </Button>
              </div>
              <div className="bg-background rounded-lg p-12 flex items-center justify-center">
                <div className="w-64 h-48 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">Team Building Visual</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-6">
                    <span className="text-xl font-bold text-background">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">We run your operations</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From infrastructure setup to HR management and operational support, we handle everything 
                  so you can focus on what matters most - building great products.
                </p>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4"
                  asChild
                >
                  <Link to="/team-extension">LEARN MORE</Link>
                </Button>
              </div>
              <div className="lg:order-1 bg-background rounded-lg p-12 flex items-center justify-center">
                <div className="w-64 h-48 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">Operations Visual</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-6">
                    <span className="text-xl font-bold text-background">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">You scale without limits</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With our established infrastructure and talent pipeline, scaling your team up or down 
                  becomes seamless, giving you the flexibility to respond to market demands.
                </p>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4"
                  asChild
                >
                  <Link to="/offshore-centre">LEARN MORE</Link>
                </Button>
              </div>
              <div className="bg-background rounded-lg p-12 flex items-center justify-center">
                <div className="w-64 h-48 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">Scaling Visual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - The Real Value */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-4">
              BENEFITS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The real value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-foreground"></div>
              <div className="text-lg font-semibold text-foreground">CTO</div>
              <h3 className="text-2xl font-bold text-foreground">Enjoy peace of mind</h3>
              <p className="text-muted-foreground leading-relaxed">
                As CTO, a key priority is to ensure your product remains innovative and that your 
                company stays ahead of the competition. With our model, <strong>your product team of 
                technical experts deliver exceptional code to help you meet your strategic goals.</strong>
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-1 bg-foreground"></div>
              <div className="text-lg font-semibold text-foreground">VP of Engineering</div>
              <h3 className="text-2xl font-bold text-foreground">See the bigger picture</h3>
              <p className="text-muted-foreground leading-relaxed">
                As VP of engineering you have <strong>open, direct, daily communication with your engineers 
                in Bangalore</strong> and weekly reports from The Scalers. Our model allows you to smoothly 
                oversee their projects remotely and make sure that every task is on track.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-1 bg-foreground"></div>
              <div className="text-lg font-semibold text-foreground">Product Manager</div>
              <h3 className="text-2xl font-bold text-foreground">Collaborate easily</h3>
              <p className="text-muted-foreground leading-relaxed">
                As PM, you work with your engineers in Bangalore as one team, using the <strong>same 
                methodology and tools as with your team at home.</strong> You're in charge of the workflow 
                and you have clear visibility of the daily progress of your developers' workload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scale smarter */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Scale smarter, stand apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Traditional Approach</h3>
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mr-4">
                    <span className="text-destructive-foreground text-xs">✗</span>
                  </span>
                  Limited talent pool
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mr-4">
                    <span className="text-destructive-foreground text-xs">✗</span>
                  </span>
                  High recruitment costs
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mr-4">
                    <span className="text-destructive-foreground text-xs">✗</span>
                  </span>
                  Long hiring timelines
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mr-4">
                    <span className="text-destructive-foreground text-xs">✗</span>
                  </span>
                  Scalability challenges
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">The Scalers Way</h3>
              <div className="space-y-4">
                <div className="flex items-center text-foreground">
                  <span className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-4">
                    <span className="text-background text-xs">✓</span>
                  </span>
                  Access to 30K+ engineers
                </div>
                <div className="flex items-center text-foreground">
                  <span className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-4">
                    <span className="text-background text-xs">✓</span>
                  </span>
                  Zero upfront costs
                </div>
                <div className="flex items-center text-foreground">
                  <span className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-4">
                    <span className="text-background text-xs">✓</span>
                  </span>
                  Teams ready in 3 months
                </div>
                <div className="flex items-center text-foreground">
                  <span className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-4">
                    <span className="text-background text-xs">✓</span>
                  </span>
                  Unlimited scalability
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Your developers work only for your business and add long-term value to your organisation
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Unlike traditional outsourcing, our dedicated teams become an extension of your company, 
              deeply understanding your business goals and contributing to long-term success.
            </p>
            <Button 
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4"
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