/* import Image from "next/image";
import Link from "next/link";
import { Button } from "../shadcn/ui/button";

export default function Hero() {
	return (
	);
}

 */



import { Button } from "@/components/shadcn/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <div className="mb-8">
          <div className="text-8xl mb-4 animate-float">☀️</div>
          <h1 className="font-fredoka font-bold text-6xl md:text-8xl text-primary mb-4">
            sunhacks
          </h1>
          <h2 className="font-fredoka font-semibold text-3xl md:text-4xl text-primary/80 mb-6">
            2025
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-xl md:text-2xl text-foreground/80 mb-2">
            Hackathon Sponsorship Prospectus
          </p>
          <p className="text-lg md:text-xl text-foreground/70 mb-4">
            September 27th–28th, 2025
          </p>
          <p className="text-lg md:text-xl text-foreground/70 mb-8">
            Arizona State University
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-fredoka text-lg px-8 py-4"
          >
            Register Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white font-fredoka text-lg px-8 py-4"
          >
            Sponsor Us
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="text-primary hover:bg-primary/10 font-fredoka text-lg px-8 py-4"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-4">Where Innovation Meets Summer Vibes</p>
          <div className="animate-bounce">
            <span className="text-2xl">🏖️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;