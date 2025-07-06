
import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Let's work together</h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you need design consultation or want to collaborate on something meaningful, let's chat.
            </p>
            <a
              href="mailto:sarah@example.com"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Mail size={20} />
              <span>Get in touch</span>
            </a>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Connect with me</h4>
            <div className="flex space-x-6 mb-6">
              <a
                href="mailto:sarah@example.com"
                className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
            </div>
            
            <div className="text-slate-400">
              <p className="mb-2">San Francisco, CA</p>
              <p>Available for freelance projects</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="flex items-center justify-center space-x-2 text-slate-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Sarah Chen © 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
