
import { useState } from 'react';
import { Calendar, Mail, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    // You could add a toast notification here
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-eucalyptus-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-eucalyptus-100 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="flex-1 max-w-2xl animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-eucalyptus-100 text-eucalyptus-700 rounded-full">
                For busy parents
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Turn school emails into <span className="text-eucalyptus-600 text-glow">calendar events</span> in seconds
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Never miss a school event again. My Kids Events automatically converts school emails into organized calendar invites.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <form onSubmit={handleSubmit} className="flex w-full max-w-md">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-l-full focus:outline-none focus:ring-2 focus:ring-eucalyptus-400 transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="rounded-r-full bg-eucalyptus-600 hover:bg-eucalyptus-700 text-white px-6"
                >
                  Get Started
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-eucalyptus-600 w-5 h-5" />
                <span className="text-sm">Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-eucalyptus-600 w-5 h-5" />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-eucalyptus-600 w-5 h-5" />
                <span className="text-sm">Cancel anytime</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative animate-slide-up">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 -m-4 bg-eucalyptus-300/20 rounded-xl blur-xl animate-image-glow"></div>
              <div className="glass-card rounded-xl overflow-hidden shadow-lg relative">
                <div className="bg-eucalyptus-600 text-white px-6 py-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">School Calendar</span>
                </div>
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    <div className="bg-eucalyptus-50 p-3 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="bg-eucalyptus-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium">15</span>
                        <div>
                          <h3 className="font-medium">Parent-Teacher Conference</h3>
                          <p className="text-sm text-muted-foreground">3:30 PM - 4:30 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-eucalyptus-50 p-3 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="bg-eucalyptus-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium">22</span>
                        <div>
                          <h3 className="font-medium">School Sports Day</h3>
                          <p className="text-sm text-muted-foreground">9:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-eucalyptus-50 p-3 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="bg-eucalyptus-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium">28</span>
                        <div>
                          <h3 className="font-medium">End of Term Assembly</h3>
                          <p className="text-sm text-muted-foreground">10:30 AM - 12:00 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="shine mt-2 h-10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
