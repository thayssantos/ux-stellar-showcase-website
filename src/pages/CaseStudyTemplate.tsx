
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudyTemplate = () => {
  const { id } = useParams();

  // Case study data based on ID
  const caseStudyData = {
    "ecommerce-redesign": {
      title: "E-commerce Platform Redesign",
      company: "TechStart Inc.",
      year: "2023",
      duration: "6 months",
      team: "Cross-functional team of 12",
      role: "Senior Product Designer & Design Lead",
      overview: "Led the complete redesign of a B2C e-commerce platform, driving strategic design decisions that resulted in $2.3M additional annual revenue and improved user experience across 500K+ monthly active users.",
      challenge: "The legacy platform suffered from a 73% cart abandonment rate, poor mobile experience (mobile traffic: 68%), and declining user satisfaction scores (NPS: 12). Customer acquisition costs were rising while conversion rates stagnated at 1.8%.",
      solution: "Implemented a data-driven design approach combining user research, A/B testing, and behavioral analytics to redesign the complete user journey from discovery to purchase completion.",
      businessImpact: [
        "Revenue increased by $2.3M annually (28% growth)",
        "Customer acquisition cost reduced by 35%",
        "Mobile conversion rate improved from 0.9% to 3.2%",
        "Customer lifetime value increased by 42%"
      ],
      userTestingResults: [
        "Task completion rate improved from 54% to 89%",
        "Time to checkout reduced by 45% (from 8.2 to 4.5 minutes)",
        "User satisfaction score increased from 6.2 to 8.7/10",
        "95% of users found the new navigation 'intuitive' vs 23% previously"
      ],
      abTestResults: [
        "New checkout flow: 34% higher conversion (99% confidence)",
        "Product page redesign: 28% increase in add-to-cart rate",
        "Search functionality: 52% improvement in search-to-purchase rate",
        "Mobile navigation: 67% reduction in bounce rate"
      ],
      process: [
        {
          phase: "Strategic Research & Analysis",
          description: "Conducted comprehensive user research with 45 participants, analyzed 6 months of user behavior data, and performed competitive analysis of 12 industry leaders. Identified key user personas and pain points through journey mapping.",
          duration: "3 weeks",
          deliverables: ["User research report", "Competitive analysis", "Journey maps", "Persona documentation"]
        },
        {
          phase: "Information Architecture & Strategy",
          description: "Redesigned site architecture based on user mental models from card sorting sessions with 120 participants. Created new taxonomy and navigation structure validated through tree testing.",
          duration: "2 weeks",
          deliverables: ["Site map", "Navigation structure", "Content strategy", "IA validation report"]
        },
        {
          phase: "Design System & Prototyping",
          description: "Built comprehensive design system with 150+ components, created high-fidelity prototypes for 8 key user flows, and established design tokens for consistent implementation across platform.",
          duration: "6 weeks",
          deliverables: ["Design system", "Component library", "Interactive prototypes", "Design specifications"]
        },
        {
          phase: "User Testing & Validation",
          description: "Conducted moderated usability testing with 32 users across 4 iterations, A/B tested 12 different design variations, and validated designs through unmoderated testing with 200+ participants.",
          duration: "4 weeks",
          deliverables: ["Usability test reports", "A/B test results", "Design iterations", "Validation summary"]
        },
        {
          phase: "Implementation & Optimization",
          description: "Collaborated with engineering team on implementation, conducted design QA across 15 devices/browsers, and monitored post-launch metrics for continuous optimization.",
          duration: "7 weeks",
          deliverables: ["Implementation guidelines", "QA documentation", "Launch metrics", "Optimization roadmap"]
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ]
    },
    "mobile-banking-app": {
      title: "Mobile Banking App Redesign",
      company: "FinTech Solutions",
      year: "2023",
      duration: "8 months",
      team: "Cross-functional team of 18",
      role: "Senior Product Designer & UX Strategy Lead",
      overview: "Redesigned a mobile banking application serving 1.2M users, focusing on accessibility, security, and user trust while improving core banking task completion rates and reducing customer support burden.",
      challenge: "The existing app had poor accessibility compliance (WCAG 2.0: 34%), high customer support call volume (15K monthly calls), and low user engagement with digital services. Trust scores were declining due to usability issues affecting financial task completion.",
      solution: "Implemented a human-centered design approach with extensive accessibility testing, security-first UX patterns, and streamlined task flows validated through comprehensive user testing and gradual rollout strategy.",
      businessImpact: [
        "Customer support calls reduced by 58% (saving $1.8M annually)",
        "Digital service adoption increased by 73%",
        "App store rating improved from 2.1 to 4.6 stars",
        "Customer retention rate increased by 24%"
      ],
      userTestingResults: [
        "Task success rate improved from 67% to 94%",
        "Time to complete transfers reduced by 52%",
        "Accessibility compliance achieved 98% WCAG 2.1 AA",
        "User confidence in security increased from 5.8 to 9.1/10"
      ],
      abTestResults: [
        "New onboarding flow: 45% higher completion rate",
        "Biometric authentication: 67% adoption vs 12% PIN usage",
        "Quick actions dashboard: 89% increase in feature usage",
        "Simplified transaction history: 156% increase in engagement"
      ],
      process: [
        {
          phase: "User Research & Accessibility Audit",
          description: "Conducted interviews with 60 users including accessibility focus groups, performed comprehensive WCAG audit, and analyzed support call transcripts to identify core pain points.",
          duration: "4 weeks",
          deliverables: ["Research synthesis", "Accessibility audit", "Pain point analysis", "User journey maps"]
        },
        {
          phase: "Security UX Strategy",
          description: "Collaborated with security team to design trust-building UX patterns, created security-first interaction models, and established guidelines for financial data presentation.",
          duration: "3 weeks",
          deliverables: ["Security UX guidelines", "Trust pattern library", "Compliance documentation", "Risk assessment"]
        },
        {
          phase: "Inclusive Design & Prototyping",
          description: "Designed accessible interfaces tested with assistive technology users, created high-contrast and large-text variants, and built prototypes optimized for various motor and cognitive abilities.",
          duration: "8 weeks",
          deliverables: ["Accessible design system", "Inclusive prototypes", "Assistive tech testing", "Variant specifications"]
        },
        {
          phase: "Security & Usability Testing",
          description: "Conducted security-focused usability testing, validated trust indicators through A/B testing, and performed accessibility testing with 25 users with disabilities.",
          duration: "5 weeks",
          deliverables: ["Security usability report", "Trust validation results", "Accessibility test results", "Iteration documentation"]
        },
        {
          phase: "Phased Rollout & Optimization",
          description: "Implemented gradual rollout to 100K users, monitored security and usability metrics, and optimized based on real-world usage patterns and feedback.",
          duration: "6 weeks",
          deliverables: ["Rollout strategy", "Performance metrics", "User feedback analysis", "Optimization recommendations"]
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ]
    },
    "saas-dashboard": {
      title: "Enterprise SaaS Analytics Dashboard",
      company: "DataFlow Corp",
      year: "2022",
      duration: "10 months",
      team: "Product team of 22",
      role: "Senior Product Designer & Design Strategy Lead",
      overview: "Redesigned a complex B2B analytics dashboard serving 50K+ enterprise users, transforming data visualization and workflow efficiency while reducing user onboarding time and increasing feature adoption across large organizations.",
      challenge: "The existing dashboard had poor information hierarchy, overwhelming data density, and steep learning curve resulting in 40% user churn within first month. Enterprise clients reported 6-week average onboarding time and low utilization of advanced features.",
      solution: "Developed a progressive disclosure design system with customizable dashboards, implemented advanced data visualization patterns, and created role-based user experiences validated through extensive enterprise user testing.",
      businessImpact: [
        "Enterprise contract renewals increased by 34%",
        "Average deal size grew by $47K due to higher feature adoption",
        "Customer onboarding costs reduced by 52%",
        "Expansion revenue increased by 89% year-over-year"
      ],
      userTestingResults: [
        "Time to first value reduced from 6 weeks to 8 days",
        "Complex task completion rate improved from 34% to 87%",
        "User error rate decreased by 73%",
        "Daily active usage increased by 156% among power users"
      ],
      abTestResults: [
        "Progressive onboarding: 67% higher feature adoption",
        "Customizable widgets: 234% increase in dashboard personalization",
        "Smart data recommendations: 78% higher engagement",
        "Collaborative features: 45% increase in team workspace usage"
      ],
      process: [
        {
          phase: "Enterprise User Research",
          description: "Conducted on-site interviews with 40 enterprise users across 12 companies, observed workflow patterns, and analyzed usage data from 50K+ users to understand complex data analysis needs.",
          duration: "5 weeks",
          deliverables: ["Enterprise user personas", "Workflow analysis", "Data usage patterns", "Requirements documentation"]
        },
        {
          phase: "Information Architecture & Data Strategy",
          description: "Redesigned information hierarchy for complex datasets, created data visualization strategy, and established progressive disclosure patterns for different user skill levels.",
          duration: "4 weeks",
          deliverables: ["IA strategy", "Data visualization guidelines", "Progressive disclosure system", "Navigation structure"]
        },
        {
          phase: "Advanced Prototyping & Data Viz",
          description: "Built interactive prototypes with real data sets, created 40+ custom chart types, and designed responsive layouts for various screen sizes and use cases.",
          duration: "12 weeks",
          deliverables: ["Interactive prototypes", "Chart component library", "Responsive specifications", "Data interaction patterns"]
        },
        {
          phase: "Enterprise Testing & Validation",
          description: "Conducted moderated testing sessions with 28 enterprise users, performed A/B testing on 15 key workflows, and validated designs through beta program with 8 major clients.",
          duration: "6 weeks",
          deliverables: ["Enterprise testing report", "A/B test analysis", "Beta program insights", "Validation summary"]
        },
        {
          phase: "Implementation & Scale",
          description: "Supported engineering implementation across 3 development teams, created comprehensive design system documentation, and monitored metrics across gradual enterprise rollout.",
          duration: "8 weeks",
          deliverables: ["Implementation documentation", "Design system", "Rollout metrics", "Success measurement framework"]
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ]
    }
  };

  const caseStudy = caseStudyData[id as keyof typeof caseStudyData] || caseStudyData["ecommerce-redesign"];

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
            
            {/* Business Impact */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Business Impact</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.businessImpact.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    <span className="text-slate-800 font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Testing Results */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">User Testing Results</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.userTestingResults.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                    <Users className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-slate-800 font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* A/B Test Results */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">A/B Test Results</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.abTestResults.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-purple-50 p-4 rounded-lg">
                    <Target className="text-purple-600 flex-shrink-0" size={20} />
                    <span className="text-slate-800 font-medium">{result}</span>
                  </div>
                ))}
              </div>
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
