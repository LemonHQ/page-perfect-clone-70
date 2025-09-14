import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import heroTeam from "@/assets/hero-team.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";

const TeamExtension = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="h1 mb-8">Team Extension</h1>
              <p className="body-text text-lg mb-12">
                Transformation and portfolio delivery often demand more capacity, diverse expertise, and sharper focus than in-house teams alone can provide. Our Team Extension service gives enterprises and portfolio leaders the ability to scale their capabilities with trusted practitioners, experts, and specialists who integrate seamlessly into your existing structures.
              </p>
              <p className="body-text text-lg mb-12">
                Whether you need additional delivery muscle, niche expertise, or leadership support, our extended teams act as a natural extension of your organization—helping you accelerate outcomes without the delays and costs of long recruitment cycles.
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
              <img src={heroTeam} alt="Team extension specialists collaborating with client teams" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h2 mb-8">What We Offer</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="h3 mb-4">Integrated Delivery Support</h3>
                  <p className="body-text text-lg mb-4">
                    Our people join your teams, adopting your tools, processes, and rhythms so you get frictionless collaboration from day one.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="body-text">Practitioners who strengthen day-to-day delivery</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="body-text">Specialists in product, portfolio, and operations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="body-text">Experts who provide guidance, coaching, or leadership as required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={teamCollaboration} alt="Integrated team delivery and collaboration" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Engagement Models */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 mb-8">Flexible Engagement Models</h2>
            <p className="body-text text-lg max-w-4xl mx-auto">
              Adapt capacity and skillsets to your portfolio priorities, project cycles, or transformation goals. We offer three distinct engagement models to fit your needs:
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Model</th>
                  <th className="px-6 py-4 text-left font-semibold">Best For</th>
                  <th className="px-6 py-4 text-left font-semibold">What You Get</th>
                  <th className="px-6 py-4 text-left font-semibold">Key Benefits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted/30">
                <tr>
                  <td className="px-6 py-6 font-semibold">Contract to Hire</td>
                  <td className="px-6 py-6">Firms needing flexibility before making permanent hires</td>
                  <td className="px-6 py-6">Practitioners and specialists placed on a contract with the option to convert to full-time staff</td>
                  <td className="px-6 py-6">
                    <div className="space-y-1">
                      <div>• Lower hiring risk</div>
                      <div>• Try-before-you-hire</div>
                      <div>• Faster onboarding to delivery</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-6 font-semibold">Tech Recruitment</td>
                  <td className="px-6 py-6">Enterprises looking for direct, high-quality permanent hires</td>
                  <td className="px-6 py-6">End-to-end recruitment support for product, portfolio, and technology roles</td>
                  <td className="px-6 py-6">
                    <div className="space-y-1">
                      <div>• Access to vetted talent pool</div>
                      <div>• Reduced time-to-hire</div>
                      <div>• Specialized focus</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-6 font-semibold">Team Augmentation</td>
                  <td className="px-6 py-6">Organizations needing immediate capacity or specialized expertise for delivery</td>
                  <td className="px-6 py-6">Extended teams or individuals embedded into your product/portfolio structures</td>
                  <td className="px-6 py-6">
                    <div className="space-y-1">
                      <div>• Rapid scaling</div>
                      <div>• Flexible short/long-term engagements</div>
                      <div>• Seamless integration</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Breadth of Expertise */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img src={officeWorkspace} alt="Diverse team of specialists and experts" className="rounded-lg w-full h-auto object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="h2 mb-8">Breadth of Expertise</h2>
              <p className="body-text text-lg mb-8">
                We provide talent across the product and portfolio lifecycle:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Product Owners, Portfolio Managers, and Scrum Masters</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Engineering, QA, and DevOps practitioners</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Agile coaches and transformation experts</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Specialists in governance, reporting, and operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Value Creation */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 mb-8">Sustainable Value Creation</h2>
            <p className="body-text text-lg max-w-4xl mx-auto">
              Our approach is not just about filling gaps—it's about building resilience into your teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-8 text-center">
              <h3 className="h3 mb-6">Knowledge Transfer</h3>
              <p className="body-text">Knowledge transfer that strengthens internal capability</p>
            </Card>
            
            <Card className="p-8 text-center">
              <h3 className="h3 mb-6">Continuous Improvement</h3>
              <p className="body-text">Continuous improvement embedded in every engagement</p>
            </Card>
            
            <Card className="p-8 text-center">
              <h3 className="h3 mb-6">Strategic Alignment</h3>
              <p className="body-text">Delivery aligned with your strategic goals</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 mb-8">Benefits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="body-text text-lg">Rapidly increase delivery capacity without hiring overhead</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="body-text text-lg">Gain access to specialized skills when and where you need them</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="body-text text-lg">Maintain momentum across product and portfolio initiatives</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="body-text text-lg">Build stronger, more capable teams that sustain value long-term</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is Team Extension Right for You */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h2 mb-8">Is Team Extension Right for You?</h2>
              <p className="body-text text-lg mb-8">
                This service is ideal if you are:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Running transformation programs or portfolios under pressure to deliver</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Facing bandwidth challenges or skill shortages</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Seeking flexible, high-quality delivery capacity that adapts to changing needs</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Looking to accelerate outcomes while strengthening your in-house capabilities</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={heroTeam} alt="Team extension consultation and planning" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Let's Talk */}
      <section className="py-24 bg-white text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="h2 mb-8">Ready to Extend Your Team?</h2>
            <p className="body-text text-lg mb-12 max-w-3xl mx-auto">
              Let's discuss how we can help you scale your capabilities and accelerate your transformation and portfolio delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-medium px-8 py-4 text-base" asChild>
                <Link to="/our-approach">OUR APPROACH</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
                <Link to="/contact">LET'S TALK</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default TeamExtension;