import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, ArrowUp, Users, Handshake, MessageCircle, Rocket } from "lucide-react";

const DedicatedTeam = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Dedicated Development Team
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Does the talent you need feel out of reach?
            </p>
            <p className="text-2xl lg:text-3xl font-bold text-foreground">
              Build your tech team in Bangalore
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowUp className="w-12 h-12 text-turquoise" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Simple scaling</h3>
              <p className="text-muted-foreground">
                Scale your development capacity without spending time on hiring or onboarding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-12 h-12 text-yellow-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Managed Operations</h3>
              <p className="text-muted-foreground">
                It's your dedicated team in Bangalore, so you're in charge of the output. We're there to help with <span className="font-semibold text-foreground">all the heavy lifting.</span>
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-turquoise" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Employee engagement</h3>
              <p className="text-muted-foreground">
                Your developers are an integral part of your team and we make sure <span className="font-semibold text-foreground">they're aligned and engaged.</span>
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-panel-light rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-12 h-12 text-navy" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy communication</h3>
              <p className="text-muted-foreground">
                English is the <span className="font-semibold text-foreground">language of the development industry in India</span>, facilitating easy communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Section */}
      <section className="py-24 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-yellow-foreground mb-8 leading-tight">
                Spend less time on screening, and more time on scaling
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="flex items-end space-x-4">
                  <div className="w-16 h-20 bg-yellow-foreground/30 rounded-lg"></div>
                  <div className="w-16 h-32 bg-yellow-foreground/50 rounded-lg"></div>
                  <div className="w-16 h-44 bg-yellow-foreground/70 rounded-lg"></div>
                  <div className="w-16 h-56 bg-yellow-foreground/90 rounded-lg"></div>
                  <div className="w-16 h-64 bg-yellow-foreground rounded-lg"></div>
                </div>
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-turquoise rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bangalore's got talent */}
      <section className="py-24 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/8ae40f79-74aa-4f81-9e1a-e6af4e424e92.png" 
                alt="Diverse engineering team in Bangalore"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-turquoise-foreground/80 mb-4 tracking-wider uppercase">
                ASIA'S SILICON VALLEY
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-turquoise-foreground mb-8 leading-tight">
                Bangalore's got talent
              </h2>
              <p className="text-xl text-turquoise-foreground/90 mb-8 leading-relaxed">
                Wave goodbye to lengthy and disruptive recruitment drives and say hello to quick scaling. We handpick the cream of the crop and <span className="font-semibold text-turquoise-foreground">build you a team from the top 1%</span> of Bangalore's engineering talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* It's a place you can call home */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                YOU'RE IN GOOD COMPANY
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                It's a place that you can call home
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Leverage the talent of India's top developers and access skills you can't find locally. With 90k engineers graduating every year and <span className="font-semibold text-foreground">the R&D centres of the world's top tech giants</span>, Asia's Silicon Valley is a dynamic hub of innovation and a place you'll feel right at home in.
              </p>
              <Button 
                className="bg-panel-medium text-background hover:bg-panel-medium/90"
                asChild
              >
                <Link to="/about">LEARN MORE</Link>
              </Button>
            </div>
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/213772f1-d231-41c2-a3b4-b92f7da58c06.png" 
                alt="Modern office buildings in Bangalore"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-32 h-32 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold text-foreground">2M</span>
              </div>
              <p className="text-xl font-semibold mb-2">people employed in</p>
              <p className="text-xl font-semibold text-foreground">Bangalore's IT sector</p>
            </div>
            <div>
              <div className="w-32 h-32 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold text-foreground">90K</span>
              </div>
              <p className="text-xl font-semibold mb-2">engineers graduate in</p>
              <p className="text-xl font-semibold text-foreground">the city every year</p>
            </div>
            <div>
              <div className="w-32 h-32 bg-panel-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold text-foreground">400</span>
              </div>
              <p className="text-xl font-semibold mb-2">R&D centres, including</p>
              <p className="text-xl font-semibold text-foreground">Google's and Amazon's</p>
            </div>
          </div>
        </div>
      </section>

      {/* A people-first approach */}
      <section className="py-24 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/9388a603-0bca-42f1-bfba-a51c8e2a0f55.png" 
                alt="Diverse team members collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                CULTURE
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                A people-first approach
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                One of the things our partners value about us the most is that culture is a key principle. What does this mean?
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-turquoise-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    During our recruitment processes, we place <span className="font-semibold text-foreground">a strong focus on cultural fit.</span>
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-turquoise-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    We organise <span className="font-semibold text-foreground">team building activities</span> and events.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-turquoise-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    You have <span className="font-semibold text-foreground">a dedicated Chief Happiness Officer</span> who handles your team's engagement on a daily basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branded Workspace */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                YOUR BRANDED WORKSPACE
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Enjoy a modern office space
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your team will work in a branded office in our business centre. It's fully equipped with the tools your developers need to deliver results, including:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-turquoise rounded-full"></div>
                  <p className="text-lg text-muted-foreground">High-speed internet connection</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-turquoise rounded-full"></div>
                  <p className="text-lg text-muted-foreground">Modern décor with conference rooms, and relaxation areas with coffee and snacks</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-turquoise rounded-full"></div>
                  <p className="text-lg text-muted-foreground">Top-spec equipment and spacious workstations.</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/d213c8b9-e964-4baf-8688-5065c17d7c23.png" 
                alt="Modern office workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The right talent, right place, right model */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              OFFSHORE DEVELOPMENT MODEL
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              The right talent, the right place, the right model
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-foreground">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">We build your team</h3>
              <p className="text-lg text-muted-foreground mb-8">
                You're able to acquire the elite talent you need without disrupting operations to oversee recruitment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-turquoise" />
                  <span className="text-muted-foreground">Sourcing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-turquoise" />
                  <span className="text-muted-foreground">Recruitment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-turquoise" />
                  <span className="text-muted-foreground">Onboarding</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-foreground">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">We run your operations</h3>
              <p className="text-lg text-muted-foreground mb-8">
                We run your ops in India from acquiring premises and paperwork, to handling HR and all administration.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-turquoise" />
                  <span className="text-muted-foreground">Local set up</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-turquoise" />
                  <span className="text-muted-foreground">Admin and HR</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-turquoise" />
                  <span className="text-muted-foreground">Data-driven reports</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-panel-light rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-foreground">03</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">You scale without limits</h3>
              <p className="text-lg text-muted-foreground mb-8">
                When you're ready to increase your capacity, we'll work with you to grow your team at speed.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-turquoise" />
                  <span className="text-muted-foreground">Reduced time to market</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-turquoise" />
                  <span className="text-muted-foreground">Trusted long-term partner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-turquoise" />
                  <span className="text-muted-foreground">Unlimited growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go offshore the smarter way */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              FULLY INTEGRATED DEVELOPMENT TEAM
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Go offshore the smarter way
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
                  <p className="text-lg text-muted-foreground">Lengthy and disruptive recruitment</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Project-based developers</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Complicated logistics and administration</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Security that doesn't measure up</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Snail-pace growth</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Difficult collaboration between teams</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">Developers who don't have the required skills</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-turquoise-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">YOU GET</h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Super-fast team assembly</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Fully aligned, engaged employees</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Managed operations with an expert partner</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Security protocols at home mirrored in Bangalore</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Lightning-fast scaling</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Bangalore team uses same tools and methodologies</p>
                </div>
                <div className="p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-lg text-foreground">Specialists are hired to match your unique needs</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-80 h-64 bg-yellow-foreground/20 rounded-3xl transform rotate-12 mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-56 bg-turquoise rounded-2xl shadow-2xl transform -rotate-6 overflow-hidden">
                  <div className="p-6 text-center">
                    <div className="text-xs font-bold text-turquoise-foreground mb-2">H2</div>
                    <div className="bg-yellow text-yellow-foreground px-4 py-2 rounded-lg font-bold text-lg mb-2">
                      SCALING TECH TEAMS
                    </div>
                    <div className="bg-yellow/80 text-yellow-foreground px-3 py-1 rounded text-sm font-medium mb-4">
                      REINVENTED CASE STUDY
                    </div>
                    <div className="text-xs text-turquoise-foreground">
                      How H2 Helped Preqin Establish A 450+ Person Global R&D Centre In India
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-yellow-foreground mb-6 leading-tight">
                Scaling innovation: Preqin case study
              </h2>
              <p className="text-xl text-yellow-foreground/90 mb-8">
                How we helped Preqin establish a 450+ person global R&D centre in India
              </p>
              <Button 
                className="bg-yellow-foreground text-yellow hover:bg-yellow-foreground/90 font-semibold px-8 py-4 rounded-full"
                asChild
              >
                <Link to="/contact">DOWNLOAD CASE STUDY →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Build your team with a trusted partner */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              YOUR DEVELOPMENT TEAM IN BANGALORE
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Build your team with a trusted partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-8 relative overflow-hidden">
                <div className="w-16 h-16 bg-yellow/40 rounded-full absolute top-4 left-6"></div>
                <div className="w-12 h-12 bg-yellow/60 rounded-full absolute top-8 right-6"></div>
                <Users className="w-12 h-12 text-foreground relative z-10" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your developers are full-time colleagues, not external support
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-16 h-16 bg-yellow/40 rounded-lg relative">
                  <div className="absolute inset-2 bg-yellow-foreground rounded-sm"></div>
                  <div className="absolute top-0 left-2 right-2 h-1 bg-yellow/60 rounded-full"></div>
                  <div className="absolute bottom-0 left-2 right-2 h-1 bg-yellow/60 rounded-full"></div>
                  <div className="absolute left-0 top-2 bottom-2 w-1 bg-yellow/60 rounded-full"></div>
                  <div className="absolute right-0 top-2 bottom-2 w-1 bg-yellow/60 rounded-full"></div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your admin, logistics, payroll and HR are managed
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <div className="w-16 h-12 bg-turquoise/40 rounded-lg border-4 border-turquoise/60 relative">
                  <div className="w-8 h-6 bg-turquoise rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-turquoise-foreground rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your engineers are aligned with your company's vision
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Rocket className="w-12 h-12 text-turquoise" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You can rapidly scale your team as and when you need to
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-24 bg-panel-soft text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-navy-foreground/70 tracking-wide mb-4">
                FROM 5 TO 100+ ENGINEERS
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Set up a world-class tech team in Bangalore
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
                <input 
                  type="text" 
                  placeholder="Full name*" 
                  className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Business email*" 
                    className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone number*" 
                    className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Company name*" 
                  className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                />
                <textarea 
                  placeholder="Message*" 
                  rows={4}
                  className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                ></textarea>
                
                <Button 
                  type="submit"
                  className="w-full bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold py-3 rounded-full"
                >
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
    </div>
  );
};

export default DedicatedTeam;