'use client'; // Required for form handling and Framer Motion
import { motion } from 'framer-motion';
import { useState, FormEvent, FC } from 'react';

const ContactSection: FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Try again later.');
      }
    } catch (error) {
  console.error('Contact form submission error:', error);
  setStatus('An error occurred. Try again later.');
}

  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition-colors"
            >
              Send Message
            </button>
            {status && (
              <p
                className={`text-center mt-4 ${
                  status.includes('success') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status}
              </p>
            )}
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <motion.a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-800 hover:text-teal-500"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.73c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.564 9.564 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.93.68 1.88v2.79c0 .27.16.58.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-800 hover:text-teal-500"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9.01h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.39 4.29 5.5v6.25zM5.34 7.45c-1.15 0-2.08-.93-2.08-2.08s.93-2.08 2.08-2.08 2.08.93 2.08 2.08-.93 2.08-2.08 2.08zm1.78 13h-3.56V9.01h3.56v11.44zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-800 hover:text-teal-500"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.24 4.15c.66.43 1.24.96 1.71 1.58-.63.39-1.31.68-2.03.83.73-.44 1.29-1.14 1.56-1.97-.69.41-1.46.71-2.27.87-.65-.69-1.58-1.12-2.61-1.12-1.98 0-3.58 1.61-3.58 3.59 0 .28.03.55.09.81-2.98-.15-5.62-1.58-7.39-3.75-.31.53-.49 1.15-.49 1.81 0 1.25.63 2.35 1.59 2.99-.59-.02-1.14-.18-1.62-.45v.04c0 1.74 1.24 3.19 2.88 3.52-.3.08-.62.12-.95.12-.23 0-.46-.02-.68-.07.46 1.43 1.79 2.47 3.37 2.5-1.24.98-2.79 1.56-4.48 1.56-.29 0-.58-.02-.86-.06 1.61 1.03 3.52 1.63 5.57 1.63 6.68 0 10.33-5.54 10.33-10.33 0-.16 0-.31-.01-.47.71-.51 1.33-1.15 1.82-1.88-.66.29-1.37.49-2.11.58.76-.46 1.34-1.18 1.62-2.04z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;