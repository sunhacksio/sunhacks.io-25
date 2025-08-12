import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import c from "config";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About {c.hackathonName}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A hackathon where innovation meets collaboration. Join hundreds of developers, designers, and creators for an unforgettable weekend of building amazing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <CardTitle className="text-xl">Build Amazing Projects</CardTitle>
              <CardDescription>
                Turn your ideas into reality with cutting-edge technologies and tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Work with the latest frameworks, APIs, and development tools. From web apps to mobile games, the possibilities are endless.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <CardTitle className="text-xl">Network & Collaborate</CardTitle>
              <CardDescription>
                Connect with fellow developers, mentors, and industry professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Meet like-minded individuals, form teams, and build lasting connections in the tech community.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <CardTitle className="text-xl">Learn & Grow</CardTitle>
              <CardDescription>
                Attend workshops, listen to talks, and enhance your skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Participate in technical workshops, listen to industry experts, and gain valuable insights into the latest trends.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <CardTitle className="text-xl">Win Prizes</CardTitle>
              <CardDescription>
                Compete for amazing prizes and recognition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Show off your skills and compete for cash prizes, tech gadgets, and internship opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <CardTitle className="text-xl">Free Food & Swag</CardTitle>
              <CardDescription>
                Enjoy delicious meals and awesome hackathon swag
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stay fueled with free meals, snacks, and energy drinks. Plus, take home some amazing hackathon merchandise.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <CardTitle className="text-xl">Innovation Hub</CardTitle>
              <CardDescription>
                Be part of the next big thing in technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join a community of innovators and be part of creating solutions that could change the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;