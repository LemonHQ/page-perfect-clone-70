import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="h1 mb-8">
              Contact
            </h1>
            <p className="body-text text-lg max-w-2xl mx-auto">
              Want to get in touch? You're in the right place
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Yellow Panel */}
            <div className="bg-yellow rounded-lg p-12 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-foreground/10 rounded-full transform translate-x-8 translate-y-8"></div>
              <div className="relative z-10">
                <h2 className="h2 mb-8">
                  Let's talk about your new team.
                </h2>
                <p className="body-text text-lg mb-8">
                  Please fill in the form so we can get to know you better. You can also get in touch with us directly via phone{" "}
                  <a href="tel:+442038687491" className="font-bold underline hover:no-underline">
                    +44 20 3868 7491
                  </a>
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-navy" />
                    <span className="h6">+44 20 3868 7491</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-navy" />
                    <span className="h6">hello@thescalers.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-navy" />
                    <span className="h6">Bangalore, Dublin, London, Sydney</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-background p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input type="text" placeholder="First name*" className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                  </div>
                  <div>
                    <Input type="text" placeholder="Last name*" className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input type="email" placeholder="Business email*" className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone number" className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                  </div>
                </div>

                <div>
                  <Input type="text" placeholder="Company name*" className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise" />
                </div>

                <div>
                  <Select>
                    <SelectTrigger className="w-full p-4 border border-input rounded-lg">
                      <SelectValue placeholder="What size is your current development team?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No current team</SelectItem>
                      <SelectItem value="1-5">1-5 developers</SelectItem>
                      <SelectItem value="6-15">6-15 developers</SelectItem>
                      <SelectItem value="16-30">16-30 developers</SelectItem>
                      <SelectItem value="31-50">31-50 developers</SelectItem>
                      <SelectItem value="50+">50+ developers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Select>
                    <SelectTrigger className="w-full p-4 border border-input rounded-lg">
                      <SelectValue placeholder="What size team would you like to set up?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 developers</SelectItem>
                      <SelectItem value="6-15">6-15 developers</SelectItem>
                      <SelectItem value="16-30">16-30 developers</SelectItem>
                      <SelectItem value="31-50">31-50 developers</SelectItem>
                      <SelectItem value="50+">50+ developers</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea placeholder="Message*" rows={6} className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise resize-none" />
                </div>

                <div className="space-y-4">
                  <Button type="submit" size="lg" className="w-full bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold py-4 rounded-full">
                    SUBMIT →
                  </Button>

                  <p className="caption leading-relaxed">
                    To give you the content requested, we need to store and process your personal data. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our{" "}
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      

      {/* Our Locations Section */}
      

      {/* CTA Section */}
      
    </div>;
};
export default Contact;