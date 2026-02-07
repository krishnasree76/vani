import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  BarChart3,
  Database,
  Shield,
  Cloud,
  Server,
  Layers,
  Settings,
  UserCheck,
  FileText,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Data Science',
    description: 'Machine learning, AI models, and predictive analytics solutions for data-driven decisions.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into meaningful insights with advanced analytics and visualization.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure for scalable data processing.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions and best practices.',
  },
  {
    icon: Cloud,
    title: 'Azure Cloud',
    description: 'Microsoft Azure cloud solutions for enterprise-grade applications and services.',
  },
  {
    icon: Server,
    title: 'AWS',
    description: 'Amazon Web Services expertise for cloud infrastructure and deployment.',
  },
  {
    icon: Layers,
    title: 'SAP',
    description: 'SAP implementation and consulting for enterprise resource planning.',
  },
  {
    icon: Settings,
    title: 'ServiceNow',
    description: 'ServiceNow platform solutions for IT service management and automation.',
  },
  {
    icon: UserCheck,
    title: 'Profile Building',
    description: 'Professional profile optimization for career advancement and visibility.',
  },
  {
    icon: FileText,
    title: 'CV Review',
    description: 'Expert resume review and optimization to stand out in the job market.',
  },
  {
    icon: Briefcase,
    title: 'IT Projects',
    description: 'End-to-end IT project delivery for businesses of all sizes.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Comprehensive IT Solutions
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground text-lg">
            From cutting-edge technology training to enterprise IT solutions, 
            we provide everything you need to succeed in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-card via-card to-muted/50 border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon container with animated background */}
                  <div className="relative w-14 h-14 mb-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-5">
                    {service.description}
                  </p>
                  
                  <motion.button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors self-start group/btn"
                    whileHover={{ x: 4 }}
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
