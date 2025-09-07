import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DedicatedTeam = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
                Dedicated Development Team
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Build your fully integrated team in Bangalore with world-class talent
              </p>
              <Button 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4"
                asChild
              >
                <Link to="/contact">GET STARTED</Link>
              </Button>
            </div>
            <div className="bg-muted/30 rounded-lg p-12 flex items-center justify-center">
              <div className="w-full h-64 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-medium">Dedicated Team Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-background text-2xl">👥</span>
              </div>
              <h3 className="font-semibold mb-3">World-class engineering</h3>
              <p className="text-sm text-muted-foreground">Top 1% engineers from premier institutes</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-background text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-3">Blazing fast delivery</h3>
              <p className="text-sm text-muted-foreground">Accelerate your development timeline</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-background text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold mb-3">Bulletproof engagement</h3>
              <p className="text-sm text-muted-foreground">Complete legal and operational coverage</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-background text-2xl">💬</span>
              </div>
              <h3 className="font-semibold mb-3">Easy communication</h3>
              <p className="text-sm text-muted-foreground">Seamless collaboration across time zones</p>
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
                Our rigorous vetting process ensures you get engineers who perfectly match your technical requirements and company culture.
              </p>
            </div>
            <div className="bg-yellow-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Talent Selection Process</span>
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
              <p className="text-xl font-semibold mb-2">Upfront investment</p>
              <p className="text-muted-foreground">No setup costs or hidden fees</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-turquoise mb-4">27K</div>
              <p className="text-xl font-semibold mb-2">Available engineers</p>
              <p className="text-muted-foreground">Ready to join your team</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-turquoise mb-4">120</div>
              <p className="text-xl font-semibold mb-2">Teams delivered</p>
              <p className="text-muted-foreground">Successful implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* A people-first approach */}
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
                A people-first approach
              </h2>
              <p className="text-lg text-turquoise-foreground/80 mb-8">
                We believe great software comes from great teams. Our approach prioritizes cultural fit, 
                continuous learning, and long-term relationships to ensure your team's success.
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
                <span className="text-turquoise-foreground text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We build great teams</h3>
              <p className="text-muted-foreground">
                Carefully curated teams that integrate seamlessly with your existing processes
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-foreground text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We run your operations</h3>
              <p className="text-muted-foreground">
                Complete operational support including infrastructure, HR, and compliance
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-foreground text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We work as one team</h3>
              <p className="text-muted-foreground">
                True integration that feels like your engineers are sitting right next to you
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
            Build your dedicated development team with India's top engineering talent
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

export default DedicatedTeam;