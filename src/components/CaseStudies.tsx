
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "E-commerce Redesign",
      company: "TechStart Inc.",
      description: "Redesigned the entire e-commerce platform, resulting in 40% increase in conversion rates and improved user satisfaction.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["UX Research", "Prototyping", "Design Systems"],
      year: "2023"
    },
    {
      title: "Mobile Banking App",
      company: "FinTech Solutions",
      description: "Led the design of a mobile banking application focusing on accessibility and user trust.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Mobile Design", "User Testing", "Accessibility"],
      year: "2023"
    },
    {
      title: "SaaS Dashboard",
      company: "DataFlow Corp",
      description: "Created an intuitive dashboard for complex data visualization, reducing user learning curve by 60%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Data Visualization", "B2B Design", "Information Architecture"],
      year: "2022"
    }
  ];

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Deep dives into my design process and the impact of thoughtful user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_study, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={case_study.image}
                  alt={case_study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                  {case_study.year}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-800">{case_study.title}</h3>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <p className="text-sm text-blue-600 font-medium mb-3">{case_study.company}</p>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {case_study.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {case_study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group/btn">
                  <span>View Case Study</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
