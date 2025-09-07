import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroTeam from "@/assets/hero-team.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import diverseTeam from "@/assets/diverse-team.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import developersCoding from "@/assets/developers-coding.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
                130+ world-class tech teams built in Bangalore
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Scale your software development with dedicated offshore teams
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4 text-base"
                  asChild
                >
                  <Link to="/our-model">OUR MODEL</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4 text-base"
                  asChild
                >
                  <Link to="/contact">LET'S TALK</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroTeam} 
                alt="Professional development team collaboration" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-12">
              TRUSTED BY
            </h3>
          </div>
          <div className="overflow-hidden">
            <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                MICROSOFT
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                FLIPKART
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                OPTUM
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                SWIGGY
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                NASSCOM
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                PREQIN
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                NEXTPOINT
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                YKONE
              </div>
              {/* Duplicate for seamless loop */}
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                MICROSOFT
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                FLIPKART
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                OPTUM
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                SWIGGY
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                NASSCOM
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                PREQIN
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                NEXTPOINT
              </div>
              <div className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
                YKONE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Your Tech Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src={teamCollaboration} 
                alt="Team collaboration in modern office" 
                className="rounded-lg w-full h-full object-cover" 
              />
              <img 
                src={officeWorkspace} 
                alt="Modern office workspace environment" 
                className="rounded-lg w-full h-full object-cover" 
              />
              <img 
                src={diverseTeam} 
                alt="Diverse software engineering team" 
                className="rounded-lg w-full h-full object-cover" 
              />
              <img 
                src={developersCoding} 
                alt="Developers coding and collaborating" 
                className="rounded-lg w-full h-full object-cover" 
              />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground tracking-wide mb-6">
                THE SMARTER WAY
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                Scale your tech team easily
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Leverage our proven approach to <strong>expand your software development capacity and deliver at speed</strong>. 
                The Scalers is your partner on the ground that assembles your team, acquires and sets up your premises, 
                and supports your mission in Bangalore.
              </p>
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4"
                asChild
              >
                <Link to="/our-model">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-bold text-foreground mb-6">130+</div>
              <p className="text-xl font-medium text-foreground mb-3">Teams built</p>
              <p className="text-muted-foreground">World-class development teams delivered</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-foreground mb-6">39+</div>
              <p className="text-xl font-medium text-foreground mb-3">Countries served</p>
              <p className="text-muted-foreground">Global reach and expertise</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-foreground mb-6">3</div>
              <p className="text-xl font-medium text-foreground mb-3">Months average</p>
              <p className="text-muted-foreground">Time to build your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 bg-muted/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 bg-turquoise/20 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">💻</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-yellow-foreground">01</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">We build your team</h3>
              <p className="text-muted-foreground mb-6">
                We hire your developers from Bangalore's world-class talent pool using a comprehensive, multistage assessment process.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                asChild
              >
                <Link to="/dedicated-team">LEARN MORE →</Link>
              </Button>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 bg-muted/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 bg-turquoise/20 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">⚙️</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-yellow-foreground">02</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">We run your operations</h3>
              <p className="text-muted-foreground mb-6">
                We set up your dedicated workspace and take care of everything for you on the ground, freeing you to focus on your business.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                asChild
              >
                <Link to="/offshore-centre">LEARN MORE →</Link>
              </Button>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 bg-muted/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 bg-turquoise/20 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-yellow-foreground">03</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">You scale without limits</h3>
              <p className="text-muted-foreground mb-6">
                We instil your vision, values, and culture to ensure your team is engaged and fully aligned with your mission.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                asChild
              >
                <Link to="/our-model">LEARN MORE →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Work with your offshore team */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-yellow-foreground mb-6">
                Work with your offshore team in the same way as your one at home
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-32 bg-white rounded-lg transform rotate-12"></div>
                <div className="w-48 h-32 bg-turquoise rounded-lg absolute top-4 left-4 transform -rotate-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European and Indian Leadership */}
      <section className="py-16 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-96 h-64 bg-turquoise/30 rounded-full relative overflow-hidden mx-auto">
                <img 
                  src={ceoPortrait} 
                  alt="European and Indian leadership team" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground/70 tracking-wide mb-4">
                MULTICULTURAL MANAGEMENT
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                European and Indian leadership
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Our management structure combines <strong>European organisation and processes with world-class Indian engineering</strong> expertise to deliver a truly holistic solution.
              </p>
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-3 rounded-full"
                asChild
              >
                <Link to="/leadership">LEARN MORE →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by People */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-4">
                ABOUT US
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Powered by people
              </h2>
              <p className="text-lg text-foreground/80 mb-4">
                People are at the heart of everything we do. We've refined our approach to give you <strong>the authentic cultural alignment</strong> your competition doesn't have.
              </p>
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-3 rounded-full"
                asChild
              >
                <Link to="/about">LEARN MORE →</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-96 h-64 bg-turquoise-light rounded-full relative overflow-hidden mx-auto">
                <img 
                  src={diverseTeam} 
                  alt="Diverse team celebrating success" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We'll help you section */}
      <section className="py-16 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              We'll help you —
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-l-4 border-l-turquoise">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Build a Dedicated Development Team
              </h3>
              <p className="text-foreground/80 mb-6">
                Set up your world-class <strong>in-house tech team based on your requirements</strong> that becomes an integrated part of your business.
              </p>
              <Button 
                variant="ghost" 
                className="text-foreground hover:bg-foreground/10 p-0 h-auto font-semibold"
                asChild
              >
                <Link to="/dedicated-team">LEARN MORE →</Link>
              </Button>
            </Card>

            <Card className="p-8 border-l-4 border-l-turquoise">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Extend your existing Development Team
              </h3>
              <p className="text-foreground/80 mb-6">
                Augment your existing team in Bangalore to create exciting customer offerings, and <strong>work with your new colleagues the same as your staff at home.</strong>
              </p>
              <Button 
                variant="ghost" 
                className="text-foreground hover:bg-foreground/10 p-0 h-auto font-semibold"
                asChild
              >
                <Link to="/team-extension">LEARN MORE →</Link>
              </Button>
            </Card>

            <Card className="p-8 border-l-4 border-l-turquoise bg-turquoise">
              <h3 className="text-2xl font-bold text-turquoise-foreground mb-4">
                Set up an ODC of 50+ engineers
              </h3>
              <p className="text-turquoise-foreground/80 mb-6">
                Build your own offshore development centre of 50+ engineers, working on <strong>new products and services and driving innovation.</strong>
              </p>
              <Button 
                variant="ghost" 
                className="text-turquoise-foreground hover:bg-turquoise-foreground/10 p-0 h-auto font-semibold"
                asChild
              >
                <Link to="/offshore-centre">LEARN MORE →</Link>
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground/80 mb-6">
              If you have any other requirements, we can create a custom-built solution to meet your needs.
            </p>
            <Button 
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-3 rounded-full"
              asChild
            >
              <Link to="/contact">CONTACT US →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-4">
              FEATURED CASE STUDIES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              We build the best teams
            </h2>
          </div>

          <div className="bg-muted/30 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={officeWorkspace} 
                  alt="PartyLite case study - developer working" 
                  className="rounded-lg shadow-medium w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-background px-4 py-2 rounded-lg">
                  <span className="font-bold text-foreground">PartyLite</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-turquoise tracking-wide mb-4">
                  ECOMMERCE
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  PartyLite moves faster with an integrated ecommerce team
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Read how <strong>an in-house development team</strong> helped PartyLite move away from third-party vendors, upgrade existing skills, and keep capability within the business.
                </p>
                <Button 
                  className="bg-yellow text-yellow-foreground hover:bg-yellow/90 font-semibold px-6 py-2"
                  asChild
                >
                  <Link to="/case-studies">READ MORE →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-navy text-navy-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-navy-foreground/70 tracking-wide mb-8">
              WHAT OUR PARTNERS SAY
            </div>
          </div>
          
          <div className="relative bg-navy/80 rounded-lg p-12 border border-navy-foreground/20">
            <div className="absolute top-4 left-4 text-turquoise text-6xl">
              "
            </div>
            <div className="absolute bottom-4 right-4 text-turquoise text-6xl rotate-180">
              "
            </div>
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-center text-navy-foreground mb-8 italic">
              Building our engineering team with The Scalers has been a success, and I don't say that lightly!
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-navy-foreground rounded-full mr-4 flex items-center justify-center">
                <span className="text-navy font-bold text-lg">DB</span>
              </div>
              <div>
                <div className="font-bold text-navy-foreground">Daniel Barnes</div>
                <div className="text-navy-foreground/70">EVP, Global Head of Operations, Preqin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-4">
              KNOWLEDGE BASE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-0 overflow-hidden">
              <div className="h-48 bg-yellow relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform rotate-12 flex items-center justify-center">
                    <span className="text-xs font-bold">CTO REPORT</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-2">
                  WHITEPAPER
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  The CTO's report on offshoring dev teams: Insights from 100 CTOs
                </h3>
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:bg-foreground/10 p-0 h-auto font-semibold"
                  asChild
                >
                  <Link to="/resources">READ MORE →</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <div className="h-48 bg-turquoise-light relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform -rotate-6 flex items-center justify-center">
                    <span className="text-xs font-bold">GUIDE</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-2">
                  EBOOK
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  CTO guide: Go from outsourced help to long-term tech teams
                </h3>
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:bg-foreground/10 p-0 h-auto font-semibold"
                  asChild
                >
                  <Link to="/resources">READ MORE →</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <div className="h-48 bg-yellow-light relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform rotate-6 flex items-center justify-center">
                    <span className="text-xs font-bold">CASE STUDY</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-2">
                  CASE STUDY
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  How Preqin gained a 450+ person global R&D centre
                </h3>
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:bg-foreground/10 p-0 h-auto font-semibold"
                  asChild
                >
                  <Link to="/resources">READ MORE →</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-navy-foreground">
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
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-3 rounded-full"
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

export default Index;