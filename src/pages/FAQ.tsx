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
            <h1 className="h1 mb-8">
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

export default FAQ;