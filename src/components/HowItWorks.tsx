
import { Mail, CalendarCheck, BellRing } from 'lucide-react';

const steps = [
  {
    icon: <Mail className="w-8 h-8 text-white" />,
    title: "Connect your email",
    description: "Link your email account where you receive school communications. We support Gmail, Outlook, and more.",
    color: "bg-eucalyptus-600"
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-white" />,
    title: "We process school emails",
    description: "Our smart AI identifies dates, times, locations, and event details from school emails automatically.",
    color: "bg-eucalyptus-700"
  },
  {
    icon: <BellRing className="w-8 h-8 text-white" />,
    title: "Events added to your calendar",
    description: "Events are added to your chosen calendar app with appropriate reminders so you never miss anything important.",
    color: "bg-eucalyptus-800"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to never miss a school event again
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-8 h-8">
                  <div className="w-full h-0.5 bg-eucalyptus-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#get-started" 
            className="inline-block px-8 py-3 font-medium text-white bg-eucalyptus-600 rounded-full hover:bg-eucalyptus-700 transition-colors duration-300 shadow-sm"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
