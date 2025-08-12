import { Button } from "@/components/shadcn/ui/button";
import Link from "next/link";
import c from "config";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              {c.hackathonName}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
              {c.itteration} • {c.prettyLocation}
            </h2>
          </div>

          {/* Event Details */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="text-3xl mb-2">📅</div>
                <h3 className="font-semibold text-lg mb-2">When</h3>
                <p className="text-muted-foreground">
                  {c.startDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-semibold text-lg mb-2">Where</h3>
                <p className="text-muted-foreground">{c.localUniversityName}</p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="text-3xl mb-2">👥</div>
                <h3 className="font-semibold text-lg mb-2">Capacity</h3>
                <p className="text-muted-foreground">{c.rsvpDefaultLimit} Hackers</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg">
                Register Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg">
                Sponsor Us
              </Button>
            </Link>
            <Link href="#about">
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground font-semibold px-8 py-4 text-lg">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {c.defaultMetaDataDescription || "Join us for an incredible hackathon experience where innovation meets collaboration. Build amazing projects, learn new skills, and connect with fellow developers."}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-pulse delay-500" />
    </section>
  );
};

export default Hero;