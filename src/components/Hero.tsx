
import React from 'react';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center">
              <span className="text-4xl font-bold text-slate-700">SC</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Senior Product
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Designer
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          I craft meaningful digital experiences that solve complex problems and delight users. 
          Currently building the future of design systems at innovative startups.
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="mailto:sarah@example.com" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
            <Mail size={24} />
          </a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
            <Github size={24} />
          </a>
        </div>

        <a
          href="#cases"
          className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <span>Explore my work</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
