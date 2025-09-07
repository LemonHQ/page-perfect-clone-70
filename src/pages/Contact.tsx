import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1>
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
                <h2>
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
                    <Input 
                      type="text" 
                      placeholder="First name*" 
                      className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                    />
                  </div>
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Last name*" 
                      className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Business email*" 
                      className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Phone number" 
                      className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                    />
                  </div>
                </div>

                <div>
                  <Input 
                    type="text" 
                    placeholder="Company name*" 
                    className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise"
                  />
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
                  <Textarea 
                    placeholder="Message*" 
                    rows={6}
                    className="w-full p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold py-4 rounded-full"
                  >
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
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2>
            Follow us to stay up to date
          </h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-panel-warm rounded-full flex items-center justify-center hover:bg-panel-medium transition-colors group"
            >
              <Linkedin className="w-8 h-8 text-background group-hover:text-background" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-panel-warm rounded-full flex items-center justify-center hover:bg-panel-medium transition-colors group"
            >
              <Twitter className="w-8 h-8 text-background group-hover:text-background" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-panel-warm rounded-full flex items-center justify-center hover:bg-panel-medium transition-colors group"
            >
              <Facebook className="w-8 h-8 text-background group-hover:text-background" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-panel-warm rounded-full flex items-center justify-center hover:bg-panel-medium transition-colors group"
            >
              <Instagram className="w-8 h-8 text-background group-hover:text-background" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>
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

      {/* CTA Section */}
      <section className="py-16 bg-turquoise text-turquoise-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2>
            Ready to build your dream team?
          </h2>
          <p className="body-text text-lg mb-8">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-panel-medium text-background hover:bg-panel-medium/90 font-semibold px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              CALL US NOW
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-turquoise font-semibold px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              SEND EMAIL
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;