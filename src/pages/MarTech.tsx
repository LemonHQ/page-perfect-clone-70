import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, ChevronDown, Diamond, DollarSign, Eye } from "lucide-react";
const MarTech = () => {
  return <div className="min-h-screen">
      {/* Hero Section - Increase the ROI of development */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h6 mb-4 tracking-wider uppercase">
                MARTECH SOFTWARE TEAM
              </div>
              <h1>
                Increase the ROI of development
              </h1>
              <p className="body-text text-lg mb-8">
                Marketing technology is a constant battle to <span className="font-semibold">deliver the right message, at the right time, to the right person.</span> Leverage the latest technology advancements, stay ahead of regulation, and prevent security threats with a dedicated team of top experts. We'll find, manage, and scale <span className="font-semibold">a cost-optimal team of MarTech experts from Bangalore's vast talent pool</span> of engineers and marketing experts, fully integrated with your company and culture.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <img src="/lovable-uploads/588a9cc4-ee1d-4279-9044-8f5bcff8e845.png" alt="MarTech developer working on laptop" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-background">
              <div className="w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Diamond className="w-8 h-8 text-yellow-foreground" />
              </div>
              <h3 className="h5 text-center mb-4">Gain niche skills</h3>
              <p className="body-text text-center">
                By building an offshore team in the "Silicon Valley of Asia", you can <span className="font-semibold">scale a team of experts</span> in any skill or role you need.
              </p>
            </Card>

            <Card className="p-8 bg-background">
              <div className="w-16 h-16 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-turquoise" />
              </div>
              <h3 className="h5 text-center mb-4">Increase delivery</h3>
              <p className="body-text text-center">
                Get more from your hiring budget and <span className="font-semibold">take advantage of the lower overheads</span> in Bangalore, India, to deliver value to users faster.
              </p>
            </Card>

            <Card className="p-8 bg-background">
              <div className="w-16 h-16 bg-panel-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-panel-medium" />
              </div>
              <h3 className="h5 text-center mb-4">Complete visibility</h3>
              <p className="body-text text-center">
                Manage your offshore team just like your in-house team. <span className="font-semibold">Use the same systems and workflows</span> for complete visibility and management.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom-built MarTech engineering teams */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h6 mb-4 tracking-wider uppercase">
              SECTOR EXPERTISE
            </div>
            <h2>
              Custom-built MarTech engineering teams
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-turquoise text-turquoise-foreground relative overflow-hidden">
              <div className="absolute top-4 right-4 w-6 h-6 bg-turquoise-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-xs">+</span>
              </div>
              <div className="h-32 bg-turquoise-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold">AD</span>
              </div>
              <h3 className="h6">Advertising Technology (AdTech)</h3>
            </Card>

            <Card className="p-6 text-center bg-turquoise text-turquoise-foreground relative overflow-hidden">
              <div className="absolute top-4 right-4 w-6 h-6 bg-turquoise-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-xs">+</span>
              </div>
              <div className="h-32 bg-turquoise-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-turquoise-foreground/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-turquoise-foreground rounded-full"></div>
                </div>
              </div>
              <h3 className="h6">Influencer Marketing</h3>
            </Card>

            <Card className="p-6 text-center bg-yellow text-yellow-foreground relative overflow-hidden">
              <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-yellow-foreground text-xs">+</span>
              </div>
              <div className="h-32 bg-yellow-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-12 bg-yellow-foreground/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>
              <h3 className="font-semibold">Mobile Marketing</h3>
            </Card>

            <Card className="p-6 text-center bg-turquoise text-turquoise-foreground relative overflow-hidden">
              <div className="absolute top-4 right-4 w-6 h-6 bg-turquoise-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-xs">+</span>
              </div>
              <div className="h-32 bg-turquoise-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="flex space-x-2">
                  <div className="w-4 h-8 bg-turquoise-foreground/50 rounded"></div>
                  <div className="w-4 h-6 bg-turquoise-foreground/50 rounded"></div>
                  <div className="w-4 h-4 bg-turquoise-foreground/50 rounded"></div>
                </div>
              </div>
              <h3 className="font-semibold">Omnichannel Marketing</h3>
            </Card>

            <Card className="p-6 text-center bg-yellow text-yellow-foreground relative overflow-hidden">
              <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-yellow-foreground text-xs">+</span>
              </div>
              <div className="h-32 bg-yellow-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">#</span>
              </div>
              <h3 className="font-semibold">Content Marketing</h3>
            </Card>

            <Card className="p-6 text-center bg-turquoise text-turquoise-foreground relative overflow-hidden">
              <div className="absolute top-4 right-4 w-6 h-6 bg-turquoise-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-xs">+</span>
              </div>
              <div className="h-32 bg-turquoise-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-6 h-6 bg-turquoise-foreground/50 rounded"></div>
                  <div className="w-6 h-6 bg-turquoise-foreground/50 rounded"></div>
                </div>
              </div>
              <h3 className="font-semibold">Social Media</h3>
            </Card>

            <Card className="p-6 text-center bg-turquoise text-turquoise-foreground relative overflow-hidden">
              <div className="absolute top-4 right-4 w-6 h-6 bg-turquoise-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-xs">+</span>
              </div>
              <div className="h-32 bg-turquoise-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-turquoise-foreground/30 rounded-full"></div>
              </div>
              <h3 className="font-semibold">Marketing Automation</h3>
            </Card>

            <Card className="p-6 text-center bg-yellow text-yellow-foreground relative overflow-hidden">
              <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-yellow-foreground text-xs">+</span>
              </div>
              <div className="h-32 bg-yellow-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-3 h-8 bg-yellow-foreground/50 rounded"></div>
                  <div className="w-3 h-12 bg-yellow-foreground/50 rounded"></div>
                  <div className="w-3 h-6 bg-yellow-foreground/50 rounded"></div>
                </div>
              </div>
              <h3 className="font-semibold">Marketing Analytics</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* Bangalore: MarTech talent hub */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                RICH TALENT POOL
              </div>
              <h2>
                Bangalore: MarTech talent hub
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <span className="font-semibold text-foreground">HubSpot, Zoom, Konnect, Zoho, VWO</span> — just a few MarTech giants who have development centres in Bangalore, sometimes known as the "Silicon Valley of Asia". Our 7-step recruitment process secures the <span className="font-semibold text-foreground">top 1% of Bangalore's more than 2 million tech talent pool</span>, and our unique model means you get a team that's truly yours. <span className="font-semibold text-foreground">Your employees, your systems, your culture.</span> So you can scale fast and scale sustainably.
              </p>
            </div>
            <div className="bg-background rounded-lg overflow-hidden">
              <img src="/lovable-uploads/45afd01d-11e1-4cca-a41f-f0f33282d9fe.png" alt="Female developer working on MarTech solutions" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies and Roles */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technologies */}
            <div>
              <div className="mb-8">
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-panel-medium text-background px-4 py-2 rounded-full text-sm font-medium">TECHNOLOGIES</span>
                  <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">Back-end</span>
                  <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">Front-end</span>
                  <span className="bg-yellow text-yellow-foreground px-4 py-2 rounded-full text-sm font-medium">Database</span>
                  <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">Cloud</span>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SQL</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-lg">🧠</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-400 rounded flex items-center justify-center">
                    <span className="text-white text-lg">🦢</span>
                  </div>
                  <span className="text-lg font-medium">...and more</span>
                </div>
              </div>
            </div>

            {/* Roles */}
            <div>
              <div className="mb-8">
                <div className="bg-panel-medium text-background px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
                  ROLES
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {["Front-end Developer", "ERP Developer", "Back-end Developer", "Project Manager", "Scrum Master", "Full-stack Developer", "Data Analyst", "UI Designer/Developer", "Mobile App Developer", "API Developer", "Cloud Developer", "DevOps Engineer", "Systems Architect", "Security Engineer", "Integration Specialist", "UX Researcher", "Business Analyst", "Product Owner", "Content Management Specialist", "Machine Learning Engineer", "Quality Assurance Engineer", "Database Administrator"].map((role, index) => <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-turquoise rounded flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-turquoise-foreground" />
                      </div>
                      <span className="text-sm font-medium">{role}</span>
                      {index === 21 && <span className="text-sm text-muted-foreground">...and more</span>}
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The smarter way to scale */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              WHY CHOOSE H2
            </div>
            <h2>
              The smarter way to scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our unique model gives you a team in India so good it feels in-house. <span className="font-semibold text-foreground">And we handle all the hassle.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-background rounded-lg overflow-hidden">
              <img src="/lovable-uploads/3845201e-79ff-42cc-9d3c-245e85dbf645.png" alt="Team collaboration in office" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Hired just for you</h3>
                <p className="text-lg text-muted-foreground">
                  We speak to <span className="font-semibold text-foreground">100 candidates for every position</span>, and test them against your specific requirements, so you only get the best.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Tech teams built to last</h3>
                <p className="text-lg text-muted-foreground">
                  Your team gets regular engagement activities and team building, so you get happy <span className="font-semibold text-foreground">employees who stay on average 3-5 years.</span>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Grow on demand</h3>
                <p className="text-lg text-muted-foreground">
                  Our turnkey recruitment process gets the <span className="font-semibold text-foreground">top 1% talent from Bangalore's 2M+ talent pool</span>, so you can scale whenever you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your dedicated offshore team can help you with */}
      <section className="py-24 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-turquoise-foreground/80 mb-4 tracking-wider uppercase">
              MARTECH SOFTWARE SOLUTIONS
            </div>
            <h2>
              Your dedicated offshore team can help you with
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📢</span>
                </div>
                <span className="text-lg font-semibold">Marketing and advertising platforms</span>
              </div>
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>

            <div className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-turquoise/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💾</span>
                </div>
                <span className="text-lg font-semibold">Big data solutions</span>
              </div>
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>

            <div className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <span className="text-lg font-semibold">Data analytics & visualisation</span>
              </div>
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>

            <div className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-turquoise/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <span className="text-lg font-semibold">Affiliate marketing</span>
              </div>
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>

            <div className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <span className="text-lg font-semibold">Marketing CRM development</span>
              </div>
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>

            <div className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-turquoise/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <span className="text-lg font-semibold">AI & chatbots</span>
              </div>
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>

            <div className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <span className="text-lg font-semibold">Digital content & distribution management</span>
              </div>
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>

            <div className="bg-background rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-turquoise/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎭</span>
                </div>
                <span className="text-lg font-semibold">Online media platforms & digital media apps</span>
              </div>
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* We build the best MarTech teams - Case Study */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              FEATURED CASE STUDIES
            </div>
            <h2>
              We build the best MarTech teams
            </h2>
          </div>

          <Card className="p-12 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-muted/30 rounded-lg overflow-hidden">
                <img src="/lovable-uploads/42eaf101-58e4-49f6-bb88-4488aede3078.png" alt="Ykone team collaboration" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                  MARKETING & ADVERTISING
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Offshore team delivers game-changing product for Ykone
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Find out how a eight-person engineering team helped Ykone's CEO realise his vision for a <span className="font-semibold text-foreground">powerful flagship product</span> and drive the business to new heights.
                </p>
                <Button className="bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold px-8 py-3" asChild>
                  <Link to="/case-studies">READ MORE →</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Your trusted partner for MarTech talent */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                WHY H2?
              </div>
              <h2>
                Your trusted partner for MarTech talent
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-turquoise-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Leverage our MarTech experience</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-turquoise-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Take advantage of our proven model</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-turquoise-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Enjoy fully managed operations</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-turquoise-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Collaborate easily with complete cultural fit</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-turquoise-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Access a massive talent pool in Bangalore</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-turquoise-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Rest easy with a security-certified partner</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden">
              <img src="/lovable-uploads/fbd75eee-b6e3-4946-ad62-7b5a723455b1.png" alt="Team collaborating on MarTech solutions" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk Form Section */}
      <section className="py-16 bg-panel-soft text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-foreground/70 tracking-wide mb-4">
                FROM 5 TO 100+ ENGINEERS
              </div>
             <h2>
                Set up a world-class MarTech team in Bangalore
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-turquoise-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-turquoise mb-2">Tell us what you need</h3>
                    <p className="text-navy-foreground/80">Fill in your details — your data is 100% confidential and secure</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-turquoise-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-turquoise mb-2">Talk to our experts</h3>
                    <p className="text-navy-foreground/80">One of our team members will contact you promptly for a brief discovery call</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-turquoise-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-turquoise mb-2">Get a tailored proposal</h3>
                    <p className="text-navy-foreground/80">We'll prepare a solution matched to your needs and timeline</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8">
              <div className="mb-6">
                <div className="bg-turquoise text-turquoise-foreground px-4 py-2 rounded-full inline-block font-semibold">
                  Let's talk
                </div>
              </div>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full name*" className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Business email*" className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                  <input type="tel" placeholder="Phone number*" className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                </div>
                <input type="text" placeholder="Company name*" className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                <textarea placeholder="Message*" rows={4} className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"></textarea>
                
                <Button type="submit" className="w-full bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold py-3 rounded-full">
                  SEND NOW →
                </Button>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-turquoise rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>100% confidential</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-turquoise rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>We sign NDAs</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  To give you the content requested, we need to store and process your personal data. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
           <h2>
              Our locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Global presence with local expertise to serve your MarTech development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Bangalore, India</h3>
              <p className="text-muted-foreground">Silicon Valley of Asia - Our main development hub</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🇬🇧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">London, UK</h3>
              <p className="text-muted-foreground">European headquarters and client services</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-turquoise-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <h3 className="text-xl font-bold mb-2">New York, USA</h3>
              <p className="text-muted-foreground">North American operations and partnerships</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>;
};
export default MarTech;