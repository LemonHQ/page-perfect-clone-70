import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer three main services: Dedicated Development Teams, Development Team Extension, and Offshore Development Centers. Each service is designed to help you scale your engineering capabilities with world-class talent from Bangalore."
    },
    {
      question: "Is offshoring the same as outsourcing?",
      answer: "No, offshoring and outsourcing are different. Outsourcing involves hiring external companies to handle specific tasks or projects. Offshoring means setting up operations in another country, often with dedicated teams that work exclusively for your company, which is what we specialize in."
    },
    {
      question: "I have a short term project, can you help me?",
      answer: "While we specialize in long-term partnerships and dedicated teams, we can certainly discuss short-term projects. Our minimum engagement is typically 3-6 months to ensure proper team integration and project success."
    },
    {
      question: "Can I start with just one developer?",
      answer: "Yes, you can start with a single developer and scale up as needed. However, we find that teams of 3-5 developers often provide better collaboration and knowledge sharing, leading to more successful outcomes."
    },
    {
      question: "What types of companies do you work with?",
      answer: "We work with companies of all sizes, from startups to Fortune 500 enterprises, across various industries including fintech, healthcare, e-commerce, SaaS, and more. Our clients span 47+ countries worldwide."
    },
    {
      question: "Can I find developers with expertise in a specific technology/programming language?",
      answer: "Absolutely! We have engineers skilled in a wide range of technologies including React, Node.js, Python, Java, .NET, mobile development (iOS/Android), cloud platforms (AWS, Azure, GCP), and many more specialized technologies."
    },
    {
      question: "I've never been to India, how do I establish the team?",
      answer: "You don't need to visit India to establish your team, though you're always welcome! We handle the entire setup process remotely, including recruitment, infrastructure setup, legal compliance, and team integration. Many of our clients successfully manage their teams remotely."
    },
    {
      question: "How do you make sure you find the right candidates?",
      answer: "Our rigorous vetting process includes technical assessments, cultural fit interviews, communication evaluations, and reference checks. We also involve you in the final interview stages to ensure the candidates meet your specific requirements."
    },
    {
      question: "What checks do you carry out on engineers?",
      answer: "We conduct comprehensive background checks, verify educational credentials, assess technical skills through coding tests and technical interviews, evaluate English proficiency, and check references from previous employers."
    },
    {
      question: "Can we use our own technical exercise?",
      answer: "Yes, we encourage using your own technical exercises and coding challenges. This helps ensure candidates can meet your specific technical requirements and work with your preferred tools and methodologies."
    },
    {
      question: "Can you hire female engineers?",
      answer: "Absolutely! We actively promote diversity and inclusion in our hiring process. We work with talented female engineers across all technology stacks and seniority levels, and many of our client teams have strong female representation."
    },
    {
      question: "How do you manage retention?",
      answer: "We focus on career development, competitive compensation, excellent working conditions, regular feedback, and creating a positive work environment. Our retention rates are well above industry average because we treat engineers as long-term partners, not just resources."
    },
    {
      question: "What if I'm not satisfied with the performance of my engineers?",
      answer: "We have a structured performance management process. If issues arise, we work with you to provide additional training, coaching, or if necessary, replace team members. Our goal is your complete satisfaction with the team's performance."
    },
    {
      question: "Do you provide equipment for the engineers?",
      answer: "Yes, we provide all necessary equipment including laptops, monitors, office furniture, and software licenses. We ensure your team has everything they need to be productive from day one."
    },
    {
      question: "Is communication an issue?",
      answer: "Communication is rarely an issue. All our engineers are proficient in English, both written and spoken. We also provide communication training and establish clear protocols for regular updates, meetings, and collaboration."
    },
    {
      question: "Are you GDPR compliant?",
      answer: "Yes, we are fully GDPR compliant. We have implemented comprehensive data protection policies, security measures, and privacy controls to ensure all personal and business data is handled according to GDPR requirements."
    },
    {
      question: "How do I handle the time difference?",
      answer: "We work with you to establish overlapping hours that work for both teams. Many clients find the time difference advantageous for round-the-clock development. Our teams are flexible and can adjust their schedules to maximize collaboration time."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1>
              FAQ
            </h1>
            <p className="body-text text-lg max-w-3xl mx-auto">
              Your most common questions answered
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-panel-soft text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2>
            Set up a world-class tech team in Bangalore
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-sm font-bold">1</span>
              </div>
              <span>Tell us what you need</span>
              <p className="text-navy-foreground/60 text-sm ml-4">Fill in your details - no fluff & 100% confidential and secure</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-sm font-bold">2</span>
              </div>
              <span>Talk to our experts</span>
              <div className="flex ml-4">
                <div className="w-8 h-8 rounded-full bg-turquoise border-2 border-navy"></div>
                <div className="w-8 h-8 rounded-full bg-yellow border-2 border-navy -ml-2"></div>
                <div className="w-8 h-8 rounded-full bg-turquoise-light border-2 border-navy -ml-2"></div>
              </div>
              <p className="text-navy-foreground/60 text-sm ml-2">One of our team members will contact you promptly for a brief discovery call</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-turquoise rounded-full flex items-center justify-center">
                <span className="text-turquoise-foreground text-sm font-bold">3</span>
              </div>
              <span>Get a tailored proposal</span>
              <p className="text-navy-foreground/60 text-sm ml-4">We'll prepare a solution matched to your needs and timeline</p>
            </div>
          </div>

          {/* Contact Form Preview */}
          <div className="bg-background rounded-lg p-6 max-w-md mx-auto mb-8">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Full name*" 
                  className="flex-1 p-3 border border-input rounded-md text-foreground"
                />
                <input 
                  type="email" 
                  placeholder="Business email*" 
                  className="flex-1 p-3 border border-input rounded-md text-foreground"
                />
              </div>
              <input 
                type="text" 
                placeholder="Phone number*" 
                className="w-full p-3 border border-input rounded-md text-foreground"
              />
              <input 
                type="text" 
                placeholder="Company name*" 
                className="w-full p-3 border border-input rounded-md text-foreground"
              />
              <textarea 
                placeholder="Message*" 
                rows={4}
                className="w-full p-3 border border-input rounded-md text-foreground"
              ></textarea>
              <Button 
                size="lg"
                className="w-full bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold"
              >
                SEND NOW ➤
              </Button>
            </div>
            <div className="flex items-center justify-center mt-4 text-xs text-muted-foreground">
              <span className="w-4 h-4 bg-turquoise rounded-full mr-2"></span>
              <span>100% confidential</span>
              <span className="w-4 h-4 bg-turquoise rounded-full mx-2"></span>
              <span>We sign NDAs</span>
            </div>
          </div>

          {/* Location indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
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
                <span className="text-xs font-bold text-turquoise-foreground">UK</span>
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
        </div>
      </section>
    </div>
  );
};

export default FAQ;