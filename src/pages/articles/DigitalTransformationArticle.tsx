import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2, Twitter, Linkedin, Facebook, Mail, Copy, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import digitalTransformationImage from "@/assets/articles/digital-transformation.jpg";
import ContactSection from "@/components/ContactSection";

const DigitalTransformationArticle = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const articleData = {
    title: "5 Signs Your Digital Transformation Initiative Needs Course Correction",
    description: "Learn to identify early warning signals that indicate your transformation program may be heading off track and how to address them proactively.",
    author: "Michael Rodriguez",
    authorTitle: "Digital Transformation Director", 
    publishDate: "2024-03-10",
    readTime: "6 min read",
    category: "Digital Transformation",
    url: typeof window !== 'undefined' ? window.location.href : '',
    image: digitalTransformationImage
  };
  
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleData.title)}&url=${encodeURIComponent(articleData.url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleData.url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleData.url)}`,
    email: `mailto:?subject=${encodeURIComponent(articleData.title)}&body=${encodeURIComponent(articleData.description + '\n\n' + articleData.url)}`
  };
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleData.url);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually from your browser.",
        variant: "destructive",
      });
    }
  };
  
  const handleSocialShare = (platform: string) => {
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{articleData.title} | H2 Insights</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content="digital transformation, course correction, transformation strategy, change management, business transformation" />
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
                5 Signs Your Digital Transformation Initiative Needs Course Correction
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 min read
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  March 10, 2024
                </div>
              </div>
            </div>
            
            {/* Right Side - Hero Image with Geometric Overlay */}
            <div className="relative">
              <img 
                src={digitalTransformationImage} 
                alt="Digital transformation initiative planning" 
                className="w-full h-full object-cover"
              />
              {/* Geometric Overlay Elements */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 opacity-90"></div>
              <div className="absolute bottom-0 left-16 w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-90"></div>
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
              <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
              <p className="text-muted-foreground">Digital Transformation Director</p>
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
                  <DropdownMenuItem onClick={() => handleSocialShare('twitter')} className="cursor-pointer">
                    <Twitter className="w-4 h-4 mr-2" />
                    Share on Twitter
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSocialShare('linkedin')} className="cursor-pointer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Share on LinkedIn
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSocialShare('facebook')} className="cursor-pointer">
                    <Facebook className="w-4 h-4 mr-2" />
                    Share on Facebook
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSocialShare('email')} className="cursor-pointer">
                    <Mail className="w-4 h-4 mr-2" />
                    Share via Email
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleCopyLink} className="cursor-pointer">
                    {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {copied ? 'Link Copied!' : 'Copy Link'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-content">
            <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
              Digital transformation initiatives represent some of the largest investments organizations make, often consuming millions of dollars and spanning multiple years. Yet despite their strategic importance, many of these initiatives struggle to deliver the promised value. Recognizing warning signs early can mean the difference between course correction and complete failure.
            </p>

            <p className="mb-8">
              After leading and observing dozens of digital transformation initiatives across various industries, I've identified five critical warning signs that indicate a transformation program needs immediate attention. More importantly, I'll share actionable strategies for addressing each of these challenges before they derail your entire initiative.
            </p>

            <h2>1. Technology Leading Strategy Instead of Following It</h2>
          <p>
            One of the most common mistakes in digital transformation is allowing technology decisions to drive business strategy rather than the other way around. This typically manifests when organizations become enamored with specific technologies—cloud platforms, artificial intelligence, or automation tools—without clearly articulating how these technologies will create value for customers or competitive advantage.
          </p>

          <h3>The Warning Signs</h3>
          <p>
            You'll know you're experiencing this problem when technology teams are making decisions about platforms and architectures without input from business stakeholders. Conversations focus more on technical capabilities than business outcomes. Project timelines are driven by technology implementation schedules rather than market opportunities or customer needs.
          </p>

          <p>
            Another red flag is when your transformation roadmap looks remarkably similar to a vendor's product roadmap. While vendor partnerships are important, they shouldn't be the primary driver of your transformation strategy. If your initiative could be described as "implementing vendor X's solution," you're likely experiencing technology-driven transformation.
          </p>

          <h3>The Course Correction</h3>
          <p>
            To address this challenge, start by revisiting your business strategy and clearly articulating the specific outcomes your transformation is intended to achieve. These might include improved customer experience, reduced operational costs, new revenue streams, or enhanced competitive positioning. Once these outcomes are clearly defined, technology choices should be evaluated based on their ability to enable these outcomes.
          </p>

          <p>
            Establish cross-functional governance structures that ensure business leaders have equal voice in technology decisions. Create regular checkpoints where the business case for specific technology investments is reviewed and validated. Most importantly, be prepared to change technology choices if they're not delivering the expected business value.
          </p>

          <h2>2. Lack of Clear Success Metrics and Progress Tracking</h2>
          <p>
            Many digital transformation initiatives suffer from measurement problems. Either they lack clear success metrics entirely, or they focus on the wrong types of metrics. This creates a situation where it's impossible to determine whether the transformation is succeeding or failing until it's too late to make adjustments.
          </p>

          <h3>The Warning Signs</h3>
          <p>
            The most obvious warning sign is the inability to answer the question: "How will we know when this transformation is successful?" If stakeholders provide vague answers about "improved efficiency" or "better customer experience" without specific, measurable targets, you have a metrics problem.
          </p>

          <p>
            Another indication is when progress reports focus primarily on activity metrics rather than outcome metrics. Reports that emphasize the number of systems migrated, training sessions completed, or applications developed might indicate busy work rather than meaningful progress toward transformation goals.
          </p>

          <p>
            You should also be concerned if you're not regularly tracking leading indicators of success. Waiting to measure success until the transformation is "complete" is like trying to steer a ship by looking only at where you've been rather than where you're going.
          </p>

          <h3>The Course Correction</h3>
          <p>
            Establish a balanced scorecard approach that includes both leading and lagging indicators of success. Leading indicators might include employee engagement scores, customer feedback on new digital touchpoints, or the speed of new product development cycles. Lagging indicators should directly tie to business outcomes like revenue growth, cost reduction, or market share gains.
          </p>

          <p>
            Create regular rhythm of measurement and review. Monthly business reviews should include transformation progress alongside operational performance. Quarterly assessments should evaluate whether the transformation is delivering the expected return on investment and whether course corrections are needed.
          </p>

          <p>
            Most importantly, make metrics transparent and accessible to all stakeholders. When everyone can see progress (or lack thereof) in real-time, it creates accountability and enables faster decision-making when problems arise.
          </p>

          <h2>3. Insufficient Change Management and Employee Adoption</h2>
          <p>
            Technical implementation is often the easier part of digital transformation. The harder challenge is helping people adapt to new ways of working. When organizations underestimate the change management requirements, they often find that their new systems and processes aren't being adopted, regardless of their technical sophistication.
          </p>

          <h3>The Warning Signs</h3>
          <p>
            Low adoption rates of new systems or processes are the most obvious indicator of change management problems. But you should also look for more subtle signs: employees finding workarounds to avoid new processes, complaints about new systems being "too complicated," or decreased productivity following the implementation of new tools.
          </p>

          <p>
            Another warning sign is when change management is treated as an afterthought or delegated entirely to HR or communications teams. While these functions play important roles, change management for digital transformation requires dedicated resources and executive sponsorship.
          </p>

          <p>
            You should be particularly concerned if resistance is coming from middle management. These individuals often bear the burden of implementing new processes while maintaining operational performance, and their resistance can effectively kill transformation initiatives even when senior leadership remains supportive.
          </p>

          <h3>The Course Correction</h3>
          <p>
            Start by conducting honest assessments of organizational readiness for change. This includes evaluating not just technical readiness but also cultural readiness. Some organizations may need to invest in foundational culture change before they can successfully implement digital transformation.
          </p>

          <p>
            Develop comprehensive change management strategies that address different stakeholder groups individually. Senior executives need different information and motivation than front-line employees. Middle managers need specific support to help them lead change in their areas of responsibility.
          </p>

          <p>
            Create opportunities for employees to participate in designing new processes and systems. When people have input into how change affects their work, they're more likely to support and adopt new approaches. This participatory approach also often leads to better solutions because it incorporates the practical insights of people who will use the systems daily.
          </p>

          <h2>4. Siloed Implementation Without Cross-Functional Integration</h2>
          <p>
            Digital transformation, by definition, should transform how different parts of the organization work together. When initiatives are implemented in silos, they often create new inefficiencies rather than eliminating existing ones. This silo problem is particularly common in large organizations where different departments have separate budgets and priorities.
          </p>

          <h3>The Warning Signs</h3>
          <p>
            The clearest indicator of siloed implementation is when different departments are implementing conflicting or incompatible solutions. For example, marketing might implement one customer relationship management system while sales implements another, creating data integration challenges and customer experience problems.
          </p>

          <p>
            You should also be concerned if transformation initiatives aren't considering downstream impacts. When the finance team implements new processes without considering how they affect operations teams, or when IT implements new systems without considering their impact on customer-facing teams, you're seeing silo thinking in action.
          </p>

          <p>
            Another warning sign is the absence of cross-functional teams in transformation governance. If transformation decisions are being made within departmental boundaries rather than through cross-functional collaboration, integration problems are inevitable.
          </p>

          <h3>The Course Correction</h3>
          <p>
            Establish cross-functional governance structures with clear accountability for integration outcomes. This might include creating roles like "integration owners" who are specifically responsible for ensuring different workstreams work together effectively.
          </p>

          <p>
            Develop shared data and process architectures that enable integration rather than perpetuating silos. This often requires making difficult decisions about standardization versus customization, but these decisions are essential for achieving transformation benefits.
          </p>

          <p>
            Create incentive structures that reward cross-functional collaboration. When departmental metrics don't align with transformation goals, departments will naturally optimize for their local objectives rather than overall transformation success.
          </p>

          <h2>5. Unrealistic Timelines and Resource Constraints</h2>
          <p>
            Digital transformation is complex work that requires sustained effort over extended periods. When organizations set unrealistic expectations for timeline or resource requirements, they create conditions that virtually guarantee failure. This problem is often compounded by the pressure to show quick returns on transformation investments.
          </p>

          <h3>The Warning Signs</h3>
          <p>
            The most obvious indicator is when transformation timelines don't account for the complexity of change management and integration work. Technical implementations might be estimated reasonably, but if there's insufficient time allocated for testing, training, and adjustment, the timeline is unrealistic.
          </p>

          <p>
            You should also be concerned if key resources are allocated to transformation work only part-time. Digital transformation requires sustained focus and attention. When critical team members are trying to maintain business-as-usual responsibilities while also driving transformation, something will suffer.
          </p>

          <p>
            Another warning sign is when transformation plans don't include buffer time for inevitable setbacks and course corrections. Transformations that look great on paper but have no slack for adjustments are setting themselves up for failure when reality doesn't match the plan.
          </p>

          <h3>The Course Correction</h3>
          <p>
            Conduct realistic assessments of transformation scope and complexity. This might require bringing in external expertise to provide objective estimates of time and resource requirements. It's better to have difficult conversations about resource needs early than to fail to deliver on unrealistic commitments.
          </p>

          <p>
            Consider phased approaches that deliver value incrementally rather than trying to achieve everything at once. This approach reduces risk, enables learning and adjustment, and can help maintain stakeholder confidence by showing progress more frequently.
          </p>

          <p>
            Most importantly, secure dedicated resources for transformation work. This might require making difficult decisions about other priorities, but trying to do transformation "on the side" while maintaining all existing commitments is a recipe for failure.
          </p>

          <h2>Proactive Monitoring and Continuous Adjustment</h2>
          <p>
            The key to successful digital transformation isn't avoiding all problems—it's identifying and addressing problems quickly when they arise. This requires creating systems and processes for ongoing monitoring and adjustment.
          </p>

          <p>
            Establish regular checkpoints where transformation progress is honestly assessed against original objectives. These checkpoints should be safe spaces where problems can be surfaced without blame or recrimination. The goal is learning and improvement, not accountability for past decisions.
          </p>

          <p>
            Create feedback loops that capture insights from all stakeholder groups, including customers, employees, and partners. Often, the people closest to the work have the best insights about what's working and what isn't, but they need explicit opportunities to share this feedback.
          </p>

          <h2>Conclusion</h2>
          <p>
            Digital transformation is challenging work, and setbacks are normal. The organizations that succeed aren't those that avoid all problems, but those that identify and address problems quickly and effectively. By watching for these five warning signs and having plans for addressing them, you can significantly increase your chances of transformation success.
          </p>

          <p>
            Remember that course correction isn't a sign of failure—it's a sign of good management. The business environment is constantly changing, and your transformation approach should evolve accordingly. Stay focused on business outcomes, maintain open communication with all stakeholders, and be prepared to adapt your approach based on what you learn along the way.
          </p>

            <p>
              The most successful digital transformations are those that embrace learning and adjustment as core capabilities. By building these capabilities into your transformation approach from the beginning, you'll be better positioned to navigate the inevitable challenges and ultimately achieve your transformation goals.
            </p>

            <div className="mt-12 p-8 bg-muted/30 rounded-lg">
              <h3>About the Author</h3>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">
                    Michael is a Digital Transformation Director with 12+ years of experience leading large-scale technology initiatives across retail, manufacturing, and financial services. He specializes in organizational change management and has a track record of delivering measurable business outcomes through strategic technology adoption.
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

export default DigitalTransformationArticle;