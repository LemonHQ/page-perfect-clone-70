import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";

// Import approach images
import leanThinkingImage from "@/assets/approach/lean-thinking.jpg";
import agileMethodologyImage from "@/assets/approach/agile-methodology.jpg";
import devopsIntegrationImage from "@/assets/approach/devops-integration.jpg";
const OurApproach = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="h1 mb-8">Lean Agile Transformation</h1>
          <p className="body-text text-lg mb-12 text-muted-foreground">
            In today's dynamic business environment, organizations must adapt swiftly to changing demands, 
            technological advancements, and evolving customer expectations. Our Lean-Agile-DevOps framework 
            is designed to accelerate digital transformation by fostering a culture of continuous improvement, 
            collaboration, and value delivery.
          </p>
        </div>
      </section>

      {/* Framework Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Lean Thinking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <h2 className="h2 mb-6">1. Lean Thinking: Maximizing Value, Minimizing Waste</h2>
              <p className="body-text mb-8">
                We begin by applying Lean principles to streamline processes, eliminate inefficiencies, 
                and ensure that every action contributes to customer value. This approach enables organizations to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Identify and eliminate waste in workflows and processes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Optimize resource utilization, ensuring maximum impact with minimal expenditure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Enhance decision-making through data-driven insights and rapid feedback loops</span>
                </li>
              </ul>
            </div>
            <img 
              src={leanThinkingImage} 
              alt="Lean thinking process optimization and workflow efficiency" 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Agile Methodology */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <h2 className="h2 mb-6">2. Agile Methodology: Delivering Incremental Value</h2>
              <p className="body-text mb-8">
                Building upon Lean foundations, we implement Agile practices to promote flexibility, 
                responsiveness, and iterative development. Our Agile approach emphasizes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Cross-functional collaboration across teams and departments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Frequent delivery of small, incremental improvements to products and services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Continuous stakeholder engagement to ensure alignment with business objectives</span>
                </li>
              </ul>
            </div>
            <img 
              src={agileMethodologyImage} 
              alt="Agile methodology team collaboration and iterative development" 
              className="w-full h-96 object-cover rounded-lg lg:order-1"
            />
          </div>

          {/* DevOps Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <h2 className="h2 mb-6">3. DevOps Integration: Bridging Development and Operations</h2>
              <p className="body-text mb-8">
                To further accelerate delivery and ensure reliability, we integrate DevOps practices 
                that unify development and operations teams. This integration focuses on:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Automation of testing, deployment, and monitoring to reduce manual errors and increase efficiency</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Enhanced collaboration between development, operations, and security teams</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Continuous integration and continuous delivery (CI/CD) pipelines to facilitate rapid and reliable software releases</span>
                </li>
              </ul>
            </div>
            <img 
              src={devopsIntegrationImage} 
              alt="DevOps integration automation and CI/CD pipeline development" 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Transformation Enablement & Delivery Models */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Transformation Enablement */}
            <Card>
              <CardHeader>
                <CardTitle>4. Transformation Enablement: Tailored Coaching and Support</CardTitle>
                <CardDescription>
                  Recognizing that each organization is unique, we offer customized coaching and support 
                  to guide your transformation journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="body-text">Readiness Assessments to evaluate your organization's maturity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="body-text">Strategic Workshops to design an Agile operating model</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="body-text">Mentoring and Coaching to develop necessary skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="body-text">Training Programs tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="body-text">Resource Augmentation with certified Agile practitioners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Proven Delivery Models */}
            <Card>
              <CardHeader>
                <CardTitle>5. Proven Delivery Models: Ensuring Consistent Results</CardTitle>
                <CardDescription>
                  We employ a disciplined approach to delivery that emphasizes consistency, 
                  quality, and continuous improvement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="body-text">Clear roles and responsibilities to ensure accountability and focus</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="body-text">Standardized processes and practices to maintain consistency and quality</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="body-text">Continuous improvement through regular retrospectives and feedback loops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 mb-8">Transformative Results</h2>
          <p className="body-text text-lg mb-12">
            Our Lean-Agile-DevOps framework is not just a methodology; it's a comprehensive approach 
            to transforming how your organization delivers value. By integrating these practices, we help you achieve:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="text-left">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Accelerated time-to-market for products and services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Improved quality and customer satisfaction through continuous feedback and iteration</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Enhanced collaboration and alignment across teams and departments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="body-text">Sustainable change through a culture of continuous improvement and learning</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="body-text text-lg mb-12">
            Partner with us to embark on a transformative journey that empowers your organization 
            to thrive in the digital age.
          </p>

          
        </div>
      </section>

      <ContactSection />
    </div>;
};
export default OurApproach;