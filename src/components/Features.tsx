import React from "react";
import { Container } from "./ui/Container";
import GradientText from "./ui/GradientText";
import FadeIn from "./ui/FadeIn";
import { 
  Lock, 
  FileClock, 
  User, 
  Globe, 
  FileSignature, 
  CreditCard,
  Settings,
  FileCheck,
  Layers
} from "lucide-react";

const features = [
  {
    icon: <Lock />,
    title: "Secure & Encrypted",
    description: "End-to-end encryption for all your documents. Your data is protected with the highest security standards."
  },
  {
    icon: <FileSignature />,
    title: "Digital Signatures",
    description: "Legally binding electronic signatures that are compliant with eSignature regulations."
  },
  {
    icon: <FileClock />,
    title: "Automated Workflows",
    description: "Set up automated signature workflows to streamline your document processes."
  },
  {
    icon: <User />,
    title: "Team Management",
    description: "Invite team members, assign roles, and manage permissions with ease."
  },
  {
    icon: <Settings />,
    title: "Custom Branding",
    description: "Add your company logo, colors, and customize email templates to match your brand."
  },
  {
    icon: <FileCheck />,
    title: "Document Tracking",
    description: "Real-time tracking of document status, views, and signature completion."
  },
  {
    icon: <Globe />,
    title: "Self-Hosted",
    description: "Host on your own infrastructure for complete control over your data."
  },
  {
    icon: <CreditCard />,
    title: "Fair Pricing",
    description: "Transparent pricing plans with no hidden fees or document limits."
  },
  {
    icon: <Layers />,
    title: "API Integration",
    description: "Integrate with your existing systems using our comprehensive API."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary-50 text-primary-700 border border-primary-100">
              <span>Key Features</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need for <GradientText>Document Signing</GradientText>
            </h2>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-lg text-gray-600">
              Our platform provides all the tools you need to create, manage, and sign documents securely and efficiently.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn 
              key={index} 
              delay={200 + index * 100} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-lg inline-block mb-4">
                {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;