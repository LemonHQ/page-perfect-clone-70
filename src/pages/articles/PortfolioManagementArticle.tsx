import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";
import portfolioManagementImage from "@/assets/articles/portfolio-management.jpg";
import ContactSection from "@/components/ContactSection";

const PortfolioManagementArticle = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12 border-b bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/insights" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="outline">Portfolio Management</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                March 5, 2024
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                7 min read
              </div>
            </div>
          </div>
          
          <h1 className="mb-6">Portfolio Management in the Age of Rapid Change</h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">David Park</p>
                <p className="text-sm text-muted-foreground">Portfolio Strategy Director</p>
              </div>
            </div>
            
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="max-w-6xl mx-auto">
          <img 
            src={portfolioManagementImage} 
            alt="Portfolio management strategy session" 
            className="w-full h-96 object-cover"
          />
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <p className="lead text-xl mb-8">
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

          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
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
      </article>

      <ContactSection />
    </div>
  );
};

export default PortfolioManagementArticle;