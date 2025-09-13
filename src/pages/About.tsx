import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
const About = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="h1 mb-8">
              About Us
            </h1>
            <p className="body-text text-lg max-w-2xl mx-auto">
              We're disruptors of the offshore industry
            </p>
          </div>
        </div>
      </section>

      {/* We are H2 */}
      <section className="py-24 bg-gradient-to-br from-turquoise-light to-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h1 mb-8">
                Hello, नमस्कार,<br />
                Cześć, Bonjour.<br />
                We are The<br />
                Scalers!
              </h2>
              <p className="body-text text-lg">
                We work with companies worldwide to build scalable, results-driven software development teams in Bangalore.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/lovable-uploads/a3c5b93c-cf82-4bcb-a55d-1312483f4fd1.png" alt="H2 team founders" className="w-full max-w-md h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="relative">
              <div className="w-48 h-32 bg-yellow rounded-[3rem] mx-auto mb-8 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl font-bold text-navy">5</span>
              </div>
              <p className="h4">global locations</p>
            </div>
            <div className="relative">
              <div className="w-48 h-32 bg-turquoise-light rounded-[3rem] mx-auto mb-8 flex items-center justify-center relative overflow-hidden">
                <span className="text-5xl font-bold text-navy">130+</span>
              </div>
              <p className="h4">teams built</p>
              <p className="h4">since 2014</p>
            </div>
            <div className="relative">
              <div className="w-48 h-32 bg-turquoise rounded-[3rem] mx-auto mb-8 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl font-bold text-white">10</span>
              </div>
              <p className="h4">years of successful</p>
              <p className="h4">partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* We don't build software */}
      <section className="py-24 bg-yellow relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <div className="w-64 h-64 bg-turquoise rounded-full opacity-80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <h2 className="h1 mb-8">
              We don't build software, we build teams who build software
            </h2>
          </div>
        </div>
      </section>

      {/* Why we're here */}
      <section className="py-24 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="/lovable-uploads/527369ee-8c20-40ca-949b-7e4c431913ce.png" alt="H2 team celebrating" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div>
              <div className="h6 mb-4 tracking-wider uppercase">
                HOW IT STARTED
              </div>
              <h2 className="h1 mb-8">
                Why we're here
              </h2>
              <p className="body-text text-lg mb-8">
                Our founder Emilien Coquard came to India in 2011, where he was managing a development centre of a French company. On the one hand, he was impressed to see the level of talent people had, and on the other he was frustrated to see how poor the environment was for Indian engineers working in services companies. So, he decided to create <span className="font-bold">a company where the engineers would be in the centre of everything.</span> That's how H2 was born.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We're people people */}
      <section className="py-24 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="/lovable-uploads/0a46af02-e2ff-43fa-8bbc-fb0d2cc836e7.png" alt="Team members collaborating" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div>
              <div className="h6 mb-4 tracking-wider uppercase">
                OUR ETHOS
              </div>
              <h2 className="h1 mb-8">
                We're people people
              </h2>
              <p className="body-text text-lg mb-8">
                Our partners don't call their teams "offshore" anymore. They treat them <span className="font-bold">as an integral part of their team, genuine colleagues, not outsourced help.</span>
              </p>
              <p className="body-text text-lg">
                It's all about people and enabling their personal growth — scaling them up in the same way we do our teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 bg-yellow/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-turquoise/15 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-turquoise/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
              <div className="h6 mb-4 tracking-wider uppercase">
                OUR CORE VALUES
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-turquoise/20 to-turquoise/10 rounded-full mx-auto flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 bg-turquoise/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow rounded-lg flex items-center justify-center">
                      <span className="text-2xl text-navy">💬</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="h3 mb-6">Transparency</h3>
              <p className="body-text text-lg">
                Everyone at H2 is encouraged to <span className="font-bold">give feedback without fear of judgement.</span> Open and honest dialogue is how we move forward as one unified team.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-yellow/20 to-yellow/10 rounded-full mx-auto flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 bg-yellow/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-turquoise rounded-lg flex items-center justify-center">
                      <span className="text-2xl text-white">🌐</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="h3 mb-6">Empowerment</h3>
              <p className="body-text text-lg">
                Everyone's contribution is key and matters for our mission. We <span className="font-bold">reward responsibility and empower</span> progress as we journey together towards success.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-turquoise-light/20 to-turquoise-light/10 rounded-full mx-auto flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 bg-turquoise-light/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow rounded-lg flex items-center justify-center">
                      <span className="text-2xl text-navy">🤝</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="h3 mb-6">Inclusivity</h3>
              <p className="body-text text-lg">
                Everyone is a part of H2 family no matter where they're from. <span className="font-bold">Diversity is more than a slogan at H2,</span> it's a commitment and what makes us, us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the scenes / Our Culture */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h6 mb-4 tracking-wider uppercase">
                OUR CULTURE
              </div>
              <h2 className="h1 mb-8">
                Behind the scenes
              </h2>
              <p className="body-text text-lg mb-8">
                We wouldn't be able to talk the talk when it comes to your company culture if we didn't walk the walk ourselves. <span className="font-bold">We love what we do and believe that what makes us different makes us stronger</span> — and our unique blend of backgrounds makes H2 a truly dynamic place to work.
              </p>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                We love how each new hire adds to our culture. And, <span className="text-turquoise font-bold underline cursor-pointer">we're hiring</span>.
              </p>
            </div>
            <div className="relative">
              <div className="flex space-x-4 overflow-hidden">
                <div className="flex-shrink-0">
                  <img src="/lovable-uploads/49c0a73d-c0c3-48b8-83b8-8195bdceaa91.png" alt="Team playing table tennis" className="w-80 h-64 object-cover rounded-lg" />
                </div>
                <div className="flex-shrink-0">
                  <img src="/lovable-uploads/49c0a73d-c0c3-48b8-83b8-8195bdceaa91.png" alt="Team outdoor activities" className="w-80 h-64 object-cover rounded-lg" />
                </div>
              </div>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-panel-warm/70 rounded-full p-2 cursor-pointer">
                <ChevronLeft className="w-6 h-6 text-white" />
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-panel-warm/70 rounded-full p-2 cursor-pointer">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build future-proof dev teams */}
      <section className="py-24 bg-turquoise relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className="w-64 h-64 bg-panel-light rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="/lovable-uploads/d0af40cb-5d79-4950-99d3-4b5d623dbe48.png" alt="Scaling beyond borders guide on tablet" className="w-full max-w-md h-auto object-cover" />
            </div>
            <div>
              <h2 className="h1 mb-8">
                Build future-proof dev teams
              </h2>
              <p className="body-text text-lg mb-12">
                Discover how to scale development teams in 2023 and beyond
              </p>
              <Button size="lg" className="bg-panel-medium text-white hover:bg-panel-medium/90 font-semibold px-8 py-4 rounded-full">
                DOWNLOAD GUIDE →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Read more about H2 */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h6 mb-4 tracking-wider uppercase">
              READ MORE ABOUT H2
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-0 overflow-hidden">
              <img src="/lovable-uploads/2230665e-c5ff-4f83-9e9f-098ee024b3cf.png" alt="H2 office logo" className="w-full h-64 object-cover" />
              <div className="p-8">
                <div className="w-12 h-1 bg-turquoise mb-6"></div>
                <h3 className="h4 mb-4">Our model</h3>
                <p className="body-text mb-8">
                  Learn about our approach that combines finely-tuned recruitment, managed operations, and cultural alignment.
                </p>
                <Button variant="outline" className="rounded-full border-panel-medium text-panel-medium hover:bg-panel-medium hover:text-background font-semibold px-6 py-2" asChild>
                  <Link to="/our-model">LEARN MORE →</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <img src="/lovable-uploads/2230665e-c5ff-4f83-9e9f-098ee024b3cf.png" alt="Bangalore cityscape" className="w-full h-64 object-cover" />
              <div className="p-8">
                <div className="w-12 h-1 bg-turquoise mb-6"></div>
                <h3 className="h4 mb-4">Bangalore</h3>
                <p className="body-text mb-8">
                  Discover the world's fastest-growing tech hub. It's the Silicon Valley of Asia and the place we call home.
                </p>
                <Button className="rounded-full bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold px-6 py-2">
                  LEARN MORE →
                </Button>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <img src="/lovable-uploads/2230665e-c5ff-4f83-9e9f-098ee024b3cf.png" alt="Leadership team meeting" className="w-full h-64 object-cover" />
              <div className="p-8">
                <div className="w-12 h-1 bg-turquoise mb-6"></div>
                <h3 className="h4 mb-4">Leadership</h3>
                <p className="body-text mb-8">
                  Meet the cross-cultural team of experts who ensure the success of your offshore development team.
                </p>
                <Button variant="outline" className="rounded-full border-panel-medium text-panel-medium hover:bg-panel-medium hover:text-background font-semibold px-6 py-2" asChild>
                  <Link to="/leadership">LEARN MORE →</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Let's Talk Form Section */}
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

      {/* Our Locations Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h6 mb-4 tracking-wider uppercase">
              OUR LOCATIONS
            </div>
            <h2 className="h1 mb-8">
              Global presence, local expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🇮🇳</span>
              </div>
              <h3 className="h4 mb-4">Bangalore, India</h3>
              <p className="body-text">
                Our headquarters and main development hub in the Silicon Valley of Asia
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🇫🇷</span>
              </div>
              <h3 className="h4 mb-4">Paris, France</h3>
              <p className="body-text">
                European operations center connecting you with our Bangalore teams
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🇺🇸</span>
              </div>
              <h3 className="h4 mb-4">New York, USA</h3>
              <p className="body-text">
                North American presence serving clients across the Americas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🇬🇧</span>
              </div>
              <h3 className="h4 mb-4">London, UK</h3>
              <p className="body-text">
                UK operations supporting clients across Europe and beyond
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🇦🇺</span>
              </div>
              <h3 className="h4 mb-4">Sydney, Australia</h3>
              <p className="body-text">
                Asia-Pacific hub connecting Australian and regional clients
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-24 bg-panel-medium text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Ready to scale your team?
          </h2>
          <p className="text-xl mb-12 text-background/80 leading-relaxed">
            Join the growing number of companies that trust H2 with their offshore development needs
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-medium px-8 py-4" asChild>
            <Link to="/contact">GET STARTED</Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default About;