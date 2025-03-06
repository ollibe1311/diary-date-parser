
import { 
  Calendar, 
  BellRing, 
  Share2, 
  Smartphone, 
  RefreshCw, 
  Zap
} from 'lucide-react';

const features = [
  {
    icon: <Calendar className="w-6 h-6 text-eucalyptus-600" />,
    title: "Automatic Calendar Creation",
    description: "Our AI extracts dates, times, and event details from school emails and creates calendar events automatically."
  },
  {
    icon: <BellRing className="w-6 h-6 text-eucalyptus-600" />,
    title: "Smart Reminders",
    description: "Set custom reminders for events so you never forget an important school date again."
  },
  {
    icon: <Share2 className="w-6 h-6 text-eucalyptus-600" />,
    title: "Family Sharing",
    description: "Share events with your partner, grandparents or caregivers to keep everyone in the loop."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-eucalyptus-600" />,
    title: "Sync Across Devices",
    description: "Access your events on any device - seamlessly syncs with Google Calendar, Apple Calendar and more."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-eucalyptus-600" />,
    title: "Automatic Updates",
    description: "If school sends an update, we'll automatically update your calendar with the new information."
  },
  {
    icon: <Zap className="w-6 h-6 text-eucalyptus-600" />,
    title: "Fast & Easy Setup",
    description: "Get started in minutes. Just connect your email account and we'll do the rest."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-eucalyptus-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Designed for busy parents
          </h2>
          <p className="text-lg text-muted-foreground">
            Our features make it effortless to keep track of all your children's school events, activities, and important dates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-eucalyptus-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-eucalyptus-100 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
