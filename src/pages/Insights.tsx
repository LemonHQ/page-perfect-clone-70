import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import ContactSection from "@/components/ContactSection";

const Insights = () => {
  const featuredArticle = {
    id: 1,
    title: "The Future of Agile Transformation: Beyond Frameworks to Cultural Change",
    excerpt: "Explore how successful organizations are moving beyond traditional agile frameworks to create lasting cultural transformations that drive sustainable business value.",
    content: "In today's rapidly evolving business landscape, organizations are discovering that true agile transformation goes far beyond implementing frameworks like Scrum or Kanban...",
    author: "Sarah Chen",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Agile Transformation",
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: "5 Signs Your Digital Transformation Initiative Needs Course Correction",
      excerpt: "Learn to identify early warning signals that indicate your transformation program may be heading off track and how to address them proactively.",
      author: "Michael Rodriguez",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Digital Transformation"
    },
    {
      id: 3,
      title: "Building High-Performance Teams: Lessons from 100+ Agile Implementations",
      excerpt: "Key insights and proven strategies for creating teams that consistently deliver exceptional results, based on real-world case studies.",
      author: "Emma Thompson",
      date: "2024-03-08",
      readTime: "10 min read",
      category: "Team Building"
    },
    {
      id: 4,
      title: "Portfolio Management in the Age of Rapid Change",
      excerpt: "How modern portfolio management practices are evolving to handle increased uncertainty and accelerated delivery expectations.",
      author: "David Park",
      date: "2024-03-05",
      readTime: "7 min read",
      category: "Portfolio Management"
    },
    {
      id: 5,
      title: "The ROI of Agile Coaching: Measuring Success Beyond Velocity",
      excerpt: "Discover comprehensive metrics and KPIs that demonstrate the true business impact of agile coaching initiatives.",
      author: "Lisa Anderson",
      date: "2024-03-02",
      readTime: "9 min read",
      category: "Agile Coaching"
    },
    {
      id: 6,
      title: "DevOps Integration Strategies for Enterprise Organizations",
      excerpt: "Practical approaches for integrating DevOps practices into existing enterprise structures without disrupting critical operations.",
      author: "James Wilson",
      date: "2024-02-28",
      readTime: "12 min read",
      category: "DevOps"
    }
  ];

  const categories = ["All", "Agile Transformation", "Digital Transformation", "Team Building", "Portfolio Management", "Agile Coaching", "DevOps"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1>Insights & Expertise</h1>
            <p className="body-text text-lg max-w-3xl mx-auto mt-6">
              Stay ahead of the curve with our latest thinking on agile transformation, digital innovation, 
              and organizational change. Expert perspectives backed by real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">Featured Article</Badge>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-muted/30 h-80 lg:h-auto"></div>
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline">{featuredArticle.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredArticle.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <h2 className="mb-4">{featuredArticle.title}</h2>
                  <p className="body-text mb-6">{featuredArticle.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{featuredArticle.author}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <Link to="/insights/agile-transformation">
                      <Button variant="outline" className="group">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-t border-b bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} to={`/insights/${article.id === 2 ? 'digital-transformation-signs' : article.id === 3 ? 'building-high-performance-teams' : article.id === 4 ? 'portfolio-management-rapid-change' : 'agile-coaching-roi'}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className="bg-muted/30 h-48"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                          <User className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-muted-foreground">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2>Stay Updated</h2>
          <p className="body-text text-lg mt-4 mb-8">
            Get the latest insights delivered directly to your inbox. Join our community of transformation leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-8">Subscribe</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Insights;