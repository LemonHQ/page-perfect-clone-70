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

      {/* Work together in holistic alignment - Technology */}
      <section className="py-24 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-turquoise-foreground/80 mb-4 tracking-wider uppercase">
              360° COORDINATION
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-turquoise-foreground mb-8 leading-tight">
              Work together in holistic alignment
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-turquoise-foreground mb-8">Technology</h3>
              <p className="text-xl text-turquoise-foreground/90 mb-8">
                From developers proficient at enterprise-grade web applications, to engineers fluent in specific programming languages like Python, C++, and Java — you'll find them in Bangalore with our finely tuned recruitment model.
              </p>
            </div>
            <div className="bg-turquoise-light rounded-lg p-8">
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-purple-600 font-bold">.NET</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-blue-600 font-bold">PHP</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-red-500 font-bold">Laravel</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-orange-500 font-bold">HTML5</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-red-600 font-bold">Angular</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-green-600 font-bold">Node.js</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-blue-500 font-bold">React</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-orange-600 font-bold">Java</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-blue-800 font-bold">Python</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-purple-500 font-bold">C#</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-purple-700 font-bold">C++</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-gray-600 font-bold">+more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-turquoise rounded-lg p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-64 h-64 mx-auto relative">
                  <div className="absolute inset-0 rounded-full border-8 border-turquoise-foreground/20"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">
                    TEST
                  </div>
                  <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded text-sm font-medium">
                    DEVELOPMENT
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium">
                    REVIEW
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2 bg-cyan-600 text-white px-4 py-2 rounded text-sm font-medium">
                    DEPLOY
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 bg-orange-500 text-white px-6 py-3 rounded-r-full font-bold">
                  PLAN
                </div>
                <div className="absolute bottom-8 left-20 bg-pink-500 text-white px-6 py-3 rounded font-bold">
                  DESIGN
                </div>
                <div className="absolute bottom-8 right-8 bg-teal-500 text-white px-6 py-3 rounded-l-full font-bold">
                  LAUNCH
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Methodology</h3>
              <p className="text-xl text-muted-foreground">
                Because we hire your development team in accordance to your unique requirements, you'll get engineers who excel using the same methodologies as your team at home such as Agile, Scrum, or Lean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Communication</h3>
              <p className="text-xl text-muted-foreground">
                Your engineers in Bangalore use the same tools and communication channels as your team at home. And, as English is the language of the development industry in India you'll be speaking the same language, literally.
              </p>
            </div>
            <div className="bg-turquoise-light rounded-lg p-8">
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-blue-600 font-bold">Teams</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-multicolor font-bold">Slack</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-blue-500 font-bold">Zoom</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-green-600 font-bold">Meet</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-blue-700 font-bold">Timer</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-blue-600 font-bold">Trello</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-green-500 font-bold">Clock</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-blue-500 font-bold">Skype</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-orange-500 font-bold">Figma</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-red-500 font-bold">Kliq</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-green-600 font-bold">Chat</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                  <span className="text-gray-600 font-bold">+more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Augmentation done awesomely */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              TEAM EXTENSIONS OF ANY SIZE
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Augmentation done awesomely
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✕</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">YOU AVOID</h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Average engineers</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Disjointed collaboration between teams</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Developers lacking the specifics you need</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Lacklustre security protocols</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Developers not invested in your strategic goals</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Complicated logistics and administration</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Long-winded recruitment process</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center">
                  <span className="text-turquoise-foreground text-xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">YOU GET</h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Elite engineers from an outstanding talent pool</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Seamless cross-team working process</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Specialists sourced to your skill requirements</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Security measures at home mirrored in Bangalore</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Engineers fully aligned with your company vision</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Managed operations with an expert partner</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Rapid team assembly</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Seamless and secure team extension */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              COLLABORATE EASILY
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Seamless and secure team extension
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-12 bg-yellow-foreground rounded-sm relative">
                  <div className="absolute -top-2 -left-1 w-3 h-6 bg-yellow-foreground rounded-sm transform -rotate-12"></div>
                  <div className="absolute -top-2 -right-1 w-3 h-6 bg-yellow-foreground rounded-sm transform rotate-12"></div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fill the skills gap you have in your existing team at lightning speed
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-16 bg-yellow-foreground rounded-lg relative">
                  <div className="absolute top-2 left-1 right-1 h-3 bg-yellow/60 rounded-full"></div>
                  <div className="absolute top-6 left-1 right-1 h-3 bg-yellow/60 rounded-full"></div>
                  <div className="absolute top-10 left-1 right-1 h-3 bg-yellow/60 rounded-full"></div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Control over the workflow and direct communication within the team
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-8 bg-turquoise rounded-lg border-4 border-turquoise/60 relative">
                  <div className="absolute inset-1 bg-turquoise-foreground rounded-sm">
                    <div className="w-full h-full bg-gradient-to-r from-turquoise/40 to-turquoise/60 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We manage your administration, logistics, payroll, and HR
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-12 bg-turquoise rounded-lg relative">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-turquoise-foreground rounded-full"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-turquoise-foreground rounded-full"></div>
                  <div className="absolute bottom-3 left-1 right-1 h-2 bg-turquoise-foreground rounded-full"></div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                H2 tailor your security measures based on your operational requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h6 font-semibold tracking-wide mb-4">
                FROM 5 TO 100+ ENGINEERS
              </div>
              <h2 className="h2 mb-8">
                Set up a world-class tech team in Bangalore
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Tell us what you need</h3>
                    <p className="body-text">Fill in your details — your data is 100% confidential and secure</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Talk to our experts</h3>
                    <p className="body-text">One of our team members will contact you promptly for a brief discovery call</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Get a tailored proposal</h3>
                    <p className="body-text">We'll prepare a solution matched to your needs and timeline</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="mb-6">
                <div className="h6 font-semibold">
                  Let's talk
                </div>
              </div>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full name*" className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Business email*" className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                  <input type="tel" placeholder="Phone number*" className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <input type="text" placeholder="Company name*" className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <textarea placeholder="Message*" rows={4} className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"></textarea>
                
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3 rounded-full">
                  SEND NOW →
                </Button>
                
                <div className="caption flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>100% confidential</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span>We sign NDAs</span>
                  </div>
                </div>
                
                <p className="caption">
                  To give you the content requested, we need to store and process your personal data. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 mb-8">Ready to Extend Your Team?</h2>
          <p className="body-text text-lg mb-12 opacity-90">
            Let's discuss how we can help you scale your capabilities and accelerate your transformation and portfolio delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-base" asChild>
              <Link to="/contact">START YOUR EXTENSION</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
              <Link to="/our-approach">OUR APPROACH</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default TeamExtension;