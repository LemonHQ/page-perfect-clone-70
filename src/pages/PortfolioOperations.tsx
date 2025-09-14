import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import heroTeam from "@/assets/hero-team.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const PortfolioOperations = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="h1 mb-8">Portfolio Operations</h1>
              <p className="body-text text-lg mb-12">
                Portfolio Operations is the backbone of efficient and scalable transformation delivery. It ensures that portfolio leaders, program managers, and product teams have the right structures, governance, and visibility to execute successfully. By streamlining processes, aligning resources, and enabling transparent decision-making, Portfolio Operations allows enterprises to scale complex initiatives while maintaining control and delivering measurable outcomes. We help organizations establish robust Portfolio Operations functions that drive predictability, improve alignment, and enable value-focused delivery.
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
              <img 
                src={heroTeam} 
                alt="Portfolio operations team managing strategic initiatives" 
                className="rounded-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data and Insight Management */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h2 mb-8">Data and Insight Management</h2>
              <p className="body-text text-lg mb-8">
                Access to the right insights is critical for effective portfolio management. We help enterprises:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Implement data-driven portfolio governance frameworks</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Consolidate and analyze initiative performance metrics for executive visibility</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Create portfolio dashboards that connect delivery progress with business outcomes</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Enable leadership with actionable insights to prioritize and re-balance investments</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={officeWorkspace} 
                alt="Data analytics workspace with portfolio dashboards" 
                className="rounded-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Optimization and Efficiency */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={teamCollaboration} 
                alt="Team optimizing portfolio processes and workflows" 
                className="rounded-lg w-full h-auto object-cover" 
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="h2 mb-8">Process Optimization and Efficiency</h2>
              <p className="body-text text-lg mb-8">
                Strong processes are key to managing multiple initiatives with consistency and speed. Our services include:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Designing scalable workflows for portfolio oversight and reporting</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Standardizing governance practices to improve predictability</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Embedding agile portfolio management methods for adaptive planning</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Identifying and removing systemic bottlenecks across initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Functional Alignment */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 mb-8">Cross-Functional Alignment</h2>
            <p className="body-text text-lg max-w-3xl mx-auto mb-12">
              Successful portfolios depend on enterprise-wide collaboration. We enable organizations by:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <h3 className="h4">Clear Governance Structures</h3>
              </div>
              <p className="body-text">Establishing clear roles, responsibilities, and governance structures that enable effective decision-making across all levels of the organization.</p>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <h3 className="h4">Team Alignment</h3>
              </div>
              <p className="body-text">Creating alignment between business, technology, and delivery teams to ensure everyone is working toward shared objectives.</p>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <h3 className="h4">Strategic Workshops</h3>
              </div>
              <p className="body-text">Facilitating portfolio-level workshops for prioritization and strategic trade-offs that drive business value.</p>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <h3 className="h4">Transparency & Accountability</h3>
              </div>
              <p className="body-text">Implementing tools and frameworks that enhance transparency and accountability across all portfolio initiatives.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 mb-8">Ready to Optimize Your Portfolio Operations?</h2>
          <p className="body-text text-lg mb-12">
            Let's discuss how we can help you establish robust Portfolio Operations that drive predictability, improve alignment, and enable value-focused delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-base" asChild>
              <Link to="/contact">START YOUR OPTIMIZATION</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
              <Link to="/case-studies">VIEW SUCCESS STORIES</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default PortfolioOperations;