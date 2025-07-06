
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudyTemplate = () => {
  const { id } = useParams();

  // Mock data - in real app, you'd fetch based on the ID
  const caseStudy = {
    title: "E-commerce Redesign",
    company: "TechStart Inc.",
    year: "2023",
    duration: "6 months",
    team: "4 designers, 6 developers",
    role: "Lead Product Designer",
    overview: "Redesigned the entire e-commerce platform, resulting in 40% increase in conversion rates and improved user satisfaction.",
    challenge: "The existing platform had poor user experience, high bounce rates, and low conversion rates. Users found it difficult to navigate and complete purchases.",
    solution: "We conducted extensive user research, redesigned the information architecture, and implemented a new design system to create a more intuitive shopping experience.",
    results: [
      "40% increase in conversion rates",
      "60% reduction in cart abandonment",
      "35% increase in user satisfaction scores",
      "25% decrease in customer support tickets"
    ],
    process: [
      {
        phase: "Research & Discovery",
        description: "Conducted user interviews, analyzed analytics, and performed competitive analysis to understand pain points.",
        duration: "2 weeks"
      },
      {
        phase: "Information Architecture",
        description: "Restructured the site navigation and content hierarchy based on user mental models.",
        duration: "1 week"
      },
      {
        phase: "Design & Prototyping",
        description: "Created wireframes, high-fidelity designs, and interactive prototypes for testing.",
        duration: "8 weeks"
      },
      {
        phase: "Testing & Iteration",
        description: "Conducted usability testing and iterated on designs based on user feedback.",
        duration: "3 weeks"
      },
      {
        phase: "Implementation Support",
        description: "Worked closely with developers during implementation and conducted design QA.",
        duration: "8 weeks"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link 
            to="/#cases" 
            className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {caseStudy.year}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-600">{caseStudy.company}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {caseStudy.overview}
            </p>

            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="text-blue-600" size={20} />
                <div>
                  <div className="text-sm text-slate-500">Duration</div>
                  <div className="font-medium text-slate-800">{caseStudy.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-blue-600" size={20} />
                <div>
                  <div className="text-sm text-slate-500">Team</div>
                  <div className="font-medium text-slate-800">{caseStudy.team}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="text-blue-600" size={20} />
                <div>
                  <div className="text-sm text-slate-500">Role</div>
                  <div className="font-medium text-slate-800">{caseStudy.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-12">
            <img 
              src={caseStudy.images[0]} 
              alt={caseStudy.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Challenge Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">The Challenge</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </section>

          {/* Process Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Design Process</h2>
            <div className="space-y-6">
              {caseStudy.process.map((phase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-slate-800">{phase.phase}</h3>
                        <span className="text-sm text-slate-500">{phase.duration}</span>
                      </div>
                      <p className="text-slate-600">{phase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">The Solution</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {caseStudy.solution}
            </p>
            
            {/* Additional Images */}
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.images.slice(1).map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${caseStudy.title} - Image ${index + 2}`}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              ))}
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-slate-800 font-medium">{result}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-12 text-center">
            <div className="bg-slate-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Interested in working together?
              </h3>
              <p className="text-slate-600 mb-6">
                Let's discuss how I can help bring your product vision to life.
              </p>
              <a 
                href="mailto:sarah@example.com"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Get in touch</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyTemplate;
