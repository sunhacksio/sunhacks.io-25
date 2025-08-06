/* import Balancer from "react-wrap-balancer";
import Image from "next/image";
import D1 from "../../../public/img/landing/d1.svg";
import D2 from "../../../public/img/landing/d2.svg";
import D3 from "../../../public/img/landing/d3.svg";
import D4 from "../../../public/img/landing/d4.svg";
import Dino_Coding from "../../../public/img/landing/dinos_coding.png";
export default function About() {
	const d1_stylesheet = {
		width: "25rem",
		height: "auto",
		sm: "width: 30rem",
	};
	return (
		<section
			className="flex min-h-screen w-full items-center justify-center border-y-2 border-muted-foreground"
			id="About"
		>
			<div className="flex w-full flex-col items-center justify-center">
				<h1 className="text-center text-4xl font-black md:text-5xl">
					About Section
				</h1>
				<h3 className="px-4 text-center text-lg font-bold md:px-0 md:text-2xl">
					Introduce the hackathon and its purpose! Make it sound
					enticing
				</h3>
			</div>
		</section>
	);
}
 */

import { Card, CardContent } from "@/components/shadcn/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-primary mb-6">
            About SunHacks
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Join Arizona's premier beach-themed hackathon where creativity flows like ocean waves! 
            SunHacks brings together innovative minds to build amazing projects in a fun, 
            summer-inspired atmosphere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-sand-300 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="font-fredoka font-semibold text-xl text-primary mb-4">
                Community
              </h3>
              <p className="text-foreground/70">
                Connect with fellow innovators, designers, and developers in a collaborative 
                beach paradise environment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-sand-300 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-fredoka font-semibold text-xl text-primary mb-4">
                Innovation
              </h3>
              <p className="text-foreground/70">
                Push the boundaries of technology while soaking up the creative energy 
                of our beach-themed hackathon experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-sand-300 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-fredoka font-semibold text-xl text-primary mb-4">
                Student Focus
              </h3>
              <p className="text-foreground/70">
                Designed by students, for students. Learn new skills, win amazing prizes, 
                and launch your tech career under the Arizona sun.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-8 text-3xl">
            <span className="animate-float">🏖️</span>
            <span className="animate-float" style={{ animationDelay: '0.5s' }}>🌴</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>🐚</span>
            <span className="animate-float" style={{ animationDelay: '1.5s' }}>⛱️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;