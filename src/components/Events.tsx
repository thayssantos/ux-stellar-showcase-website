
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "UX Design Workshop Series",
      description: "Monthly workshops covering design thinking, prototyping, and user research methodologies.",
      date: "Monthly",
      location: "San Francisco, CA",
      attendees: "50+",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      type: "Workshop"
    },
    {
      title: "Women in Design Meetup",
      description: "Supporting and connecting female designers in the Bay Area tech community.",
      date: "Bi-monthly",
      location: "Various Venues",
      attendees: "100+",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      type: "Meetup"
    },
    {
      title: "Design Systems Conference",
      description: "Annual conference bringing together design system practitioners and enthusiasts.",
      date: "Annual",
      location: "Virtual & In-person",
      attendees: "300+",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
      type: "Conference"
    }
  ];

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Community Events
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building and nurturing the UX design community through meaningful events and connections
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Calendar size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <MapPin size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Users size={16} />
                    <span className="text-sm">{event.attendees} attendees</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
