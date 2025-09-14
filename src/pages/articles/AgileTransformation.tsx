import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2, Twitter, Linkedin, Facebook, Mail, Copy } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import agileTransformationImage from "@/assets/articles/agile-transformation-team.jpg";
import ContactSection from "@/components/ContactSection";

const AgileTransformation = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Split Layout */}
      <section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
              <Link to="/insights" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
              
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4 text-xs font-medium">INSIGHTS</Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                The Future of Agile Transformation: Beyond Frameworks to Cultural Change
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 min read
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  March 15, 2024
                </div>
              </div>
            </div>
            
            {/* Right Side - Hero Image with Geometric Overlay */}
            <div className="relative">
              <img 
                src={agileTransformationImage} 
                alt="Agile transformation team collaboration" 
                className="w-full h-full object-cover"
              />
              {/* Geometric Overlay Elements */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-90"></div>
              <div className="absolute bottom-0 left-16 w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-90"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 border-b bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            {/* <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center overflow-hidden">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-muted-foreground">Senior Agile Transformation Consultant</p>
            </div> */}
            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="cursor-pointer">
                    <Twitter className="w-4 h-4 mr-2" />
                    Share on Twitter
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Share on LinkedIn
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Facebook className="w-4 h-4 mr-2" />
                    Share on Facebook
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Mail className="w-4 h-4 mr-2" />
                    Share via Email
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Link
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
              In today's rapidly evolving business landscape, organizations are discovering that true agile transformation goes far beyond implementing frameworks like Scrum or Kanban. The most successful transformations focus on cultural change—creating environments where adaptability, collaboration, and continuous learning become ingrained in the organizational DNA.
            </p>

          <h2 className="mt-8 mb-4">The Evolution of Agile Thinking</h2>
          <p>
            When agile methodologies first emerged in the software development world, they promised a revolutionary approach to project management and product delivery. The Agile Manifesto, with its four core values and twelve principles, laid the foundation for what would become a global movement. However, as organizations across industries began adopting agile practices, many discovered that simply implementing new ceremonies and artifacts wasn't enough to achieve the promised benefits.
          </p>

          <p>
            The challenge lies in the fact that agile transformation isn't merely a process change—it's a fundamental shift in how organizations think, work, and respond to uncertainty. This shift requires more than new tools or methodologies; it demands a complete cultural transformation that touches every aspect of the organization, from leadership behaviors to employee mindsets.
          </p>

          <h2 className="mt-8 mb-4">Beyond the Framework: Understanding Cultural Transformation</h2>
          <p>
            Cultural transformation in the context of agile represents a move from traditional command-and-control structures to more collaborative, empowered, and adaptive ways of working. This transformation involves several key dimensions:
          </p>

          <h3 className="mt-6 mb-3">Psychological Safety and Trust</h3>
          <p>
            At the heart of any successful agile transformation lies psychological safety—the belief that team members can speak up, take risks, and make mistakes without fear of punishment or humiliation. Organizations that excel in agile transformation invest heavily in creating environments where employees feel safe to experiment, fail fast, and learn from their experiences.
          </p>

          <p>
            This psychological safety must extend beyond individual teams to encompass entire organizations. Leaders play a crucial role in modeling vulnerability, admitting their own mistakes, and demonstrating that learning is valued over perfection. When employees see leaders embracing uncertainty and adapting their approaches based on new information, they're more likely to adopt similar behaviors themselves.
          </p>

          <h3 className="mt-6 mb-3">Distributed Decision-Making</h3>
          <p>
            Traditional organizations often concentrate decision-making power at the top of the hierarchy, creating bottlenecks that slow down response times and reduce agility. Successful agile transformations push decision-making authority closer to the work, empowering teams to make choices about how they deliver value to customers.
          </p>

          <p>
            This shift requires leaders to move from being decision-makers to becoming decision-enablers. They must provide clear context, establish guardrails, and trust their teams to make informed choices. This doesn't mean abandoning all governance or oversight, but rather creating systems that enable rapid decision-making while maintaining appropriate controls.
          </p>

          <h3 className="mt-6 mb-3">Customer-Centricity as a Core Value</h3>
          <p>
            While many organizations claim to be customer-focused, true agile transformation places the customer at the center of every decision. This means regularly engaging with customers, incorporating their feedback into product development cycles, and being willing to pivot based on changing customer needs and market conditions.
          </p>

          <p>
            Customer-centricity extends beyond product teams to include all functions within the organization. Finance teams need to understand how their processes impact customer delivery timelines. HR departments must align their practices with the need for rapid team formation and skill development. Marketing teams must be prepared to adapt messaging based on evolving product capabilities and customer insights.
          </p>

          <h2 className="mt-8 mb-4">The Leadership Imperative</h2>
          <p>
            Leadership behavior is perhaps the most critical factor in determining the success or failure of an agile transformation. Leaders set the tone for the entire organization, and their actions often speak louder than their words. Several key leadership behaviors are essential for driving cultural change:
          </p>

          <h3 className="mt-6 mb-3">Modeling Agile Behaviors</h3>
          <p>
            Leaders must demonstrate the behaviors they want to see throughout the organization. This includes being transparent about challenges and uncertainties, actively seeking feedback from their teams, and being willing to change course when presented with new information. Leaders who continue to operate in traditional command-and-control modes while expecting their teams to embrace agile principles create cognitive dissonance that undermines transformation efforts.
          </p>

          <h3 className="mt-6 mb-3">Investing in Continuous Learning</h3>
          <p>
            Agile transformation requires new skills and competencies at all levels of the organization. Leaders must invest in comprehensive learning and development programs that go beyond traditional training approaches. This includes providing opportunities for experiential learning, mentoring, and peer-to-peer knowledge sharing.
          </p>

          <p>
            Successful organizations create learning cultures where continuous skill development is not just encouraged but expected. They provide time and resources for employees to experiment with new approaches, attend conferences, and participate in communities of practice. This investment in learning pays dividends by creating more adaptable and capable teams.
          </p>

          <h2 className="mt-8 mb-4">Overcoming Common Transformation Challenges</h2>
          <p>
            Every organization faces unique challenges in their agile transformation journey, but several patterns emerge consistently across different industries and contexts:
          </p>

          <h3 className="mt-6 mb-3">Resistance to Change</h3>
          <p>
            Change resistance is natural and should be expected rather than eliminated. Successful transformations acknowledge this resistance and work to understand its root causes. Often, resistance stems from fear—fear of job loss, fear of failure, or fear of the unknown. Addressing these fears through transparent communication, skill development opportunities, and clear role definitions can help reduce resistance over time.
          </p>

          <p>
            It's also important to recognize that some resistance may be rational and valuable. Employees who have deep institutional knowledge may raise legitimate concerns about proposed changes. Engaging with these concerns constructively can lead to better transformation approaches and help identify potential risks early in the process.
          </p>

          <h3 className="mt-6 mb-3">Scaling Agile Practices</h3>
          <p>
            Many organizations struggle with scaling agile practices beyond small teams to larger programs and portfolios. This challenge is particularly acute in large enterprises with complex organizational structures and interdependencies. Successful scaling requires careful attention to alignment mechanisms, governance structures, and communication channels.
          </p>

          <p>
            Rather than trying to scale specific practices or frameworks, successful organizations focus on scaling the underlying principles and values of agility. They create alignment through shared vision and objectives rather than standardized processes. This approach allows different parts of the organization to adapt agile principles to their specific context while maintaining overall coherence.
          </p>

          <h2 className="mt-8 mb-4">Measuring Cultural Change</h2>
          <p>
            One of the most challenging aspects of cultural transformation is measurement. Traditional metrics often fail to capture the subtleties of cultural change, leading organizations to focus on easily quantifiable but potentially misleading indicators.
          </p>

          <h3 className="mt-6 mb-3">Beyond Velocity and Burndown Charts</h3>
          <p>
            While metrics like team velocity and burndown charts provide useful information about team performance, they don't capture the deeper cultural changes that drive long-term success. Organizations need to develop more sophisticated measurement approaches that include indicators of psychological safety, employee engagement, customer satisfaction, and organizational learning.
          </p>

          <p>
            Effective measurement approaches combine quantitative metrics with qualitative assessments. Regular surveys, focus groups, and cultural assessments can provide insights into how employees are experiencing the transformation. These qualitative measures should be combined with business outcomes to create a comprehensive picture of transformation progress.
          </p>

          <h3 className="mt-6 mb-3">Leading and Lagging Indicators</h3>
          <p>
            Successful organizations distinguish between leading indicators (behaviors and practices that predict future success) and lagging indicators (outcomes that result from those behaviors). Leading indicators might include the frequency of customer interactions, the speed of decision-making, or the level of cross-functional collaboration. Lagging indicators include traditional business metrics like revenue growth, customer retention, and time-to-market.
          </p>

          <p>
            By tracking both types of indicators, organizations can identify problems early and make adjustments before they impact business outcomes. This approach also helps maintain momentum during the transformation by celebrating progress on leading indicators even when lagging indicators haven't yet shown improvement.
          </p>

          <h2 className="mt-8 mb-4">The Path Forward</h2>
          <p>
            The future of agile transformation lies in recognizing that it's fundamentally about people and culture, not processes and tools. Organizations that focus on creating environments where people can do their best work, where learning is valued over knowing, and where adaptation is preferred over adherence to plans will be best positioned to thrive in an increasingly uncertain world.
          </p>

          <p>
            This doesn't mean abandoning all structure or processes, but rather creating adaptive systems that can evolve with changes in the business environment. It means investing in people development, fostering psychological safety, and building organizational capabilities that enable rapid response to new opportunities and challenges.
          </p>

          <h2 className="mt-8 mb-4">Conclusion</h2>
          <p>
            True agile transformation extends far beyond the adoption of specific frameworks or methodologies. It requires a fundamental shift in organizational culture—one that values collaboration over competition, learning over knowing, and adaptation over adherence to predetermined plans. Organizations that successfully navigate this cultural transformation will find themselves better equipped to respond to uncertainty, deliver value to customers, and create engaging work environments for their employees.
          </p>

            <p>
              The journey isn't easy, and there are no universal solutions that work for every organization. However, by focusing on the human elements of transformation—trust, psychological safety, continuous learning, and customer-centricity—organizations can create the conditions necessary for sustainable agile transformation. The future belongs to organizations that can adapt quickly while maintaining their core values and purpose, and cultural transformation is the key to achieving this balance.
            </p>

            <div className="mt-12 p-8 bg-muted/30 rounded-lg">
              <h3 className="mt-6 mb-3">About the Author</h3>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">
                    Sarah is a Senior Agile Transformation Consultant with over 15 years of experience helping Fortune 500 companies navigate complex organizational change. She specializes in cultural transformation and has led agile transformations across multiple industries including finance, healthcare, and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ContactSection />
    </div>
  );
};

export default AgileTransformation;