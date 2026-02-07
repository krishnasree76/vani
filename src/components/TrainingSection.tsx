import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Code2, Users } from 'lucide-react';
import trainingImage from '@/assets/training.jpg';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Job-Oriented Programs',
    description: 'Curriculum designed with industry requirements in mind',
  },
  {
    icon: Code2,
    title: 'Real-World Projects',
    description: 'Hands-on experience with live projects and case studies',
  },
  {
    icon: Briefcase,
    title: 'Career Mentoring',
    description: 'Personalized guidance for career growth and placement',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience',
  },
];

const TrainingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="training" className="py-20 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-vani-blue-100/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Skill Development
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Career-Focused Training Programs
            </h2>
            <div className="section-divider mb-8 mx-0" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our training programs are meticulously designed to bridge the gap between 
              academic knowledge and industry requirements. We focus on practical skills 
              that employers actively seek.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card p-5 rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={trainingImage}
                alt="Training Session"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vani-blue-900/40 to-transparent" />
            </div>
            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block"
            >
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm opacity-90">Placement Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
