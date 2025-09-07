import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
const RetailEcommerce = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1>
              Retail & Ecommerce Software Development
            </h1>
            <p className="body-text text-lg max-w-3xl mx-auto mb-8">
              Deliver exceptional online and offline retail experiences with a dedicated team
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="button-text px-4 py-2 rounded-full">React</span>
              <span className="button-text px-4 py-2 rounded-full">Node.js</span>
              <span className="button-text px-4 py-2 rounded-full">Shopify</span>
              <span className="button-text px-4 py-2 rounded-full">Magento</span>
              <span className="button-text px-4 py-2 rounded-full">AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom-built Retail engineering teams */}
      <section className="py-16 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">
              Custom-built Retail engineering teams
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Tech Icons Grid */}
            <Card className="p-6 text-center bg-background">
              <div className="text-3xl mb-3">🛒</div>
              <p className="text-sm font-medium">E-commerce Platforms</p>
            </Card>
            <Card className="p-6 text-center bg-turquoise-light">
              <div className="text-3xl mb-3">📱</div>
              <p className="text-sm font-medium">Mobile Commerce</p>
            </Card>
            <Card className="p-6 text-center bg-yellow">
              <div className="text-3xl mb-3">🎯</div>
              <p className="text-sm font-medium">Personalization</p>
            </Card>
            <Card className="p-6 text-center bg-background">
              <div className="text-3xl mb-3">📦</div>
              <p className="text-sm font-medium">Inventory Management</p>
            </Card>

            <Card className="p-6 text-center bg-yellow-light">
              <div className="text-3xl mb-3">💳</div>
              <p className="text-sm font-medium">Payment Solutions</p>
            </Card>
            <Card className="p-6 text-center bg-turquoise">
              <div className="text-3xl mb-3">📊</div>
              <p className="text-sm font-medium">Analytics & Insights</p>
            </Card>
            <Card className="p-6 text-center bg-background">
              <div className="text-3xl mb-3">🤖</div>
              <p className="text-sm font-medium">AI Recommendations</p>
            </Card>
            <Card className="p-6 text-center bg-navy text-navy-foreground">
              <div className="text-3xl mb-3">☁️</div>
              <p className="text-sm font-medium">Cloud Infrastructure</p>
            </Card>
          </div>

          <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
            <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
              <span className="text-foreground text-lg font-semibold">Retail Innovation Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Retail Innovation */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-yellow-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Retail Innovation Diagram</span>
              </div>
            </div>
            <div>
              <h2>
                Scaling Retail Innovation: Customer first
              </h2>
              <p className="body-text text-lg mb-8">
                Our retail teams are built around customer experience and omnichannel excellence. 
                We focus on creating seamless shopping experiences that drive conversion and 
                customer loyalty across all touchpoints.
              </p>
              <Button className="bg-panel-medium text-background hover:bg-panel-medium/90" asChild>
                <Link to="/contact">BUILD YOUR TEAM</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* We build the best Retail talent hub */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                We build the best Retail talent hub
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our specialized retail division connects you with engineers who understand 
                the unique challenges of e-commerce - from scalable architecture to real-time 
                inventory management and personalized shopping experiences.
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
                  <span className="text-sm font-medium">Shopify Plus</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                  <span className="w-6 h-6 bg-turquoise rounded-full"></span>
                  <span className="text-sm font-medium">GraphQL</span>
                </div>
              </div>

              <Button className="bg-panel-medium text-background hover:bg-panel-medium/90" asChild>
                <Link to="/dedicated-team">LEARN MORE</Link>
              </Button>
            </div>
            <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Retail Talent Hub</span>
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
                <span className="text-turquoise-foreground text-lg">🏪</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Online Storefronts</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-foreground text-lg">📱</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Mobile Apps</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-navy-foreground text-lg">🛍️</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Shopping Cart Systems</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-turquoise-foreground text-lg">🔍</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Search & Discovery</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-foreground text-lg">💰</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Payment Processing</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-navy-foreground text-lg">📦</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Order Management</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-turquoise-foreground text-lg">🎯</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Customer Segmentation</h3>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-foreground text-lg">📊</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm">Business Intelligence</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>;
};
export default RetailEcommerce;