import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TeamExtension = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-turquoise py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-turquoise-foreground mb-6">
                Development Team Extension
              </h1>
              <p className="text-xl text-turquoise-foreground/80 mb-8">
                Extend your tech team with world-class talent
              </p>
              <Button 
                size="lg"
                className="bg-navy text-navy-foreground hover:bg-navy/90 font-semibold"
                asChild
              >
                <Link to="/contact">EXTEND YOUR TEAM</Link>
              </Button>
            </div>
            <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-64 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Team Extension Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise-foreground text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Rapid scaling</h3>
              <p className="text-sm text-muted-foreground">Scale your team up or down quickly as needed</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-foreground text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Perfect fit</h3>
              <p className="text-sm text-muted-foreground">Engineers matched to your exact requirements</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-foreground text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold mb-2">Plug-n-play setup</h3>
              <p className="text-sm text-muted-foreground">Seamless integration with existing processes</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise-foreground text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold mb-2">Global accessibility</h3>
              <p className="text-sm text-muted-foreground">Work across time zones effortlessly</p>
            </Card>
          </div>
        </div>
      </section>

      {/* The best talent */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-foreground mb-6">
                The best talent for your technical needs, not ours
              </h2>
              <p className="text-lg text-yellow-foreground/80 mb-8">
                We don't force-fit our available resources to your needs. Instead, we find the perfect engineers 
                who match your specific technical requirements and team culture.
              </p>
            </div>
            <div className="bg-yellow-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Technical Matching Process</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World-class engineers */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              World-class engineers in Bangalore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-turquoise mb-4">0M</div>
              <p className="text-xl font-semibold mb-2">Upfront cost</p>
              <p className="text-muted-foreground">No setup fees or hidden charges</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-turquoise mb-4">27K</div>
              <p className="text-xl font-semibold mb-2">Engineers available</p>
              <p className="text-muted-foreground">Vetted and ready to contribute</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-turquoise mb-4">120</div>
              <p className="text-xl font-semibold mb-2">Successful extensions</p>
              <p className="text-muted-foreground">Proven track record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohesive culture */}
      <section className="py-16 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-background rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-turquoise rounded-lg flex items-center justify-center">
                <span className="text-turquoise-foreground text-lg font-semibold">Team Culture Visual</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-turquoise-foreground mb-6">
                Create a cohesive culture
              </h2>
              <p className="text-lg text-turquoise-foreground/80 mb-8">
                Our extended team members don't just work for you - they become part of your company culture, 
                sharing your values and working towards common goals.
              </p>
              <Button 
                className="bg-navy text-navy-foreground hover:bg-navy/90"
                asChild
              >
                <Link to="/about">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our model makes scaling plain sailing */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our model makes scaling plain sailing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise-foreground text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We understand your needs</h3>
              <p className="text-muted-foreground">
                Deep analysis of your requirements and team dynamics before matching
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-foreground text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We integrate seamlessly</h3>
              <p className="text-muted-foreground">
                Smooth onboarding process that gets your extended team productive quickly
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-foreground text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We deliver results</h3>
              <p className="text-muted-foreground">
                Continuous monitoring and optimization to ensure maximum productivity
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* To support your objectives */}
      <section className="py-16 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-turquoise-foreground mb-4">
              To support your objectives, we
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-turquoise">What we do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Source top-tier engineering talent</li>
                <li>• Provide complete operational support</li>
                <li>• Ensure seamless team integration</li>
                <li>• Manage HR and administrative tasks</li>
                <li>• Maintain quality and performance standards</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-navy">What you get</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Extended team that feels like your own</li>
                <li>• Faster time-to-market for your products</li>
                <li>• Significant cost savings</li>
                <li>• Access to specialized skill sets</li>
                <li>• Flexibility to scale as needed</li>
              </ul>
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
            Extend your development capabilities with India's finest engineering talent
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

export default TeamExtension;