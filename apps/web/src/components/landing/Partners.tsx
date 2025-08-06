import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { Button } from "@/components/shadcn/ui/button";

const sponsorTiers = [
  {
    name: "Gold Partners",
    icon: "🏆",
    color: "from-yellow-400 to-yellow-600",
    description: "Premium partnership with maximum visibility",
    benefits: ["Logo on all materials", "Speaking opportunity", "Recruiter access", "Premium booth space"]
  },
  {
    name: "Silver Partners",
    icon: "🥈",
    color: "from-gray-300 to-gray-500",
    description: "Significant presence and engagement opportunities",
    benefits: ["Logo on website", "Booth space", "Resume access", "Workshop opportunity"]
  },
  {
    name: "Bronze Partners",
    icon: "🥉",
    color: "from-orange-400 to-orange-600",
    description: "Supporting role with brand recognition",
    benefits: ["Logo on website", "Small booth", "Resume access", "Networking access"]
  }
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Beach Partners
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Join us in making waves in the tech community! Become a partner and help students 
            build the future while enjoying the beach vibes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {sponsorTiers.map((tier, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-sand-300 hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{tier.icon}</div>
                <CardTitle className={`font-fredoka text-xl bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.name}
                </CardTitle>
                <p className="text-sm text-foreground/70 mt-2">
                  {tier.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <span className="text-tropical-500">✓</span>
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-sand-300">
            <h3 className="font-fredoka font-semibold text-2xl text-primary mb-4">
              Ready to Make Waves?
            </h3>
            <p className="text-foreground/80 mb-6">
              Partner with SunHacks and connect with the brightest student minds in Arizona. 
              Let's build something amazing together under the desert sun!
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-fredoka text-lg px-8 py-4"
            >
              Become a Partner
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-6 text-2xl opacity-60">
            <span className="animate-float">🏄‍♀️</span>
            <span className="animate-float" style={{ animationDelay: '0.7s' }}>🌊</span>
            <span className="animate-float" style={{ animationDelay: '1.4s' }}>🐢</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;