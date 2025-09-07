import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const News = () => {
  const featuredStories = [
    {
      id: 1,
      title: "The Scalers certified as a Great Place to Work for 2025",
      excerpt: "We are thrilled to announce that The Scalers has been officially recognized as a Great Place to Work certified company for 2025.",
      date: "Dec 15, 2024",
      category: "Company News",
      image: "/placeholder.svg",
      source: "The Scalers"
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
      title: "The Scalers celebrates 10 years all about people",
      excerpt: "From humble beginnings in Bangalore to becoming a global leader in offshore development, celebrating our people-first journey.",
      date: "Oct 10, 2024",
      category: "Company Milestone",
      image: "/placeholder.svg",
      source: "The Scalers"
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
      title: "The Scalers certified as a Great Place to Work for 2024",
      excerpt: "We are proud to share that The Scalers has been recognized for its exceptional workplace culture and employee satisfaction.",
      date: "Jan 12, 2024",
      category: "Company News",
      image: "/placeholder.svg",
      source: "The Scalers"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-turquoise py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-turquoise-foreground mb-6">
            News & Media
          </h1>
          <p className="text-xl text-turquoise-foreground/80 max-w-3xl mx-auto">
            Read our features on the web and download our brand assets
          </p>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
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
                      className="border-turquoise text-turquoise hover:bg-turquoise hover:text-turquoise-foreground"
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
              <Button variant="default" size="sm" className="bg-turquoise text-turquoise-foreground">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span className="px-3 py-2 text-muted-foreground">...</span>
              <Button variant="outline" size="sm">10</Button>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-turquoise text-turquoise hover:bg-turquoise hover:text-turquoise-foreground"
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
              Download The Scalers' brand assets
            </h3>
          </div>

          <div className="bg-background rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-navy text-navy-foreground px-6 py-3 rounded font-bold text-lg">
                THE SCALERS
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Need official The Scalers branding assets?
              Brand files are royalty-free under our
              Brand Guidelines Terms & Conditions.
              Perfect for articles, presentations and media kits.
            </p>
            <Button 
              size="lg"
              className="bg-navy text-navy-foreground hover:bg-navy/90 font-semibold"
            >
              📥 DOWNLOAD BRAND ASSETS
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Set up a world-class tech team in Bangalore
          </h2>
          <p className="text-xl mb-8 text-navy-foreground/80">
            From 5 to 500+ engineers - we help companies scale their development capabilities
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-sm font-bold">1</span>
              </div>
              <span>Tell us what you need</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-sm font-bold">2</span>
              </div>
              <span>Talk to our experts 👥👥👥</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-sm font-bold">3</span>
              </div>
              <span>Get a tailored proposal</span>
            </div>
          </div>
          
          {/* Location indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-8 bg-turquoise rounded overflow-hidden flex items-center justify-center">
                <span className="text-xs font-bold text-turquoise-foreground">IN</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">INDIA</div>
                <div className="text-navy-foreground/60 text-xs">Bangalore</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-8 bg-turquoise rounded overflow-hidden flex items-center justify-center">
                <span className="text-xs font-bold text-turquoise-foreground">IE</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">IRELAND</div>
                <div className="text-navy-foreground/60 text-xs">Dublin</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-8 bg-turquoise rounded overflow-hidden flex items-center justify-center">
                <span className="text-xs font-bold text-turquoise-foreground">FR</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">UK</div>
                <div className="text-navy-foreground/60 text-xs">London</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-8 bg-turquoise rounded overflow-hidden flex items-center justify-center">
                <span className="text-xs font-bold text-turquoise-foreground">AU</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">AUSTRALIA</div>
                <div className="text-navy-foreground/60 text-xs">Sydney</div>
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 font-semibold"
            asChild
          >
            <Link to="/contact">LET'S TALK</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default News;