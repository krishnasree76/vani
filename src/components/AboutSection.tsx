import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Target, Users, Lightbulb } from 'lucide-react';
import aboutImage from '@/assets/about-team.jpg';

const features = [
  {
    icon: Target,
    title: 'Expert IT Consultancy',
    description: 'Strategic technology solutions tailored to your business needs',
  },
  {
    icon: Lightbulb,
    title: 'Data Analytics Excellence',
    description: 'Transform raw data into actionable business insights',
  },
  {
    icon: Users,
    title: 'Career-Focused Training',
    description: 'Job-oriented programs designed for real-world success',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-vani-blue-100/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Vani Technologies Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vani-blue-900/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">Trusted Partner</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Delivering excellence in IT solutions since 2014
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              About Vani Technologies Limited
            </h2>
            <div className="section-divider mb-8 mx-0" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Vani Technologies Limited is a UK-based IT consultancy company specializing in 
              cutting-edge technology solutions, data analytics, and career-focused skill development. 
              We bridge the gap between talent and industry requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to empower individuals and businesses through comprehensive IT consultancy, 
              practical training programs, and job-oriented skill development. We prepare professionals 
              for success in the rapidly evolving technology landscape.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
