import React from "react";
import { Container } from "./ui/Container";
import FadeIn from "./ui/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Switching to this platform has completely transformed our document signing process. The interface is intuitive and our clients love how easy it is to use.",
    author: "Sarah Johnson",
    role: "CEO at TechNova",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    content: "As a legal firm, document security is our top priority. This platform provides the perfect balance of security and usability that we've been looking for.",
    author: "Michael Rodriguez",
    role: "Partner at LegalEdge",
    avatar: "https://i.pravatar.cc/150?img=53"
  },
  {
    content: "The ability to self-host the solution on our own infrastructure was the key selling point for us. Great product with excellent performance.",
    author: "Emily Chen",
    role: "CTO at SecureData",
    avatar: "https://i.pravatar.cc/150?img=45"
  },
  {
    content: "We've reduced our document turnaround time by 70% since implementing this solution. The automated workflows are a game-changer for our business.",
    author: "David Müller",
    role: "Operations Director at FastTrack",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    content: "As a startup founder, finding cost-effective solutions is crucial. This platform offers enterprise-level features at a price point that works for growing businesses.",
    author: "Aisha Patel",
    role: "Founder at GrowthLab",
    avatar: "https://i.pravatar.cc/150?img=23"
  },
  {
    content: "The customer support team has been exceptional. Any questions we had during implementation were answered promptly and thoroughly.",
    author: "Thomas Wilson",
    role: "IT Director at EnterpriseNow",
    avatar: "https://i.pravatar.cc/150?img=67"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary-50 text-primary-700 border border-primary-100">
              <span>Testimonials</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Businesses Worldwide
            </h2>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-lg text-gray-600">
              See what our customers have to say about their experience with our document signing platform.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn 
              key={index} 
              delay={200 + index * 100} 
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <Quote className="w-10 h-10 text-primary-100 mb-4" />
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;