import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, ArrowUp, Users, Handshake, MessageCircle } from "lucide-react";

const DedicatedTeam = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/ffcbad56-1241-4ebf-96fd-12802a3156b5.png" 
                alt="Professional developer working"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                DEDICATED DEVELOPMENT TEAM
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Build your fully integrated team in Bangalore
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Beat the skills shortage at home and build your world-class dedicated development team in India. <span className="font-semibold text-foreground">We build your team, set up your operations on the ground, and support you on a daily basis while you work directly with your team</span> — freeing you to focus on development and delivery.
              </p>
            </div>
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
              <div className="w-24 h-24 bg-navy/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
                className="bg-foreground text-background hover:bg-foreground/90"
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
              <div className="w-32 h-32 bg-navy/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <div className="w-32 h-32 bg-navy/20 rounded-full flex items-center justify-center mx-auto mb-8">
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

      {/* CTA Section */}
      <section className="py-24 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Set up a world-class tech team in Bangalore
          </h2>
          <p className="text-xl mb-12 text-navy-foreground/80">
            Build your dedicated development team with India's top engineering talent
          </p>
          <Button 
            size="lg"
            className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 font-semibold px-12 py-6 text-lg"
            asChild
          >
            <Link to="/contact">LET'S TALK</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DedicatedTeam;