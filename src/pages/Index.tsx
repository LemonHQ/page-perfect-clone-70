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
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="h1 mb-8">Proven Agile Acceleration and Delivery</h1>
              <p className="body-text text-lg mb-12">For CTOS, CDOS, Product portfolio owners & PMOS under pressure to perform and deliver change and transformation initiatives.  




We help firms beat the odds, accelerate initiatives delivery across their product and market portfolios, recover struggling initiatives, and build teams that deliver sustainable value, so your success continues long after we’re gone.</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-medium px-8 py-4 text-base" asChild>
                  <Link to="/our-model">OUR MODEL</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-base" asChild>
                  <Link to="/contact">LET'S TALK</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={heroTeam} alt="Professional development team collaboration" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      

      {/* Our Offerings Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 mb-8">Our Offerings</h2>
            <p className="body-text text-lg max-w-3xl mx-auto">Whether you're preparing to launch or navigating the path to business-as-usual (BAU), we provide the strategic guidance and hands-on support needed to build momentum, create structure, and drive success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center">
              <h3 className="h4 mb-4">Portfolio Development</h3>
              <p className="body-text">Successfully develop and execute your change or transformation roadmap and delivery plan with Agile practices</p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="h4 mb-4">Product Recovery</h3>
              <p className="body-text">Turn around struggling initiatives and get your products back on track.</p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="h4 mb-4">Agile Coaching</h3>
              <p className="body-text">Build sustainable agile practices and high-performing teams that continue to deliver sustainable value.</p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="h4 mb-4">Portfolio Operations</h3>
              <p className="body-text">Streamline workflows, initiatives delivery, and implement scalable processes—ensuring teams have the right tools, insights, and frameworks to drive efficiency and growth.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Scale Your Tech Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6">
              <img src={teamCollaboration} alt="Team collaboration in modern office" className="rounded-lg w-full h-full object-cover" />
              <img src={officeWorkspace} alt="Modern office workspace environment" className="rounded-lg w-full h-full object-cover" />
              <img src={diverseTeam} alt="Diverse software engineering team" className="rounded-lg w-full h-full object-cover" />
              <img src={developersCoding} alt="Developers coding and collaborating" className="rounded-lg w-full h-full object-cover" />
            </div>
            <div>
              <div className="h6 tracking-wide mb-6">
                THE SMARTER WAY
              </div>
              <h2 className="h2 mb-8">
                Scale your tech team easily
              </h2>
              <p className="body-text text-lg mb-12">
                Leverage our proven approach to <strong>expand your software development capacity and deliver at speed</strong>. 
                H2 is your partner on the ground that assembles your team, acquires and sets up your premises, 
                and supports your mission in Bangalore.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 font-medium px-8 py-4" asChild>
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
              <div className="text-6xl font-bold text-black mb-6">130+</div>
              <p className="h5 mb-3">Teams built</p>
              <p className="body-text">World-class development teams delivered</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-black mb-6">39+</div>
              <p className="h5 mb-3">Countries served</p>
              <p className="body-text">Global reach and expertise</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-black mb-6">3</div>
              <p className="h5 mb-3">Months average</p>
              <p className="body-text">Time to build your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">💻</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-black">01</span>
                  </div>
                </div>
              </div>
              <h3 className="h4 mb-4">We build your team</h3>
              <p className="body-text mb-6">
                We hire your developers from Bangalore's world-class talent pool using a comprehensive, multistage assessment process.
              </p>
              <Button variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white" asChild>
                <Link to="/dedicated-team">LEARN MORE →</Link>
              </Button>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">⚙️</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-black">02</span>
                  </div>
                </div>
              </div>
              <h3 className="h4 mb-4">We run your operations</h3>
              <p className="body-text mb-6">
                We set up your dedicated workspace and take care of everything for you on the ground, freeing you to focus on your business.
              </p>
              <Button variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white" asChild>
                <Link to="/offshore-centre">LEARN MORE →</Link>
              </Button>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-black">03</span>
                  </div>
                </div>
              </div>
              <h3 className="h4 mb-4">You scale without limits</h3>
              <p className="body-text mb-6">
                We instil your vision, values, and culture to ensure your team is engaged and fully aligned with your mission.
              </p>
              <Button variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white" asChild>
                <Link to="/our-model">LEARN MORE →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Work with your offshore team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h2 mb-6">
                Work with your offshore team in the same way as your one at home
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-32 rounded-lg transform rotate-12"></div>
                <div className="w-48 h-32 rounded-lg absolute top-4 left-4 transform -rotate-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-24 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-5xl font-bold text-black">5</span>
                </div>
              </div>
              <p className="body-text text-lg">global locations</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-24 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl font-bold text-black">130+</span>
                </div>
              </div>
              <p className="body-text text-lg">teams built</p>
              <p className="body-text text-lg">since 2014</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-24 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-5xl font-bold text-black">10</span>
                </div>
              </div>
              <p className="body-text text-lg">years of successful</p>
              <p className="body-text text-lg">partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Silicon Valley of Asia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h6 font-semibold tracking-wide mb-4">
                SILICON VALLEY OF ASIA
              </div>
              <h2 className="h2 mb-6">
                Elite engineers in Bangalore
              </h2>
              <p className="body-text text-lg mb-8">
                Home to the R&D centres of the <strong>world's leading tech companies</strong> including 
                Google, Amazon, and Microsoft — we tap you into a pool of top talent.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800">
                LEARN MORE
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 rounded-2xl">
                  <img src={officeWorkspace} alt="Bangalore cityscape showing the Silicon Valley of Asia" className="w-full h-full object-cover rounded-2xl opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European and Indian Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-96 h-64 rounded-full relative overflow-hidden mx-auto">
                <img src={ceoPortrait} alt="European and Indian leadership team" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <div>
              <div className="h6 font-semibold tracking-wide mb-4">
                MULTICULTURAL MANAGEMENT
              </div>
              <h2 className="h2 mb-6">
                European and Indian leadership
              </h2>
              <p className="body-text text-lg mb-8">
                Our management structure combines <strong>European organisation and processes with world-class Indian engineering</strong> expertise to deliver a truly holistic solution.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-3 rounded-full" asChild>
                <Link to="/leadership">LEARN MORE →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by People */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h6 font-semibold tracking-wide mb-4">
                ABOUT US
              </div>
              <h2 className="h2 mb-6">
                Powered by people
              </h2>
              <p className="body-text text-lg mb-4">
                People are at the heart of everything we do. We've refined our approach to give you <strong>the authentic cultural alignment</strong> your competition doesn't have.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-3 rounded-full" asChild>
                <Link to="/about">LEARN MORE →</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-96 h-64 rounded-full relative overflow-hidden mx-auto">
                <img src={diverseTeam} alt="Diverse team celebrating success" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We'll help you section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="h2 mb-8">
              We'll help you —
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="h4 mb-4">
                Build a Dedicated Development Team
              </h3>
              <p className="body-text mb-6">
                Set up your world-class <strong>in-house tech team based on your requirements</strong> that becomes an integrated part of your business.
              </p>
              <Button variant="ghost" className="text-black hover:bg-gray-100 p-0 h-auto font-semibold" asChild>
                <Link to="/dedicated-team">LEARN MORE →</Link>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="h4 mb-4">
                Extend your existing Development Team
              </h3>
              <p className="body-text mb-6">
                Augment your existing team in Bangalore to create exciting customer offerings, and <strong>work with your new colleagues the same as your staff at home.</strong>
              </p>
              <Button variant="ghost" className="text-black hover:bg-gray-100 p-0 h-auto font-semibold" asChild>
                <Link to="/team-extension">LEARN MORE →</Link>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="h4 mb-4">
                Set up an ODC of 50+ engineers
              </h3>
              <p className="body-text mb-6">
                Build your own offshore development centre of 50+ engineers, working on <strong>new products and services and driving innovation.</strong>
              </p>
              <Button variant="ghost" className="text-black hover:bg-gray-100 p-0 h-auto font-semibold" asChild>
                <Link to="/offshore-centre">LEARN MORE →</Link>
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <p className="body-text text-lg mb-6">
              If you have any other requirements, we can create a custom-built solution to meet your needs.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-3 rounded-full" asChild>
              <Link to="/contact">CONTACT US →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h6 font-semibold tracking-wide mb-4">
              FEATURED CASE STUDIES
            </div>
            <h2 className="h2 mb-8">
              We build the best teams
            </h2>
          </div>

          <div className="rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src={officeWorkspace} alt="PartyLite case study - developer working" className="rounded-lg shadow-medium w-full h-80 object-cover" />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg">
                  <span className="font-bold text-black">PartyLite</span>
                </div>
              </div>
              <div>
                <div className="h6 font-semibold tracking-wide mb-4">
                  ECOMMERCE
                </div>
                <h3 className="h3 mb-6">
                  PartyLite moves faster with an integrated ecommerce team
                </h3>
                <p className="body-text text-lg mb-6">
                  Read how <strong>an in-house development team</strong> helped PartyLite move away from third-party vendors, upgrade existing skills, and keep capability within the business.
                </p>
                <Button className="bg-black text-white hover:bg-gray-800 font-semibold px-6 py-2" asChild>
                  <Link to="/case-studies">READ MORE →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="h6 font-semibold tracking-wide mb-8">
              WHAT OUR PARTNERS SAY
            </div>
          </div>
          
          <div className="relative rounded-lg p-12 border border-gray-200">
            <div className="absolute top-4 left-4 text-black text-6xl">
              "
            </div>
            <div className="absolute bottom-4 right-4 text-black text-6xl rotate-180">
              "
            </div>
            
            <blockquote className="h3 text-center italic mb-8">
              Building our engineering team with H2 has been a success, and I don't say that lightly!
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mr-4 flex items-center justify-center">
                <span className="text-black font-bold text-lg">DB</span>
              </div>
              <div>
                <div className="h6 font-bold">Daniel Barnes</div>
                <div className="body-text">EVP, Global Head of Operations, Preqin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h6 font-semibold tracking-wide mb-4">
              KNOWLEDGE BASE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-0 overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform rotate-12 flex items-center justify-center">
                    <span className="text-xs font-bold text-black">CTO REPORT</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="h6 font-semibold tracking-wide mb-2">
                  WHITEPAPER
                </div>
                <h3 className="h5 mb-4">
                  The CTO's report on offshoring dev teams: Insights from 100 CTOs
                </h3>
                <Button variant="ghost" className="text-black hover:bg-gray-100 p-0 h-auto font-semibold" asChild>
                  <Link to="/resources">READ MORE →</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform -rotate-6 flex items-center justify-center">
                    <span className="text-xs font-bold text-black">GUIDE</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="h6 font-semibold tracking-wide mb-2">
                  EBOOK
                </div>
                <h3 className="h5 mb-4">
                  CTO guide: Go from outsourced help to long-term tech teams
                </h3>
                <Button variant="ghost" className="text-black hover:bg-gray-100 p-0 h-auto font-semibold" asChild>
                  <Link to="/resources">READ MORE →</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform rotate-6 flex items-center justify-center">
                    <span className="text-xs font-bold text-black">CASE STUDY</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="h6 font-semibold tracking-wide mb-2">
                  CASE STUDY
                </div>
                <h3 className="h5 mb-4">
                  How Preqin gained a 450+ person global R&D centre
                </h3>
                <Button variant="ghost" className="text-black hover:bg-gray-100 p-0 h-auto font-semibold" asChild>
                  <Link to="/resources">READ MORE →</Link>
                </Button>
              </div>
            </Card>
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
    </div>;
};
export default Index;