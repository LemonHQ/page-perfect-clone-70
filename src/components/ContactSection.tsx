import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address").refine(
    (email) => {
      const domain = email.split('@')[1]?.toLowerCase();
      const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];
      return !personalDomains.includes(domain);
    },
    "Please use a business email address"
  ),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  marketing_consent: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const marketingConsent = watch("marketing_consent");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { data: result, error } = await supabase.functions.invoke('h2contact-form', {
        body: data,
      });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      reset();
      toast({
        title: "Success!",
        description: "Thank you for your inquiry. We'll get back to you soon!",
      });
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h2>Thank you for reaching out!</h2>
                <p className="body-text mb-6">
                  We've received your inquiry and will get back to you within 24 hours. 
                  A confirmation email has been sent to your inbox.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="h6 font-semibold tracking-wide mb-4">
              FROM Siloed teams to co-ordinated impact
            </div>
            <h2 className="h2 mb-8">
             Agile for change and transformation programs
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black text-sm font-bold">1</span>
                </div>
                <div>
                  <h3>Tell us what you need</h3>
                  <p className="body-text">Fill in your details — your data is 100% confidential and secure</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black text-sm font-bold">2</span>
                </div>
                <div>
                  <h3>Talk to our experts</h3>
                  <p className="body-text">One of our team members will contact you promptly for a brief discovery call</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black text-sm font-bold">3</span>
                </div>
                <div>
                  <h3>Get a tailored proposal</h3>
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
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  {...register("name")}
                  placeholder="Full name*"
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Business email*"
                    className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone number"
                    className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Input
                  {...register("company")}
                  placeholder="Company name*"
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  {...register("message")}
                  placeholder="Message*"
                  rows={4}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketing_consent"
                  checked={marketingConsent}
                  onCheckedChange={(checked) => setValue("marketing_consent", !!checked)}
                />
                <label htmlFor="marketing_consent" className="text-sm text-gray-600">
                  I agree to receive marketing communications
                </label>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3 rounded-full disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "SEND NOW →"}
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