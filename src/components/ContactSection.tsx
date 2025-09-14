import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;