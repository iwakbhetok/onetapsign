import React, { useEffect, useState } from "react";
import { Container } from "./ui/Container";
import GradientText from "./ui/GradientText";
import { Button } from "@/components/ui/Button";
import FadeIn from "./ui/FadeIn";
import { FileText, Check, MousePointer } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4361ee15,transparent)]" 
        aria-hidden="true"
      />
      
      {/* Follow pointer gradient */}
      <div
        className="absolute opacity-70 bg-primary-500/20 blur-[100px] rounded-full w-[40rem] h-[40rem]"
        style={{
          left: `${mousePosition.x / 20}px`,
          top: `${mousePosition.y / 20}px`,
          transition: "left 0.5s ease-out, top 0.5s ease-out",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeIn delay={100} duration={800}>
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary-50 text-primary-700 border border-primary-100">
              <span className="mr-2">✨</span>
              <span>Smarter Way to Sign Documents</span>
            </div>
          </FadeIn>

          <FadeIn delay={300} duration={800}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The <GradientText>E-Signature</GradientText>  Made Simple for Teams & Businesses
            </h1>
          </FadeIn>

          <FadeIn delay={500} duration={800}>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Send, sign, and manage your documents effortlessly with a professional e-signature platform designed to streamline your workflow and grow with your business.
            </p>
          </FadeIn>

          <FadeIn delay={700} duration={800}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 transition-all text-base">
                Get Started for Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 hover:bg-gray-50 transition-all text-base"
              >
                Learn More
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={900} duration={800}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left max-w-3xl mx-auto">
              {/* <div className="flex items-start space-x-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Secure Signing </span> 
                  with encrypted document handling
                </p>
              </div> */}
              <div className="flex items-start space-x-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Get documents signed faster </span> 
                  With OneTapSign, contracts are signed up to 80% faster than traditional paper-based contracts.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Personalize signature requests </span>
                  Easily add your company logo, tagline, and custom messaging to stay on-brand.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary-50 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Improve completion rates </span>
                  Built-in reminders and advanced signer options significantly improve document completion rates.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={1100} duration={1000} className="mt-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary-300 via-primary-200 to-blue-300 opacity-20 blur-lg"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="bg-gray-800 h-8 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white p-4">
                <div className="bg-gray-50 rounded-lg border border-gray-100 p-6 h-[300px] flex items-center justify-center">
                  <div className="max-w-md mx-auto flex flex-col items-center">
                    <FileText className="w-16 h-16 text-primary-600 mb-4" />
                    <div className="w-full h-6 bg-gray-200 rounded-md mb-3"></div>
                    <div className="w-3/4 h-6 bg-gray-200 rounded-md mb-6"></div>
                    <div className="w-full flex justify-between">
                      <div className="w-1/3 px-2">
                        <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                        <div className="w-4/5 h-4 bg-gray-200 rounded-md"></div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                        <div className="w-4/5 h-4 bg-gray-200 rounded-md"></div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                        <div className="w-4/5 h-4 bg-gray-200 rounded-md"></div>
                      </div>
                    </div>
                    <div className="absolute animate-float">
                      <div className="relative w-24 h-24 mt-16 ml-32">
                        <MousePointer className="w-6 h-6 text-gray-700 absolute z-10" />
                        <div className="absolute w-12 h-12 bg-primary-600/10 rounded-full -top-3 -left-3 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;