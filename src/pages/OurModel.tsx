import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import developersCoding from "@/assets/developers-coding.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
const OurModel = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1>
            Our Model
          </h1>
          <p className="body-text text-lg max-w-3xl mx-auto">
            We help you build, scale and team up with global engineering talent from Bangalore
          </p>
        </div>
      </section>

      {/* Model Steps */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>
              See how we scale your software development operations in Bangalore
            </h2>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-6">
                    <span className="text-xl font-bold text-background">1</span>
                  </div>
                  <h3 className="h4">We build your team</h3>
                </div>
                <p className="body-text text-lg mb-8">
                  Our experienced recruiters and technical experts carefully select engineers from 
                  Bangalore's top talent pool, ensuring they match your specific technology needs and cultural fit.
                </p>
                <Button className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4" asChild>
                  <Link to="/dedicated-team">LEARN MORE</Link>
                </Button>
              </div>
              <div className="bg-background rounded-lg p-12 flex items-center justify-center">
                <div className="w-64 h-48 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">Team Building Visual</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-6">
                    <span className="text-xl font-bold text-background">2</span>
                  </div>
                  <h3 className="h4">We run your operations</h3>
                </div>
                <p className="body-text text-lg mb-8">
                  From infrastructure setup to HR management and operational support, we handle everything 
                  so you can focus on what matters most - building great products.
                </p>
                <Button className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4" asChild>
                  <Link to="/team-extension">LEARN MORE</Link>
                </Button>
              </div>
              <div className="lg:order-1 bg-background rounded-lg p-12 flex items-center justify-center">
                <div className="w-64 h-48 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">Operations Visual</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-6">
                    <span className="text-xl font-bold text-background">3</span>
                  </div>
                  <h3 className="h4">You scale without limits</h3>
                </div>
                <p className="body-text text-lg mb-8">
                  With our established infrastructure and talent pipeline, scaling your team up or down 
                  becomes seamless, giving you the flexibility to respond to market demands.
                </p>
                <Button className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4" asChild>
                  <Link to="/offshore-centre">LEARN MORE</Link>
                </Button>
              </div>
              <div className="bg-background rounded-lg p-12 flex items-center justify-center">
                <div className="w-64 h-48 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-foreground text-lg font-medium">Scaling Visual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - The Real Value */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-4">
              BENEFITS
            </div>
            <h2>
              The real value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-foreground"></div>
              <div className="h5">CTO</div>
              <h3 className="h4">Enjoy peace of mind</h3>
              <p className="text-muted-foreground leading-relaxed">
                As CTO, a key priority is to ensure your product remains innovative and that your 
                company stays ahead of the competition. With our model, <strong>your product team of 
                technical experts deliver exceptional code to help you meet your strategic goals.</strong>
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-1 bg-foreground"></div>
              <div className="h5">VP of Engineering</div>
              <h3 className="h4">See the bigger picture</h3>
              <p className="text-muted-foreground leading-relaxed">
                As VP of engineering you have <strong>open, direct, daily communication with your engineers 
                in Bangalore</strong> and weekly reports from H2. Our model allows you to smoothly 
                oversee their projects remotely and make sure that every task is on track.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-1 bg-foreground"></div>
              <div className="h5">Product Manager</div>
              <h3 className="h4">Collaborate easily</h3>
              <p className="text-muted-foreground leading-relaxed">
                As PM, you work with your engineers in Bangalore as one team, using the <strong>same 
                methodology and tools as with your team at home.</strong> You're in charge of the workflow 
                and you have clear visibility of the daily progress of your developers' workload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Approach - The Real Results */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-4">
                PROVEN APPROACH
              </div>
             <h2>
                The real results
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Your offshore team is powered by our unique model — combining finely-tuned recruitment and 
                managed operations with holistic cultural alignment. The result? <strong>Award-winning engineers 
                that deliver award-winning products.</strong>
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <div className="flex animate-scroll-horizontal">
                  <div className="flex-shrink-0 w-full">
                    <img src={developersCoding} alt="Developer coding on laptop" className="w-full h-80 object-cover rounded-lg" />
                  </div>
                  <div className="flex-shrink-0 w-full ml-4">
                    <img src={teamCollaboration} alt="Team collaboration in office" className="w-full h-80 object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              {/* Navigation dots */}
              <div className="flex justify-center mt-6 space-x-2">
                <div className="w-2 h-2 bg-foreground rounded-full"></div>
                <div className="w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale smarter - Comparison Table */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-4">
              THE OFFSHORE DEVELOPMENT MODEL THAT WORKS
            </div>
            <h2>
              Scale smarter, stand apart
            </h2>
          </div>

          <div className="bg-background rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-muted">
                  <th className="text-left py-6 px-4 font-medium text-foreground"></th>
                  <th className="text-center py-6 px-4 font-semibold text-foreground">Hiring locally</th>
                  <th className="text-center py-6 px-4 font-semibold text-foreground">Traditional Offshoring</th>
                  <th className="text-center py-6 px-4 font-semibold text-foreground">H2's Model</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted/50">
                  <td className="py-6 px-4 font-medium text-foreground">World-class developers</td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✓</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✗</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-muted/50">
                  <td className="py-6 px-4 font-medium text-foreground">Fast to hire</td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✗</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✓</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-muted/50">
                  <td className="py-6 px-4 font-medium text-foreground">Scalable at speed</td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✗</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✓</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-muted/50">
                  <td className="py-6 px-4 font-medium text-foreground">Cost optimal</td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✗</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✓</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-muted/50">
                  <td className="py-6 px-4 font-medium text-foreground">Strategic alignment</td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✓</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✗</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-6 px-4 font-medium text-foreground">Security and data protection</td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✓</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-muted/60 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-muted-foreground text-lg">✗</span>
                    </div>
                  </td>
                  <td className="text-center py-6 px-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-yellow-foreground mb-8 leading-tight">
                Your developers work only for your business and add long-term value to your organisation
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-yellow-foreground/10 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-foreground/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-yellow-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Development Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-muted/20 rounded-full overflow-hidden">
                <img src={ceoPortrait} alt="Business leader working on laptop" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-muted-foreground tracking-wide mb-4">
                DEDICATED DEVELOPMENT TEAM
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">
                Think beyond traditional offshoring
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="w-16 h-1 bg-foreground mb-4"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    Access to Bangalore's <strong>elite engineering talent</strong> pool
                  </p>
                </div>
                <div>
                  <div className="w-16 h-1 bg-foreground mb-4"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    Fully managed operations — <strong>your hands are off</strong>
                  </p>
                </div>
                <div>
                  <div className="w-16 h-1 bg-foreground mb-4"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    Your team <strong>aligned with your company vision</strong> and mission
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Process */}
      <section className="py-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-background/70 tracking-wide mb-4">
              WHAT'S NEXT?
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-background rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-background">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">DISCOVERY</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prepare an offering based on your requirements and present you with a detailed roadmap.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-background/30"></div>
            </div>
            
            <div className="relative">
              <div className="bg-background rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-background">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">SET UP</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We source elite talent for your team using our recruitment model, then set up your office, equipment, and infrastructure.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-background/30"></div>
            </div>
            
            <div className="relative">
              <div className="bg-background rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-background">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">KICK OFF</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We onboard your new hires and ensure everything is in place so that your engineers are ready to begin working.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-background/30"></div>
            </div>
            
            <div>
              <div className="bg-background rounded-lg p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-background">4</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">SCALING</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We keep your engineers aligned and engaged, and help you scale on demand to your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-navy text-navy-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-navy-foreground/70 tracking-wide mb-4">
                FROM 5 TO 100+ ENGINEERS
              </div>
             <h2>
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
                <input type="text" placeholder="Full name*" className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Business email*" className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                  <input type="tel" placeholder="Phone number*" className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                </div>
                <input type="text" placeholder="Company name*" className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                <textarea placeholder="Message*" rows={4} className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"></textarea>
                
                <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-3 rounded-full">
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

      {/* Final CTA */}
      
    </div>;
};
export default OurModel;