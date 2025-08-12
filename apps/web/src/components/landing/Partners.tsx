import { Card, CardContent } from "@/components/shadcn/ui/card";
import partners from "./partners.json";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're grateful to work with amazing organizations that make this hackathon possible.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.partners.map((partner: any, index: number) => (
            <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg">🏢</span>
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-2">
                  {partner.name}
                </h3>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {partner.tier}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Want to Partner With Us?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of sponsors and help us create an amazing hackathon experience for students.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;