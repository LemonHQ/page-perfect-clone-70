import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import heroTeam from "@/assets/hero-team.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
const AgileCoaching = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="h1 mb-8">Agile Coaching</h1>
              <p className="body-text text-lg mb-8">
                Build capabilities. Empower teams. Transform delivery.
              </p>
              <p className="body-text text-lg mb-12">
                Agile isn't just a methodology — it's a mindset, a way of working, and a path to sustainable value delivery. Our Agile Coaching services equip your people, teams, and leaders with the guidance, support, and frameworks they need to embed agility across your organization.
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
              <img src={heroTeam} alt="Agile coaching team collaborating and mentoring" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h2 mb-8">Mentoring</h2>
              <p className="body-text text-lg mb-8">
                New to a role such as Scrum Master, Product Owner, or Agile team lead? Mentoring provides a dedicated space to discuss challenges, explore ideas, and build confidence in your approach.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Regular sessions (45–60 minutes) tailored to your needs, or one-off sessions to get started</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Guidance focused on improving business and team effectiveness</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Flexible pricing options to support individuals at different stages of their journey</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={officeWorkspace} alt="One-on-one mentoring session in modern office" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pair Coaching Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img src={teamCollaboration} alt="Pair coaching session with dual perspectives" className="rounded-lg w-full h-auto object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="h2 mb-8">Pair Coaching</h2>
              <p className="body-text text-lg mb-8">
                Two minds are better than one. Our Pair Coaching brings together coaches with complementary perspectives and over 10 years of experience, providing a richer, more holistic approach.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Gain dual perspectives from varied team, technical, and cultural experiences</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Real-time feedback to address challenges immediately</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Holistic insight: one coach notices what the other may not, ensuring comprehensive guidance</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="body-text">Co-creation of ideas for stronger outcomes and more effective solutions</p>
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
            {/* Team Coaching */}
            <Card className="p-8">
              <h3 className="h3 mb-6">Team Coaching</h3>
              <p className="body-text mb-6">
                Whether introducing Agile to a new team or refreshing an existing one, team coaching ensures consistent, practical, and actionable guidance:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Support for Agile principles, mindset, and practices</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">On-site or remote coaching tailored to team dynamics</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Role support: Scrum Master, Product Owner, or team-specific consulting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Experience-driven advice drawn from a variety of industries and environments</p>
                </div>
              </div>
            </Card>

            {/* Role-Based Coaching */}
            <Card className="p-8">
              <h3 className="h3 mb-6">Role-Based Coaching</h3>
              <p className="body-text mb-6">
                Ideal for individuals stepping into new roles or adopting Agile ways of working:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Coaching and mentoring for Scrum Masters, Business Analysts, Product Owners, Project Managers, and other delivery roles</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">On-site or remote sessions based on your organization's convenience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="body-text text-sm">Practical guidance to accelerate confidence, performance, and impact</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Agile Journey Assessment */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2 mb-8">Agile Journey Assessment</h2>
            <p className="body-text text-lg mb-12">
              Understand where your organization stands on its Agile transformation and identify opportunities for improvement:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-4"></div>
                <p className="body-text">Assessment across technical maturity, culture, leadership, program/project, team, or role-level areas</p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-4"></div>
                <p className="body-text">Short-, medium-, and long-term improvement recommendations</p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-4"></div>
                <p className="body-text">Clear insights to guide the next steps in your Agile journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 mb-8">Transform Your Teams, Roles, and Portfolios</h2>
          <p className="body-text text-lg mb-12 opacity-90">
            Ready to start your Agile transformation with coaching that delivers measurable impact? Let's discuss how we can help you build capabilities and empower your teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-base" asChild>
              <Link to="/contact">START YOUR COACHING JOURNEY</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
              
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>;
};
export default AgileCoaching;