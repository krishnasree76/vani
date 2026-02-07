import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, MapPin, Clock, Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const services = [
  'Data Science',
  'Data Analytics',
  'Data Engineering',
  'Cybersecurity',
  'Azure Cloud',
  'AWS',
  'SAP',
  'ServiceNow',
  'Profile Building',
  'CV Review',
  'IT Projects',
];

const contactSchema = z.object({
  fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email too long'),
  phone: z.string().trim().min(10, 'Please enter a valid phone number').max(20, 'Phone number too long'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().trim().max(1000, 'Message too long').optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const message = `Hello Vani Technologies Limited,

I'm interested in your *${formData.service}* service.

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
${formData.message ? `*Message:* ${formData.message}` : ''}

Looking forward to hearing from you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/447384055753?text=${encodedMessage}`;

    toast({
      title: 'Redirecting to WhatsApp',
      description: 'Opening WhatsApp to send your inquiry...',
    });

    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: '9 Alouise House, 56 Terry Road, Coventry, UK – CV1 2BA',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 7384 055753',
      color: 'text-green-500',
      bg: 'bg-green-500/10'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'vanitechnologieslimited@gmail.com',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon–Fri: 9 AM – 5 PM | Sat–Sun: 10 AM – 4 PM',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10'
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50/50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            Connect With Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6">
            Let's Build Your <span className="text-primary">Future</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to transform your career or business? Get in touch with us today 
            and let's discuss how we can help you succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6 ml-1">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{item.label}</h4>
                      <p className="text-foreground font-semibold leading-tight">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Map Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative rounded-3xl overflow-hidden border border-border h-64 shadow-lg group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.882195027581!2d-1.4938634!3d52.4005881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b779a555555%3A0x123456789abcdef!2sTerry%20Rd%2C%20Coventry%20CV1%202BA!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Vani Technologies Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 right-4">
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-lg flex items-center gap-2 text-xs font-bold">
                  <ExternalLink className="w-3 h-3" />
                  VIEW ON GOOGLE MAPS
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Glassmorphic Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-primary/30 via-border to-secondary/30 shadow-2xl">
              <div className="bg-white dark:bg-slate-950 rounded-[calc(2rem-1px)] p-8 md:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  Send a Message
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-bold text-foreground ml-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:ring-4 focus:ring-primary/10 transition-all outline-none ${
                        errors.fullName ? 'border-destructive' : 'border-border focus:border-primary'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-destructive text-xs mt-1 font-medium">{errors.fullName}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-foreground ml-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-5 py-4 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:ring-4 focus:ring-primary/10 transition-all outline-none ${
                          errors.email ? 'border-destructive' : 'border-border focus:border-primary'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1 font-medium">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-foreground ml-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-5 py-4 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:ring-4 focus:ring-primary/10 transition-all outline-none ${
                          errors.phone ? 'border-destructive' : 'border-border focus:border-primary'
                        }`}
                        placeholder="+44 7XXX XXXXXX"
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-foreground ml-1">Select Course/Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none ${
                        errors.service ? 'border-destructive' : 'border-border focus:border-primary'
                      }`}
                    >
                      <option value="">Choose a Course/service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-destructive text-xs mt-1 font-medium">{errors.service}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-foreground ml-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl border border-border bg-slate-50 dark:bg-slate-900 focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none focus:border-primary"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-primary/20 transition-all disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Redirecting...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send via WhatsApp
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;