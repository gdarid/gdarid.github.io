import { useEffect } from "react";
import { personalInfo } from "@/data/portfolio-data";
// import { toast as sonnerToast } from "@/components/ui/sonner-utils";
// import { toast } from "@/hooks/use-toast";
// import { ToastAction } from "@/components/ui/toast";

/**
 * Layout 1: Centered Hero
 */
export default function Hero1() {
  useEffect(() => {
    // sonnerToast.success("Success message!");

    // // Simple toast
    // toast({
    //   title: "Welcome!",
    //   description: "This is a toast notification.",
    // });

    // Toast with action
    // toast({
    //   title: "Action required",
    //   description: "Click undo to revert changes.",
    //   action: (
    //     <ToastAction altText="Undo" onClick={() => console.log("Undo clicked")}>
    //       Undo
    //     </ToastAction>
    //   ),
    // });
  }, []);


  return (
    <section className="flex items-center justify-center px-4 sm:px-8 md:p-16 lg:p-24 py-12  bg-background">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-[clamp(1.75rem,3vw+1rem,3.5rem)] mb-8 text-display leading-tight overflow-hidden">
          {personalInfo.name}
        </h1>

        <div className="flex justify-center mb-12">
          <div className="h-1 w-48 md:w-64 bg-[var(--color-brand)]"></div>
        </div>

        <div className="flex justify-center">
          <img
            id="hero-photo"
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
