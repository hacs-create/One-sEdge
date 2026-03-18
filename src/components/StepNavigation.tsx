'use client';

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

interface Step {
  id: string;
  label: string;
  title: string;
}

interface StepNavigationProps {
  steps: Step[];
}

export function StepNavigation({ steps }: StepNavigationProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      steps.forEach((step, index) => {
        const element = document.getElementById(step.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveStep(index);
            
            // Mark previous steps as completed
            const completed = Array.from({ length: index }, (_, i) => i);
            setCompletedSteps(completed);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps]);

  const scrollToStep = (stepId: string) => {
    const element = document.getElementById(stepId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-slate-200" />
        <motion.div
          className="absolute left-[15px] top-0 w-[2px] bg-slate-900"
          initial={{ height: 0 }}
          animate={{ 
            height: `${(activeStep / (steps.length - 1)) * 100}%` 
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Steps */}
        <div className="space-y-12 relative">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isCompleted = completedSteps.includes(index);

            return (
              <div key={step.id} className="relative flex items-center gap-4">
                {/* Step Circle */}
                <button
                  onClick={() => scrollToStep(step.id)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "border-slate-900 bg-slate-900 scale-110"
                      : isCompleted
                      ? "border-slate-900 bg-slate-900"
                      : "border-slate-300 bg-white hover:border-slate-500"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
                  ) : (
                    <motion.div
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-white" : "bg-slate-300"
                      }`}
                      animate={{ scale: isActive ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>

                {/* Step Label */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-12 whitespace-nowrap"
                >
                  <div 
                    className="bg-slate-900 text-white px-4 py-2 rounded-md shadow-lg"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.875rem' }}
                  >
                    {step.label}
                  </div>
                  {/* Arrow */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-slate-900" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
