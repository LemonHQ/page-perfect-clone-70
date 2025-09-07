import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { UserPlus, TrendingUp, Compass, Shield, Eye, Globe, Users, Lock } from "lucide-react";

const TeamExtension = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                STAFF AUGMENTATION
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
                Extend your tech team with world-class talent
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The Scalers <span className="font-semibold text-foreground">handpick world-class developers and augment them into your existing engineering team.</span> Whether you're looking for web developers fluent in Java and .NET or mobile developers who sing in Kotlin and Swift — we're here to help.
              </p>
              <Button 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4"
                asChild
              >
                <Link to="/contact">EXTEND YOUR TEAM</Link>
              </Button>
            </div>
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/33b3742c-ceb8-46dd-931c-456926255bf0.png" 
                alt="Developer working on laptop"
                className="w-full h-full object-cover"
              />
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
                <UserPlus className="w-12 h-12 text-turquoise" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Scale your team easily</h3>
              <p className="text-muted-foreground">
                Hiring <span className="font-semibold text-foreground">additional developers on demand</span> is a key component of our approach — helping you to deliver planned projects successfully.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-12 h-12 text-yellow-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cultural alignment</h3>
              <p className="text-muted-foreground">
                An emphasis on cultural alignment ensures <span className="font-semibold text-foreground">high engineer engagement and retention</span> to keep your team cohesive.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-12 h-12 text-turquoise" />
              </div>
              <h3 className="text-2xl font-bold mb-4">IT security</h3>
              <p className="text-muted-foreground">
                Your extended team operates using the same <span className="font-semibold text-foreground">security protocol and tools you do at home.</span> Your code is safe and sound in Bangalore.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-12 h-12 text-yellow-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Direct oversight</h3>
              <p className="text-muted-foreground">
                You're in the driving seat, managing the daily workflow — you have <span className="font-semibold text-foreground">total control over your product and IP.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The best talent section */}
      <section className="py-24 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-yellow-foreground mb-8 leading-tight">
                The best talent for your extended team, on tap
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="flex items-end space-x-3">
                  <div className="w-12 h-16 bg-yellow-foreground/30 rounded-lg"></div>
                  <div className="w-12 h-24 bg-yellow-foreground/50 rounded-lg"></div>
                  <div className="w-12 h-32 bg-yellow-foreground/70 rounded-lg"></div>
                  <div className="w-12 h-40 bg-yellow-foreground/90 rounded-lg"></div>
                  <div className="w-12 h-48 bg-yellow-foreground rounded-lg"></div>
                  <div className="w-12 h-40 bg-yellow-foreground/90 rounded-lg"></div>
                  <div className="w-12 h-32 bg-yellow-foreground/70 rounded-lg"></div>
                  <div className="w-12 h-24 bg-yellow-foreground/50 rounded-lg"></div>
                  <div className="w-12 h-16 bg-yellow-foreground/30 rounded-lg"></div>
                </div>
                <div className="absolute -top-8 -right-8 w-12 h-12 bg-turquoise rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-turquoise-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World-class engineers in Bangalore */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                EXTENDED TEAM IN INDIA
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                World-class engineers in Bangalore
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Leverage the talent of Bangalore's top developers and access skills you can't find elsewhere. Known as the Silicon Valley of Asia, it's a dynamic hub of innovation with a deep pool of highly talented engineers.
              </p>
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90 border border-foreground rounded-full px-8 py-3 font-semibold"
                asChild
              >
                <Link to="/about">LEARN MORE</Link>
              </Button>
            </div>
            <div className="bg-muted/30 rounded-lg overflow-hidden relative">
              <img 
                src="/lovable-uploads/f319eeef-95aa-4737-b598-67e8c980c42f.png" 
                alt="World map showing Your Team and Bangalore locations"
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

      {/* Code in a cohesive culture */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/b072d8cf-7345-42b5-b71c-1fa86c41a01b.png" 
                alt="Diverse team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                FULLY ALIGNED TEAM
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Code in a cohesive culture
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your developers in Bangalore are <span className="font-semibold text-foreground">an integral and integrated addition to your existing engineering team.</span> Instilling your company DNA is a key component of the onboarding process. Our holistic approach to culture and collaboration allows you to manage your extended team and develop software in the same way as you do at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* To support your objectives */}
      <section className="py-24 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                To support your objectives, <span className="text-turquoise">we help you to...</span>
              </h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-turquoise pl-6">
                <p className="text-lg text-muted-foreground">
                  ... quickly <span className="font-semibold text-foreground">increase your capacity</span> to help you manage your daily workflow or support long-term product development.
                </p>
              </div>
              <div className="border-l-4 border-turquoise pl-6">
                <p className="text-lg text-muted-foreground">
                  ... assemble teams from 5-100+ to enable everything from <span className="font-semibold text-foreground">digitalisation to enterprise-wide transformation.</span>
                </p>
              </div>
              <div className="border-l-4 border-turquoise pl-6">
                <p className="text-lg text-muted-foreground">
                  ... bring in the skills you need. From developers used to working with particular methodologies, to <span className="font-semibold text-foreground">engineers fluent in a specific language.</span>
                </p>
              </div>
              <div className="border-l-4 border-turquoise pl-6">
                <p className="text-lg text-muted-foreground">
                  ... meet strategic goals such as <span className="font-semibold text-foreground">bringing products to market faster</span> or maintaining delivery during a time of disruption.
                </p>
              </div>
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

      {/* CTA Section */}
      <section className="py-24 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Extend your development team in Bangalore
          </h2>
          <p className="text-xl mb-12 text-navy-foreground/80">
            Scale your development capabilities with India's finest engineering talent
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

export default TeamExtension;