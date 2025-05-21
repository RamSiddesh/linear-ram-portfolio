
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, PhoneCall, Github, Copy, Check, Loader2 } from 'lucide-react';

type FormInputs = {
  name: string;
  email: string;
  message: string;
  _honeypot?: string; // Optional honeypot field
  _subject?: string; // Optional subject field
};

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>();
  
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setSubmissionStatus('idle'); // Reset status on new submission

    try {
      const updatedData = {
        ...data,
        _subject: `Portfolio Contact: ${data.name}`, // Dynamic subject based on sender's name
      };
      const response = await fetch('https://formspree.io/f/xdkgvnag', { // The new Formspree endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Recommended by Formspree for AJAX submissions
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        // Formspree usually returns a 200 OK. 
        // More robust error handling could check response.json() for { "ok": true } or specific error messages.
        setSubmissionStatus('success');
        reset(); // Reset form fields after successful submission
      } else {
        // Handle non-OK responses (e.g., 4xx, 5xx errors)
        const errorData = await response.json().catch(() => ({})); // Try to parse error JSON, default to empty object
        console.error('Formspree submission failed:', response.status, errorData.errors || 'Unknown error');
        setSubmissionStatus('error');
      }
    } catch (error) {
      // Handle network errors or other issues with the fetch call
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    }
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Interested in collaboration or have questions? Let's connect!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field (hidden) */}
              <input type="text" {...register('_honeypot')} style={{ display: 'none' }} />
              <input type="hidden" {...register('_subject')} defaultValue="Portfolio Contact: New Message" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-2 bg-card border rounded-md focus:outline-none focus:ring-1 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-accent'}`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full px-4 py-2 bg-card border rounded-md focus:outline-none focus:ring-1 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-accent'}`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className={`w-full px-4 py-2 bg-card border rounded-md focus:outline-none focus:ring-1 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-accent'}`}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submissionStatus === 'success'}
                className="w-full px-4 py-2.5 text-white rounded-md bg-gradient-primary hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  'Send Message'
                )}
              </button>
              {submissionStatus === 'success' && (
                <p className="mt-2 text-sm text-green-500">Message sent successfully! Thank you for reaching out.</p>
              )}
              {submissionStatus === 'error' && (
                <p className="mt-2 text-sm text-red-500">Failed to send message. Please try again later or contact me directly via email.</p>
              )}
            </form>
          </div>
          
          <div className="lg:pl-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-5">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 rounded-full bg-accent/10">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:ramsid4407@gmail.com" 
                        className="font-medium hover:underline"
                      >
                        ramsid4407@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-2 rounded-full bg-accent/10">
                      <PhoneCall className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">75502 92066</span>
                        <button 
                          onClick={() => copyToClipboard('7550292066')}
                          className="text-muted-foreground hover:text-foreground"
                          aria-label="Copy phone number"
                        >
                          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-2 rounded-full bg-accent/10">
                      <Github className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a 
                        href="https://github.com/ramsiddesh"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="font-medium hover:underline"
                      >
                        github.com/ramsiddesh
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-8">
                <div className="bg-card border border-gradient-primary rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="inline-block w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="font-medium">Open to Opportunities</span>
                  </div>
                  <p className="text-muted-foreground">
                    Currently seeking internships and collaborative projects in software development and data analysis. Feel free to reach out for potential opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
