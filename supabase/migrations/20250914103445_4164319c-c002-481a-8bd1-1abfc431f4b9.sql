-- Create h2contact_submissions table
CREATE TABLE public.h2contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  message TEXT NOT NULL,
  marketing_consent BOOLEAN DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.h2contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insertions
CREATE POLICY "Allow public h2contact submissions" 
ON public.h2contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for service role to read all submissions
CREATE POLICY "Service role can read h2contact submissions" 
ON public.h2contact_submissions 
FOR SELECT 
USING (true);