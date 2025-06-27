import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ishan Dulanjana - Software Engineer & Content Creator',
  description: 'Personal portfolio showcasing software projects, content creations, and professional skills.',
  openGraph: {
    title: 'Ishan Dulanjana Portfolio',
    description: 'Explore my software projects and creative content.',
    images: ['/images/profile.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="fixed top-0 w-full bg-white shadow">
          <nav className="container mx-auto p-4">
            <ul className="flex space-x-4 justify-center">
              <li><a href="#home" className="text-gray-800 hover:text-teal-500">Home</a></li>
              <li><a href="#skills" className="text-gray-800 hover:text-teal-500">Skills</a></li>
              <li><a href="#projects" className="text-gray-800 hover:text-teal-500">Projects</a></li>
              <li><a href="#content" className="text-gray-800 hover:text-teal-500">Content</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-teal-500">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-500"
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
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-500"
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
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-500"
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
              </a>
            </div> 
            <ul className="flex justify-center space-x-4 mb-4">
              <li><a href="#home" className="text-white hover:text-teal-500">Home</a></li>
              <li><a href="#skills" className="text-white hover:text-teal-500">Skills</a></li>
              <li><a href="#projects" className="text-white hover:text-teal-500">Projects</a></li>
              <li><a href="#content" className="text-white hover:text-teal-500">Content</a></li>
              <li><a href="#contact" className="text-white hover:text-teal-500">Contact</a></li>
            </ul>
            <p>© 2025 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}