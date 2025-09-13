import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const News = () => {
  const featuredStories = [
    {
      id: 1,
      title: "H2 certified as a Great Place to Work for 2025",
      excerpt: "We are thrilled to announce that H2 has been officially recognized as a Great Place to Work certified company for 2025.",
      date: "Dec 15, 2024",
      category: "Company News",
      image: "/placeholder.svg",
      source: "H2"
    },
    {
      id: 2,
      title: "5 reasons team culture is the key to your offshore team success",
      excerpt: "Team culture has the power to make or break your offshore development team. Here are 5 key reasons why it matters most.",
      date: "Nov 28, 2024",
      category: "Best Practices",
      image: "/placeholder.svg",
      source: "Forbes Technology Council"
    },
    {
      id: 3,
      title: "H2 celebrates 10 years all about people",
      excerpt: "From humble beginnings in Bangalore to becoming a global leader in offshore development, celebrating our people-first journey.",
      date: "Oct 10, 2024",
      category: "Company Milestone",
      image: "/placeholder.svg",
      source: "H2"
    },
    {
      id: 4,
      title: "7 common mistakes CTOs make when implementing AI code tools",
      excerpt: "Artificial intelligence in software development is transforming how teams build products. Here are 7 pitfalls to avoid.",
      date: "Sep 22, 2024",
      category: "Technology Insights",
      image: "/placeholder.svg",
      source: "Forbes Technology Council"
    },
    {
      id: 5,
      title: "5 Tech security lessons every CTO needs to know in the age of deepfakes",
      excerpt: "With advances in generative AI comes new threats. Here are critical security insights for technical leaders.",
      date: "Aug 15, 2024",
      category: "Security",
      image: "/placeholder.svg",
      source: "Forbes Technology Council"
    },
    {
      id: 6,
      title: "H2 certified as a Great Place to Work for 2024",
      excerpt: "We are proud to share that H2 has been recognized for its exceptional workplace culture and employee satisfaction.",
      date: "Jan 12, 2024",
      category: "Company News",
      image: "/placeholder.svg",
      source: "H2"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="h1 mb-8">
              News & Media
            </h1>
            <p className="body-text text-lg max-w-3xl mx-auto">
              Read our features on the web and download our brand assets
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="h3 mb-4">
              FEATURED STORIES
            </h2>
          </div>

          <div className="space-y-8">
            {featuredStories.map((story) => (
              <Card key={story.id} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <img 
                      src={story.image}
                      alt={story.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span>{story.date}</span>
                      <span>•</span>
                      <span>{story.category}</span>
                      <span>•</span>
                      <span>{story.source}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {story.excerpt}
                    </p>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-panel-medium text-panel-medium hover:bg-panel-medium hover:text-background"
                    >
                      READ MORE →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <Button variant="outline" size="sm" disabled>
              ← Previous
            </Button>
            <div className="flex space-x-2">
              <Button variant="default" size="sm" className="bg-panel-medium text-background">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span className="px-3 py-2 text-muted-foreground">...</span>
              <Button variant="outline" size="sm">10</Button>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-panel-medium text-panel-medium hover:bg-panel-medium hover:text-background"
            >
              Next →
            </Button>
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-16 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-turquoise-foreground mb-4">
              MEDIA KIT
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-turquoise-foreground mb-6">
              Download H2's brand assets
            </h3>
          </div>

          <div className="bg-background rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-panel-medium text-background px-6 py-3 rounded font-bold text-lg">
                H2
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Need official H2 branding assets?
              Brand files are royalty-free under our
              Brand Guidelines Terms & Conditions.
              Perfect for articles, presentations and media kits.
            </p>
            <Button 
              size="lg"
              className="bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold"
            >
              📥 DOWNLOAD BRAND ASSETS
            </Button>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
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
      <section className="py-16 bg-panel-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="h3 mb-4">
              Our Locations
            </h2>
            <p className="body-text text-lg">
              Global presence with local expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-12 bg-turquoise rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-sm font-bold text-turquoise-foreground">IN</span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">INDIA</div>
                <div className="text-muted-foreground text-sm">Bangalore</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-12 bg-turquoise rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-sm font-bold text-turquoise-foreground">IE</span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">IRELAND</div>
                <div className="text-muted-foreground text-sm">Dublin</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-12 bg-turquoise rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-sm font-bold text-turquoise-foreground">GB</span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">UK</div>
                <div className="text-muted-foreground text-sm">London</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-12 bg-turquoise rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-sm font-bold text-turquoise-foreground">AU</span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">AUSTRALIA</div>
                <div className="text-muted-foreground text-sm">Sydney</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;