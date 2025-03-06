
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CtaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Email submitted:', email);
      setEmail('');
      setIsSubmitting(false);
      
      toast({
        title: "You're in!",
        description: "Welcome to the My Kids Events beta. Check your email for access details.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section id="get-started" className="py-20 bg-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Join our free beta program
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            My Kids Events is currently free while in beta. Be among the first to streamline your school communications.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="rounded-full bg-red-500 hover:bg-red-600 text-white px-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Get Started Now"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            Start saving time today. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
