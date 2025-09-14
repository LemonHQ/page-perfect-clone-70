import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import heroTeam from "@/assets/hero-team.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
const PortfolioDevelopment = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="h1 mb-8">Product Portfolio Development</h1>
              <p className="body-text text-lg mb-12">
                Successful portfolio delivery is more than managing a collection of initiatives — it's about ensuring each program aligns with business strategy, delivers measurable value, and contributes to sustainable growth. We help enterprises and brands navigate the complexity of portfolio management by providing structure, strategy, and operational support. From shaping a clear portfolio vision to embedding scalable portfolio operations, we equip your teams with everything they need to deliver with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-medium px-8 py-4 text-base" asChild>
                  <Link to="/contact">GET STARTED</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
                  <Link to="/our-approach">OUR APPROACH</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={heroTeam} alt="Portfolio development team collaborating on strategic initiatives" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Vision and Strategy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h2 mb-8">Portfolio Vision and Strategy</h2>
              <p className="body-text text-lg mb-8">
                A high-performing portfolio starts with clarity of direction and strategic alignment. We help enterprises:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Define a portfolio vision that connects transformation initiatives to business goals</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Prioritize investments to maximize business and market impact</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Create balanced roadmaps that drive near-term results and long-term growth</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Align stakeholders across functions for a shared understanding of priorities</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={officeWorkspace} alt="Strategic planning workspace with portfolio roadmaps" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Operations and Governance */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img src={teamCollaboration} alt="Team implementing portfolio governance frameworks" className="rounded-lg w-full h-auto object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="h2 mb-8">Portfolio Operations and Governance</h2>
              <p className="body-text text-lg mb-8">
                Strong portfolios require disciplined execution and clear governance. We enable organizations to:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Establish portfolio operations frameworks for predictability and control</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Define governance models for faster, transparent decision-making</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Implement tools and reporting for real-time portfolio visibility</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Improve resource alignment and reduce delivery risks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Team Enablement and Agility */}
            <Card className="p-8">
              <h3 className="h3 mb-6">Team Enablement and Agility</h3>
              <p className="body-text mb-6">
                Portfolios succeed when teams are empowered to deliver value consistently. We support enterprises in:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Embedding agile practices across teams, products, and portfolios</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Defining roles, responsibilities, and collaboration frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Coaching teams and leaders to drive sustainable agility</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Enhancing operational discipline without slowing innovation</p>
                </div>
              </div>
            </Card>

            {/* Recovery and Value Realization */}
            <Card className="p-8">
              <h3 className="h3 mb-6">Recovery and Value Realization</h3>
              <p className="body-text mb-6">
                Not every initiative goes to plan. We specialize in:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Rapid diagnostics of underperforming products or programs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Recovery roadmaps to stabilize, reposition, and relaunch initiatives</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Restoring stakeholder confidence through structured delivery</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Maximizing business value from existing investments</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Extension Promotion Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h2 mb-8">Need More Delivery Capacity?</h2>
              <p className="body-text text-lg mb-8">
                Sometimes portfolio success requires more than just strategy and governance—it demands the right people with the right skills at the right time. Our Team Extension service provides you with trusted practitioners, specialists, and experts who integrate seamlessly into your existing portfolio structures.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text">Product Owners, Portfolio Managers, and Scrum Masters</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text">Engineering, QA, and DevOps practitioners</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text">Agile coaches and transformation experts</p>
                </div>
              </div>
              <Button className="bg-black text-white hover:bg-gray-800 font-medium px-8 py-4" asChild>
                <Link to="/team-extension">Explore Team Extension</Link>
              </Button>
            </div>
            <div className="relative">
              <img src={teamCollaboration} alt="Team extension professionals working with portfolio teams" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 mb-8">Ready to Transform Your Portfolio?</h2>
          <p className="body-text text-lg mb-12 opacity-90">
            Let's discuss how we can help you build a high-performing portfolio that delivers sustainable value and drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-base" asChild>
              <Link to="/contact">START YOUR TRANSFORMATION</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
              
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>;
};
export default PortfolioDevelopment;