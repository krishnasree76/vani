import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import tcsLogo from '@/assets/tcs.png';
import cognizantLogo from '@/assets/cognizant.png';
import capgeminiLogo from '@/assets/capgemini.png';

const partners = [
  {
    name: 'TCS',
    logo: tcsLogo,
  },
  {
    name: 'Cognizant',
    logo: cognizantLogo,
  },
  {
    name: 'Capgemini',
    logo: capgeminiLogo,
  },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="partners"
      className="py-20 lg:py-28 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Industry Partners
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Industry Exposure & Partnerships
          </h2>

          <div className="section-divider mb-6" />

          <p className="text-muted-foreground text-lg">
            We collaborate with leading technology companies to provide our students
            with real-world exposure and industry-relevant training.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
>
  {partners.map((partner, index) => (
    <motion.div
      key={partner.name}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <div className="bg-card border border-border rounded-xl p-8 h-28 flex items-center justify-center hover:shadow-lg hover:border-primary/20 transition-all duration-300">
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="max-h-12 w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </motion.div>
  ))}
</motion.div>


        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Trusted by{' '}
            <span className="text-primary font-semibold">
              leading enterprises
            </span>{' '}
            worldwide
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PartnersSection;
