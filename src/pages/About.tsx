import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import heroTeam from "@/assets/hero-team.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import diverseTeam from "@/assets/diverse-team.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1>About Us</h1>
            <p className="body-text text-lg max-w-4xl mx-auto">
              For decades, enterprises have faced a persistent challenge: executing ambitious transformation programs at scale while maintaining speed, alignment, and measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2>Our Purpose</h2>
              <p className="body-text text-lg mb-8">
                Strategies are often meticulously crafted at the executive level, yet many initiatives struggle in execution due to misalignment, resource bottlenecks, or unclear accountability.
              </p>
              <p className="body-text text-lg mb-8">
                [Your Company Name] was created to address this gap. Our vision is simple but powerful: to help organizations translate strategy into action, accelerate delivery, and achieve outcomes that last.
              </p>
              <p className="body-text text-lg">
                We recognized that transformation succeeds only when programs are actively guided, teams are empowered, and processes are designed to enable sustainable progress.
              </p>
            </div>
            <div className="relative">
              <img 
                src={heroTeam} 
                alt="Team working on strategic transformation initiatives" 
                className="rounded-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Our Approach</h2>
            <p className="body-text text-lg max-w-4xl mx-auto">
              Our approach blends strategic insight with hands-on execution. We work alongside enterprises to:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3>Accelerate Portfolios</h3>
              <p className="body-text">
                By prioritizing initiatives, aligning investments, and driving consistent delivery across your organization.
              </p>
            </Card>
            <Card className="p-8">
              <h3>Recover Programs</h3>
              <p className="body-text">
                Underperforming programs by identifying obstacles, restoring momentum, and ensuring initiatives meet business objectives.
              </p>
            </Card>
            <Card className="p-8">
              <h3>Embed Agile Practices</h3>
              <p className="body-text">
                Across teams and leadership, creating organizations that can adapt quickly and deliver continuously.
              </p>
            </Card>
            <Card className="p-8">
              <h3>Optimize Operations</h3>
              <p className="body-text">
                Portfolio operations by establishing governance, reporting, and processes that provide clarity, transparency, and predictability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <img src={teamCollaboration} alt="Team collaboration session" className="rounded-lg w-full h-48 object-cover" />
                <img src={officeWorkspace} alt="Modern office workspace" className="rounded-lg w-full h-48 object-cover" />
                <img src={diverseTeam} alt="Diverse transformation team" className="rounded-lg w-full h-48 object-cover col-span-2" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2>Deep Experience, Practical Results</h2>
              <p className="body-text text-lg mb-8">
                Over the years, we've seen firsthand that transformation is rarely about tools or frameworks — it's about people, processes, and purpose.
              </p>
              <p className="body-text text-lg mb-8">
                By combining deep industry knowledge with practical delivery expertise, we help organizations navigate complexity, accelerate results, and build the capabilities that sustain success long after individual programs conclude.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2>Our Mission</h2>
          <p className="body-text text-lg mb-8">
            At our core, we exist to make enterprise transformation achievable, measurable, and lasting — turning ambitious plans into tangible, repeatable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-base" asChild>
              <Link to="/contact">WORK WITH US</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
              <Link to="/case-studies">VIEW OUR WORK</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>How We Help</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center">
              <h3>Portfolio Development</h3>
              <p className="body-text mb-6">Strategic guidance and hands-on support for transformation initiatives</p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link to="/portfolio-development">Learn More →</Link>
              </Button>
            </Card>
            <Card className="p-8 text-center">
              <h3>Product Recovery</h3>
              <p className="body-text mb-6">Turn around struggling initiatives and restore momentum</p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link to="/product-recovery">Learn More →</Link>
              </Button>
            </Card>
            <Card className="p-8 text-center">
              <h3>Agile Coaching</h3>
              <p className="body-text mb-6">Build sustainable agile practices and high-performing teams</p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link to="/agile-coaching">Learn More →</Link>
              </Button>
            </Card>
            <Card className="p-8 text-center">
              <h3>Portfolio Operations</h3>
              <p className="body-text mb-6">Streamline workflows and implement scalable processes</p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link to="/portfolio-operations">Learn More →</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default About;