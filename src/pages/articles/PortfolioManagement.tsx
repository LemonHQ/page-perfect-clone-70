import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2, Twitter, Linkedin, Facebook, Mail, Copy } from "lucide-react";
import ReactHelmet from "react-helmet-async";
const { Helmet } = ReactHelmet;
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import portfolioManagementImage from "@/assets/articles/portfolio-management.jpg";
import ContactSection from "@/components/ContactSection";

const PortfolioManagement = () => {
  const articleData = {
    title: "Portfolio Management in the Age of Rapid Change",
    description: "Traditional portfolio management approaches, designed for predictable environments, are struggling to cope with today's pace of change. Discover new frameworks that balance strategic vision with tactical agility.",
    author: "David Park",
    authorTitle: "Portfolio Strategy Director", 
    publishDate: "2024-03-05",
    readTime: "7 min read",
    category: "Portfolio Management",
    url: typeof window !== 'undefined' ? window.location.href : '',
    image: portfolioManagementImage
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{articleData.title} | H2 Insights</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content="portfolio management, strategic planning, resource allocation, adaptive planning, business strategy" />
        <meta name="author" content={articleData.author} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.description} />
        <meta property="og:image" content={articleData.image} />
        <meta property="og:url" content={articleData.url} />
        <meta property="og:site_name" content="H2 Insights" />
        <meta property="article:author" content={articleData.author} />
        <meta property="article:published_time" content={articleData.publishDate} />
        <meta property="article:section" content={articleData.category} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleData.title} />
        <meta name="twitter:description" content={articleData.description} />
        <meta name="twitter:image" content={articleData.image} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={articleData.url} />
        
        {/* Structured Data - Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": articleData.title,
            "description": articleData.description,
            "image": articleData.image,
            "author": {
              "@type": "Person",
              "name": articleData.author,
              "jobTitle": articleData.authorTitle
            },
            "publisher": {
              "@type": "Organization",
              "name": "H2",
              "logo": {
                "@type": "ImageObject",
                "url": "/src/assets/H2-logo.jpg"
              }
            },
            "datePublished": articleData.publishDate,
            "dateModified": articleData.publishDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": articleData.url
            }
          })}
        </script>
      </Helmet>

      {/* Reading Progress Bar */}
      <div className="reading-progress" id="reading-progress"></div>
      {/* Hero Section with Split Layout */}
      <section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
              <Link to="/insights" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
              
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4 text-xs font-medium">INSIGHTS</Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Portfolio Management in the Age of Rapid Change
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min read
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  March 5, 2024
                </div>
              </div>
            </div>
            
            {/* Right Side - Hero Image with Geometric Overlay */}
            <div className="relative">
              <img 
                src={portfolioManagementImage} 
                alt="Portfolio management strategy session" 
                className="w-full h-full object-cover"
              />
              {/* Geometric Overlay Elements */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-90"></div>
              <div className="absolute bottom-0 left-16 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 opacity-90"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 border-b bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center overflow-hidden">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">David Park</h3>
              <p className="text-muted-foreground">Portfolio Strategy Director</p>
            </div>
            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="cursor-pointer">
                    <Twitter className="w-4 h-4 mr-2" />
                    Share on Twitter
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Share on LinkedIn
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Facebook className="w-4 h-4 mr-2" />
                    Share on Facebook
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Mail className="w-4 h-4 mr-2" />
                    Share via Email
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Link
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-content">
            <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
              Traditional portfolio management approaches, designed for predictable environments, are struggling to cope with today's pace of change. Organizations need new frameworks that balance strategic vision with tactical agility, enabling rapid response to market shifts while maintaining long-term value creation.
            </p>

          <h2>The New Reality of Portfolio Management</h2>
          <p>
            The business environment has fundamentally changed. Market conditions shift rapidly, customer expectations evolve continuously, and competitive threats emerge from unexpected directions. In this context, traditional portfolio management approaches—with their emphasis on detailed long-term planning and rigid governance structures—are not just inadequate but potentially harmful.
          </p>

          <p>
            Modern portfolio management must embrace uncertainty as a constant rather than an exception. This requires new approaches to planning, resource allocation, and performance measurement that enable organizations to adapt quickly while maintaining strategic coherence.
          </p>

          <h2>Dynamic Resource Allocation</h2>
          <p>
            Instead of annual planning cycles that lock in resource commitments for extended periods, successful organizations are adopting dynamic allocation approaches. These systems enable rapid reallocation of resources based on changing priorities and market conditions.
          </p>

          <p>
            Key practices include shorter planning horizons, flexible team structures, and outcome-based funding models that allow resources to flow toward the highest-value opportunities regardless of traditional organizational boundaries.
          </p>

          <h2>Measuring Value in Uncertain Environments</h2>
          <p>
            Traditional ROI calculations lose relevance when business conditions change rapidly. Modern portfolio management requires new metrics that capture both current performance and future optionality.
          </p>

            <p>
              This includes leading indicators of market position, customer satisfaction trends, and organizational learning rates. The goal is creating portfolios that perform well under multiple scenarios rather than optimizing for single-point forecasts.
            </p>

            <div className="mt-12 p-8 bg-muted/30 rounded-lg">
              <h3>About the Author</h3>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold">David Park</p>
                  <p className="text-sm text-muted-foreground">
                    David is a Portfolio Strategy Director with deep expertise in adaptive planning methodologies and dynamic resource allocation. He has helped numerous organizations transform their portfolio management approaches to thrive in uncertain environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ContactSection />
    </div>
  );
};

export default PortfolioManagement;