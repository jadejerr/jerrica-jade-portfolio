import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {

  return (
    <section id="contact" className="bg-secondary-dark py-20">
      <ScrollAnimation animation="animate-fade-in-up">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-light-text">
              Get In Touch
            </h2>
            <p className="text-lg text-secondary-text mt-4">
              Have a question or a project in mind? Let's talk.
            </p>
          </div>

          {/* --- Contact Information --- */}
          {/* We use max-w-lg and mx-auto to center the list now that the form is gone */}
          <div className="flex flex-col space-y-6 max-w-lg mx-auto">
            <ContactInfoItem
              icon={<MdEmail size={24} />}
              title="Email"
              text="jadejerrica@gmail.com"
              href="mailto:jadejerrica@gmail.com"
            />
            <ContactInfoItem
              icon={<MdPhone size={24} />}
              title="Phone"
              text="+60 10 254-9322"
              href="tel:+60102549322"
            />
            <ContactInfoItem
              icon={<MdLocationOn size={24} />}
              title="Location"
              text="Wilayah Persekutuan Labuan, Malaysia"
            />
          </div>

        </div>
      </ScrollAnimation>
    </section>
  );
};

// --- Small helper component for contact info items ---
const ContactInfoItem = ({ icon, title, text, href }) => {
  const content = (
    <div className="flex items-start space-x-4">
      <div className="shrink-0 bg-secondary-dark p-3 rounded-full text-accent-blue">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-light-text">{title}</h3>
        <p className="text-secondary-text text-lg">{text}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="group block bg-primary-dark p-6 rounded-xl 
                        transition duration-300 hover:bg-opacity-70">
      {content}
    </a>
  ) : (
    <div className="group block bg-primary-dark p-6 rounded-xl">
      {content}
    </div>
  );
};

export default Contact;