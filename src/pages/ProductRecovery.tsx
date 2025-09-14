import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroTeam from "@/assets/hero-team.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const ProductRecovery = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="h1 mb-8">Product & Program Recovery</h1>
              <p className="body-text text-lg mb-8">
                Turn stalled initiatives into high-performing outcomes.
              </p>
              <p className="body-text text-lg mb-12">
                Even the best-planned portfolios and programs can hit roadblocks — whether due to unclear vision, resource constraints, or execution challenges. Our Product & Program Recovery service reignites underperforming initiatives, restores confidence, and sets your teams on a path to sustainable, accelerated delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-medium px-8 py-4 text-base" asChild>
                  <Link to="/contact">GET STARTED</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
                  <Link to="/our-model">OUR APPROACH</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroTeam} 
                alt="Product recovery team analyzing and turning around stalled initiatives" 
                className="rounded-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Program Recovery Matters */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h2 mb-8">Why Program Recovery Matters</h2>
              <p className="body-text text-lg mb-8">
                Industry research shows that a significant portion of initiatives fail to meet objectives, exceed budgets, or stall indefinitely. Recovery is more than fixing delays; it's about addressing the root causes — aligning strategy, empowering teams, and rebuilding the execution engine to deliver lasting value.
              </p>
              <p className="body-text text-lg mb-8">We focus on:</p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Rapidly assessing the health of initiatives and portfolios</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Diagnosing gaps in vision, leadership, and delivery processes</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Implementing pragmatic, sustainable interventions that drive results</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={officeWorkspace} 
                alt="Strategic recovery planning workspace with portfolio analysis" 
                className="rounded-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Recovery Approach */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 mb-8">Our Recovery Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <Card className="p-8 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-6 mx-auto">
                1
              </div>
              <h3 className="h3 mb-6">Rapid Assessment</h3>
              <p className="body-text">
                We quickly identify the key obstacles holding back your programs. Through surveys, stakeholder interviews, and portfolio reviews, we uncover misalignments, resource bottlenecks, and execution risks.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-6 mx-auto">
                2
              </div>
              <h3 className="h3 mb-6">Tailored Recovery Plan</h3>
              <p className="body-text">
                Every recovery is unique. Together, we co-create a practical plan that addresses mission, management, and mechanics — ensuring initiatives are realigned to business goals, teams are empowered, and delivery is predictable.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-6 mx-auto">
                3
              </div>
              <h3 className="h3 mb-6">Hands-On Implementation</h3>
              <p className="body-text">
                We work alongside your teams to remove friction, embed new practices, and restore momentum. Through incremental changes and continuous guidance, your organization regains delivery confidence and accelerates results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={teamCollaboration} 
                alt="Team celebrating successful program recovery outcomes" 
                className="rounded-lg w-full h-auto object-cover" 
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="h2 mb-8">Key Outcomes</h2>
              <p className="body-text text-lg mb-8">
                Engaging our Product & Program Recovery service enables enterprises to:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Restore visibility, accountability, and confidence across portfolios</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Accelerate initiatives that were previously delayed or underperforming</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Embed lasting changes in mindset, skill sets, and delivery culture</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Achieve reliable, high-quality outcomes, independent of external support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 mb-8">Why Us?</h2>
          <p className="body-text text-lg mb-8">
            We don't offer one-size-fits-all solutions. Our experts draw on years of experience across industries to provide pragmatic, hands-on recovery. We address the real barriers to delivery — from leadership misalignment to team dynamics — ensuring initiatives not only recover but thrive.
          </p>
          <p className="body-text text-lg mb-12 opacity-90">
            Reignite your portfolio. Restore momentum. Deliver measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-base" asChild>
              <Link to="/contact">START YOUR RECOVERY</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
              <Link to="/case-studies">VIEW SUCCESS STORIES</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductRecovery;