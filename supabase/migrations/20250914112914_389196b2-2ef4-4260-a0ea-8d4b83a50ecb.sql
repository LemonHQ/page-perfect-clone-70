-- Fix critical security vulnerability in contact_submissions table
-- Remove the overly permissive policy that allows public SELECT access
DROP POLICY IF EXISTS "Enable all actions for service role" ON public.contact_submissions;

-- Create a proper service role only policy for SELECT access
-- This ensures only authenticated service role can read contact submissions
CREATE POLICY "Service role only can read contact submissions"
ON public.contact_submissions
FOR SELECT 
TO service_role
USING (true);

-- Create a proper service role only policy for UPDATE access  
CREATE POLICY "Service role only can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

-- Create a proper service role only policy for DELETE access
CREATE POLICY "Service role only can delete contact submissions"
ON public.contact_submissions  
FOR DELETE
TO service_role
USING (true);

-- The existing INSERT policy for anonymous users remains unchanged
-- This allows the contact form to continue working for public users