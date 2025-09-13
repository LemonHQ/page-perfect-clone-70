import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
const Blog = () => {
  const blogPosts = [{
    id: 1,
    title: "From Outsourcing to Offshoring — Building Resilient Tech Teams",
    excerpt: "A comprehensive guide on transitioning from traditional outsourcing to building dedicated offshore teams that become true extensions of your organization.",
    author: "Emilien Coquard",
    authorRole: "CEO & Co-Founder",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
    category: "Strategy",
    tags: ["Outsourcing", "Offshoring", "Team Building"],
    featured: true
  }, {
    id: 2,
    title: "5 Problems with Outsourcing and How You Can Overcome Them All",
    excerpt: "Learn about the most common challenges companies face with traditional outsourcing and discover proven strategies to build more effective offshore partnerships.",
    author: "Monica Antanacci",
    authorRole: "VP People & Culture",
    date: "March 10, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg",
    category: "Strategy",
    tags: ["Outsourcing", "Problem Solving", "Best Practices"]
  }, {
    id: 3,
    title: "Offshore Software Development: Your Must-Know Guide",
    excerpt: "Everything you need to know about offshore software development - from selecting the right partner to managing distributed teams effectively.",
    author: "Deepak Ramakrishnan",
    authorRole: "CTO & Co-Founder",
    date: "March 5, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg",
    category: "Development",
    tags: ["Offshore Development", "Software", "Guide"]
  }, {
    id: 4,
    title: "Benefits of Offshoring vs Outsourcing vs In-House Development",
    excerpt: "A detailed comparison of the three main approaches to building software teams - helping you choose the right model for your organization.",
    author: "Balasundar Pulnintasamy",
    authorRole: "VP Engineering",
    date: "February 28, 2024",
    readTime: "9 min read",
    image: "/placeholder.svg",
    category: "Strategy",
    tags: ["Comparison", "Development Models", "Strategy"]
  }, {
    id: 5,
    title: "Go from Outsourced Help to Long-Term Tech Teams",
    excerpt: "CTO guide on setting up top tech teams to support your business's long-term growth and how to transition from temporary help to permanent partnerships.",
    author: "Ryan Choon",
    authorRole: "VP Operations",
    date: "February 20, 2024",
    readTime: "11 min read",
    image: "/placeholder.svg",
    category: "Leadership",
    tags: ["CTO Guide", "Long-term Strategy", "Growth"]
  }, {
    id: 6,
    title: "Building Cross-Cultural Teams: Lessons from 130+ Partnerships",
    excerpt: "Key strategies for creating effective cross-cultural development teams that deliver exceptional results across different time zones and cultures.",
    author: "Adithi Kiran",
    authorRole: "VP Talent Acquisition",
    date: "February 15, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg",
    category: "Culture",
    tags: ["Cross-Cultural", "Team Management", "Communication"]
  }, {
    id: 7,
    title: "Bangalore: The Silicon Valley of Asia - Why Location Matters",
    excerpt: "Discover why Bangalore has become the world's premier destination for offshore development and what makes it the ideal hub for scaling tech teams.",
    author: "Deepak Ramakrishnan",
    authorRole: "CTO & Co-Founder",
    date: "February 10, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg",
    category: "Location",
    tags: ["Bangalore", "India", "Tech Hub"]
  }, {
    id: 8,
    title: "Talent Acquisition in India: Finding the Top 1% of Engineers",
    excerpt: "Our proven methodology for identifying and recruiting elite engineering talent from India's vast pool of over 2 million developers.",
    author: "Adithi Kiran",
    authorRole: "VP Talent Acquisition",
    date: "February 5, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
    category: "Recruitment",
    tags: ["Talent Acquisition", "India", "Engineering Talent"]
  }];
  const categories = ["All", "Strategy", "Development", "Leadership", "Culture", "Location", "Recruitment"];
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="h1 mb-8">
              H2 Blog
            </h1>
            <p className="body-text text-lg max-w-3xl mx-auto mb-12">
              Insights, trends, and best practices in offshore development, team building, and scaling technology organizations globally.
            </p>
            <div className="max-w-md mx-auto relative">
              <Input type="text" placeholder="Search articles..." className="pl-12 pr-4 py-3 border-input" />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => <Button key={category} variant={category === "All" ? "default" : "outline"} className={category === "All" ? "bg-panel-medium text-background hover:bg-panel-medium/90" : "border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground"}>
                {category}
              </Button>)}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-sm font-medium text-turquoise bg-turquoise/10 px-3 py-1 rounded-full">
                FEATURED ARTICLE
              </span>
            </div>
            
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-turquoise text-turquoise-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="h3 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="body-text text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-turquoise rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{featuredPost.author}</p>
                      <p className="text-sm text-muted-foreground">{featuredPost.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredPost.tags.map(tag => <span key={tag} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>)}
                  </div>
                  <Button className="bg-panel-medium text-background hover:bg-panel-medium/90 group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>}

      {/* Latest Articles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest insights and trends in offshore development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 text-foreground px-2 py-1 rounded text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-turquoise transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map(tag => <span key={tag} className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>)}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-panel-medium group-hover:text-background group-hover:border-panel-medium transition-all">
                    Read Article
                  </Button>
                </div>
              </Card>)}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-panel-medium text-panel-medium hover:bg-panel-medium hover:text-background">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-turquoise text-turquoise-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay in the loop
          </h2>
          <p className="text-xl mb-8 text-turquoise-foreground/90">
            Get the latest insights on offshore development, team building, and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-foreground border-white" />
            <Button size="lg" className="bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-turquoise-foreground/70 mt-4">
            No spam, unsubscribe anytime. Read our privacy policy.
          </p>
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 mb-8 tracking-wider">
              OUR LOCATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="text-center">
              <h3 className="h4 mb-6">INDIA</h3>
              <div className="space-y-2">
                <p className="h5">43 Residency Road</p>
                <p className="h5">Bangalore, 560025</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="h4 mb-6">IRELAND</h3>
              <div className="space-y-2">
                <p className="h5">13 Adelaide Road</p>
                <p className="h5">Dublin 2, D02 P950</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="h4 mb-6">UK</h3>
              <div className="space-y-2">
                <p className="h5">127 Cheapside</p>
                <p className="h5">London, EC2V 6BT</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="h4 mb-6">AUSTRALIA</h3>
              <div className="space-y-2">
                <p className="h5">383 George St</p>
                <p className="h5">Sydney, NSW 2000</p>
              </div>
            </div>
          </div>

          {/* World Map */}
          <div className="relative bg-panel-soft rounded-lg overflow-hidden h-96">
            <img 
              src="/lovable-uploads/e5893bf1-f372-4824-9dc9-7714aaf54ccf.png" 
              alt="Global locations map showing our offices worldwide"
              className="w-full h-full object-cover"
            />
            {/* Location Pins - positioned approximately */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-turquoise rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-turquoise rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute top-1/4 left-[55%] w-4 h-4 bg-turquoise rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-turquoise rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>;
};
export default Blog;