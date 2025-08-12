import { Button } from "@/components/shadcn/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shadcn/ui/card";

const WorkWithUs = () => {
  return (
    <section id="work-with-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our team and help us create an amazing hackathon experience for students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="text-xl">Volunteer</CardTitle>
              <CardDescription>
                Help us run the event smoothly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Support participants, manage logistics, and ensure everyone has a great experience.
              </p>
              <Button variant="outline" className="w-full">
                Join as Volunteer
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <CardTitle className="text-xl">Mentor</CardTitle>
              <CardDescription>
                Share your expertise with participants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Guide teams, answer technical questions, and help participants build amazing projects.
              </p>
              <Button variant="outline" className="w-full">
                Become a Mentor
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <CardTitle className="text-xl">Sponsor</CardTitle>
              <CardDescription>
                Support the hackathon financially
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Provide resources, prizes, and opportunities for participants to showcase their skills.
              </p>
              <Button variant="outline" className="w-full">
                Sponsor Us
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="border-0 shadow-lg bg-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Get Involved?</CardTitle>
              <CardDescription>
                We'd love to hear from you and discuss how you can contribute to our hackathon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Us
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
