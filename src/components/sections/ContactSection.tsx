
import React, { useState } from 'react';
import { Mail, PhoneCall, Github, Copy, Check } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    console.log({ name, email, message });
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    // Show success message (would use toast in a real implementation)
    alert('Message sent! Thank you for reaching out.');
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-2.5 text-white rounded-md bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
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
