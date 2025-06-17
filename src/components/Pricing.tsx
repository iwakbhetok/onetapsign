import React, { useState } from "react";
import { Container } from "./ui/Container";
import GradientText from "./ui/GradientText";
import FadeIn from "./ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

type PricingPeriod = "monthly" | "yearly";

const pricingPlans = [
  {
    name: "Free",
    description: "For individuals and small teams just getting started.",
    monthly: "$0",
    yearly: "$0",
    features: [
      "Up to 5 documents per month",
      "Basic document templates",
      "Email notifications",
      "2 team members",
      "Standard support"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Professional",
    description: "For growing teams that need more capabilities.",
    monthly: "$19",
    yearly: "$190",
    yearlyNote: "Save $38 annually",
    features: [
      "Unlimited documents",
      "Custom document templates",
      "API Access",
      "Custom branding",
      "Up to 10 team members",
      "Priority support"
    ],
    cta: "Start Free Trial",
    highlighted: true
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs.",
    monthly: "$49",
    yearly: "$490",
    yearlyNote: "Save $98 annually",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Advanced security features",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

const Pricing = () => {
  const [period, setPeriod] = useState<PricingPeriod>("monthly");

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary-50 text-primary-700 border border-primary-100">
              <span>Pricing</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, <GradientText>Transparent</GradientText> Pricing
            </h2>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-lg text-gray-600 mb-8">
              Choose the plan that's right for your business. No hidden fees or surprise charges.
            </p>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg mb-8">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  period === "monthly"
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setPeriod("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  period === "yearly"
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setPeriod("yearly")}
              >
                Yearly
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <FadeIn
              key={index}
              delay={300 + index * 150}
              className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border ${
                plan.highlighted
                  ? "border-primary-200 relative"
                  : "border-gray-100"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 text-xs font-semibold bg-primary-600 text-white rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`p-6 ${plan.highlighted ? "pt-8" : ""}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {period === "monthly" ? plan.monthly : plan.yearly}
                  </span>
                  <span className="text-gray-600">
                    {period === "monthly" ? "/month" : "/year"}
                  </span>
                  {plan.yearlyNote && period === "yearly" && (
                    <p className="text-xs text-green-600 mt-2">
                      {plan.yearlyNote}
                    </p>
                  )}
                </div>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary-600 hover:bg-primary-700"
                      : "bg-gray-800 hover:bg-gray-900"
                  } transition-colors mb-6`}
                >
                  {plan.cta}
                </Button>

                <div className="border-t border-gray-100 pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={800}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              Have questions about our pricing or need a custom plan?
            </p>
            <Button variant="outline" className="border-gray-300">
              Contact Sales
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Pricing;