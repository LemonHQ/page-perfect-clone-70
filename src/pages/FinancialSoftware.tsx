import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
const FinancialSoftware = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="h1 mb-8">
              Financial Software Development
            </h1>
            <p className="body-text text-lg max-w-3xl mx-auto mb-8">
              Scale your FinTech company with a dedicated tech team in India's tech capital
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="button-text px-4 py-2 rounded-full">Blockchain</span>
              <span className="button-text px-4 py-2 rounded-full">Python</span>
              <span className="button-text px-4 py-2 rounded-full">React</span>
              <span className="button-text px-4 py-2 rounded-full">Java</span>
              <span className="button-text px-4 py-2 rounded-full">Cybersecurity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom-built FinTech engineering teams */}
      <section className="py-16 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">
              Custom-built FinTech engineering teams
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Tech Icons Grid */}
            <Card className="p-6 text-center bg-background">
              <div className="text-3xl mb-3">🏛️</div>
              <p className="button-text">Digital Banking</p>
            </Card>
            <Card className="p-6 text-center bg-turquoise-light">
              <div className="text-3xl mb-3">💳</div>
              <p className="button-text">Payment Processing</p>
            </Card>
            <Card className="p-6 text-center bg-yellow">
              <div className="text-3xl mb-3">📊</div>
              <p className="button-text">Risk Management</p>
            </Card>
            <Card className="p-6 text-center bg-background">
              <div className="text-3xl mb-3">⛓️</div>
              <p className="button-text">Blockchain</p>
            </Card>

            <Card className="p-6 text-center bg-yellow-light">
              <div className="text-3xl mb-3">📱</div>
              <p className="text-sm font-medium">Mobile Banking</p>
            </Card>
            <Card className="p-6 text-center bg-turquoise">
              <div className="text-3xl mb-3">🔒</div>
              <p className="text-sm font-medium">Cybersecurity</p>
            </Card>
            <Card className="p-6 text-center bg-background">
              <div className="text-3xl mb-3">🤖</div>
              <p className="text-sm font-medium">Robo-Advisory</p>
            </Card>
            <Card className="p-6 text-center bg-panel-warm text-foreground">
              <div className="text-3xl mb-3">📈</div>
              <p className="text-sm font-medium">Trading Platforms</p>
            </Card>
          </div>

          <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
            <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
              <span className="text-foreground text-lg font-semibold">FinTech Innovation Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Financial Innovation */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-yellow-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Financial Innovation Diagram</span>
              </div>
            </div>
            <div>
              <h2 className="h2 mb-6">
                Scaling Financial Innovation: Security first
              </h2>
              <p className="body-text text-lg mb-8">
                Our FinTech teams are built with security and compliance at the core. We understand 
                the critical nature of financial data and regulatory requirements, ensuring your 
                solutions meet the highest industry standards.
              </p>
              <Button className="bg-panel-medium text-background hover:bg-panel-medium/90" asChild>
                <Link to="/contact">BUILD YOUR TEAM</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* We build the best FinTech talent hub */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                We build the best FinTech talent hub
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our specialized financial software division connects you with engineers who understand 
                the unique challenges of FinTech - from regulatory compliance to real-time transaction 
                processing and advanced security protocols.
              </p>
              
              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                  <span className="w-6 h-6 bg-turquoise rounded-full"></span>
                  <span className="text-sm font-medium">Java</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                  <span className="w-6 h-6 bg-yellow rounded-full"></span>
                  <span className="text-sm font-medium">Python</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                  <span className="w-6 h-6 bg-panel-medium rounded-full"></span>
                  <span className="text-sm font-medium">Blockchain</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                  <span className="w-6 h-6 bg-turquoise rounded-full"></span>
                  <span className="text-sm font-medium">Kubernetes</span>
                </div>
              </div>

              <Button className="bg-panel-medium text-background hover:bg-panel-medium/90" asChild>
                <Link to="/dedicated-team">LEARN MORE</Link>
              </Button>
            </div>
            <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">FinTech Talent Hub</span>
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
                <span className="text-turquoise-foreground text-lg">🏦</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Core Banking Systems</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-foreground text-lg">💰</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Payment Gateways</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-panel-warm rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-navy-foreground text-lg">📊</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Risk Analytics</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-turquoise-foreground text-lg">🔐</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Fraud Detection</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-foreground text-lg">📱</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Mobile Wallets</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-panel-warm rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-navy-foreground text-lg">⚖️</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Regulatory Compliance</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-turquoise-foreground text-lg">🤖</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">AI-Powered Trading</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-foreground text-lg">📈</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Investment Platforms</h3>
            </Card>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Our Locations Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="h2 mb-6">
              Our locations
            </h2>
            <p className="body-text text-lg max-w-3xl mx-auto">
              Strategic FinTech hubs across Bangalore with specialized financial software expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise-foreground text-2xl">🏢</span>
              </div>
              <h3 className="h5 mb-3">Electronic City</h3>
              <p className="body-text text-muted-foreground">
                Premier FinTech hub with banking and financial services focus
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-foreground text-2xl">🌆</span>
              </div>
              <h3 className="h5 mb-3">Whitefield</h3>
              <p className="body-text text-muted-foreground">
                International financial corridor with payment processing expertise
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-foreground text-2xl">🏗️</span>
              </div>
              <h3 className="h5 mb-3">Koramangala</h3>
              <p className="body-text text-muted-foreground">
                FinTech startup ecosystem with blockchain and crypto expertise
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      
    </div>;
};
export default FinancialSoftware;