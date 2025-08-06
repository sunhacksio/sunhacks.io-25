// export default function WorkWithUs() {
// 	return (
// 		<section className="flex min-h-screen w-full flex-col items-center justify-center border-y-2 border-muted-foreground">
// 			<h1 className="text-center text-4xl font-black md:text-5xl">
// 				Work With Us Section
// 			</h1>
// 			<h3 className="px-4 text-center text-lg font-bold md:text-2xl lg:px-0">
// 				Incentivize companies to monetarily support and other students
// 				to volunteer to help out!{" "}
// 			</h3>
// 		</section>
// 	);
// }


import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { Button } from "@/components/shadcn/ui/button";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";

const scheduleEvents = [
  {
    time: "Friday 6:00 PM",
    event: "Opening Ceremony",
    description: "Welcome to the beach! Registration and team formation",
    icon: "🎉"
  },
  {
    time: "Friday 8:00 PM",
    event: "Hacking Starts",
    description: "Let the waves of innovation begin!",
    icon: "🏄‍♂️"
  },
  {
    time: "Saturday 10:00 AM",
    event: "Beach Workshops",
    description: "Learn new skills with our tech workshops",
    icon: "🏖️"
  },
  {
    time: "Saturday 12:00 PM",
    event: "Lunch by the Shore",
    description: "Refuel with delicious food and networking",
    icon: "🌮"
  },
  {
    time: "Saturday 6:00 PM",
    event: "Sunset Judging",
    description: "Present your projects as the sun sets",
    icon: "🌅"
  },
  {
    time: "Saturday 8:00 PM",
    event: "Closing & Awards",
    description: "Celebrate achievements and win amazing prizes!",
    icon: "🏆"
  }
];

const teamMembers = [
  {
    name: "Alex Rodriguez",
    position: "Event Director",
    socialMedia: { type: "linkedin", url: "#" }
  },
  {
    name: "Sarah Chen",
    position: "Technical Lead",
    socialMedia: { type: "twitter", url: "#" }
  },
  {
    name: "Marcus Johnson",
    position: "Sponsorship Manager",
    socialMedia: { type: "linkedin", url: "#" }
  },
  {
    name: "Emily Davis",
    position: "Marketing Director",
    socialMedia: { type: "instagram", url: "#" }
  },
  {
    name: "Jordan Lee",
    position: "Operations Manager",
    socialMedia: { type: "linkedin", url: "#" }
  },
  {
    name: "Taylor Kim",
    position: "Community Outreach",
    socialMedia: { type: "twitter", url: "#" }
  }
];

const faqs = [
  {
    question: "What is sunhacks?",
    answer: "sunhacks is Arizona State University's premier beach-themed hackathon where students come together to build innovative projects in a fun, collaborative environment. It's 24 hours of coding, creativity, and community under the desert sun!",
    icon: "☀️"
  },
  {
    question: "Who can participate?",
    answer: "All undergraduate and graduate students are welcome! Whether you're a beginner or an experienced developer, designer, or entrepreneur, there's a place for you at sunhacks. No experience required – just bring your enthusiasm!",
    icon: "🏄‍♂️"
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and any devices you want to hack with. We'll provide food, drinks, Wi-Fi, and all the beach vibes you need. Don't forget your sunglasses for the full experience!",
    icon: "🎒"
  },
  {
    question: "How much does it cost?",
    answer: "sunhacks is completely FREE for all participants! This includes meals, snacks, workshops, swag, and access to all our beach-themed activities. Just register and show up!",
    icon: "🆓"
  },
  {
    question: "Can I work on an existing project?",
    answer: "All projects must be started from scratch at sunhacks. However, you can use existing libraries, frameworks, and APIs. The goal is to build something new during the hackathon timeframe!",
    icon: "🚀"
  },
  {
    question: "What are the prizes?",
    answer: "We have amazing prizes for various categories including Best Overall, Most Creative, Best Beginner Project, and sponsor-specific awards. Prizes include tech gadgets, gift cards, and internship opportunities!",
    icon: "🏆"
  }
];

const getSocialIcon = (type: string) => {
  switch (type) {
    case "linkedin":
      return <Linkedin className="w-5 h-5" />;
    case "twitter":
      return <Twitter className="w-5 h-5" />;
    case "instagram":
      return <Instagram className="w-5 h-5" />;
    default:
      return <Linkedin className="w-5 h-5" />;
  }
};

const WorkWithUs = () => {
  return (
    <section id="work-with-us" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Event Schedule */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-primary mb-6">
              Event Schedule
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Ride the wave of our carefully planned event timeline
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sand-400 via-ocean-400 to-ocean-600 rounded-full"></div>
              
              <div className="space-y-8">
                {scheduleEvents.map((event, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className="ml-20">
                      <Card className="bg-white/80 backdrop-blur-sm border-sand-300 hover:shadow-lg transition-all hover:-translate-y-1">
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{event.icon}</span>
                            <div>
                              <CardTitle className="font-fredoka text-primary text-lg">
                                {event.event}
                              </CardTitle>
                              <p className="text-sm text-foreground/60 font-medium">
                                {event.time}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-foreground/70">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              The passionate individuals behind sunhacks 2025, working to create an amazing hackathon experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-sand-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-fredoka font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h3 className="font-fredoka font-semibold text-xl text-primary mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-foreground/70 mb-4">
                    {member.position}
                  </p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <a href={member.socialMedia.url} target="_blank" rel="noopener noreferrer">
                      {getSocialIcon(member.socialMedia.type)}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-foreground/60 mb-6">
              Want to join our team? Reach out to us!
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-fredoka text-lg px-8 py-4"
            >
              Join Our Team
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Got questions? We've got answers! Check out our most common questions below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-sand-300 overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-sand-200">
                    <AccordionTrigger className="px-6 py-4 hover:bg-sand-50/50 text-left">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{faq.icon}</span>
                        <span className="font-fredoka font-medium text-primary">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-foreground/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-sand-100 to-ocean-100 rounded-2xl p-8 max-w-2xl mx-auto border border-sand-300">
              <h3 className="font-fredoka font-semibold text-xl text-primary mb-4">
                Still have questions?
              </h3>
              <p className="text-foreground/80 mb-4">
                Don't hesitate to reach out! Our team is here to help make your sunhacks experience amazing.
              </p>
              <div className="flex justify-center space-x-4 text-2xl">
                <span>📧</span>
                <span>🐦</span>
                <span>💬</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
