import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  message: string;
  marketing_consent?: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Validate business email (basic business domain check)
    const businessDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];
    const emailDomain = formData.email.split('@')[1]?.toLowerCase();
    if (businessDomains.includes(emailDomain)) {
      return new Response(
        JSON.stringify({ error: "Please use a business email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Store in database
    const { data, error: dbError } = await supabaseClient
      .from("h2contact_submissions")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          marketing_consent: formData.marketing_consent || false,
        },
      ])
      .select();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Data stored successfully:", data);

    // Send confirmation email to submitter
    const confirmationEmail = await resend.emails.send({
      from: "H2 <noreply@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting us!",
      html: `
        <h1>Thank you for reaching out, ${formData.name}!</h1>
        <p>We have received your inquiry and will get back to you as soon as possible.</p>
        <p><strong>Your inquiry details:</strong></p>
        <ul>
          <li><strong>Company:</strong> ${formData.company}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          ${formData.phone ? `<li><strong>Phone:</strong> ${formData.phone}</li>` : ''}
          <li><strong>Message:</strong> ${formData.message}</li>
        </ul>
        <p>Best regards,<br>The H2 Team</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    // Send notification email to admin
    const adminEmail = await resend.emails.send({
      from: "H2 Contact Form <noreply@resend.dev>",
      to: ["hussains@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${formData.name}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Marketing Consent:</strong> ${formData.marketing_consent ? 'Yes' : 'No'}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Admin email sent:", adminEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully",
        data: data
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in h2contact-form function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "An unexpected error occurred" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);