"use client"
// import Link from "next/link";
// import Image from "next/image";
// import c from "config";
// import { Button } from "../shadcn/ui/button";
// import ProfileButton from "./ProfileButton";
// import { auth, currentUser } from "@clerk/nextjs/server";
// import NavBarLinksGrouper from "./NavBarLinksGrouper";
// import { Oswald } from "next/font/google";
// import { cn } from "@/lib/utils/client/cn";
// import { getUser } from "db/functions";

// const oswald = Oswald({
// 	variable: "--font-oswald",
// 	subsets: ["latin"],
// });

// interface NavbarProps {
// 	className?: string;
// }

// export default async function Navbar({ className }: NavbarProps) {
// 	const user = await currentUser();
// 	const registrationIsComplete =
// 		user != null && (await getUser(user.id)) != undefined;
// 	return (
// 		<div className="z-50 w-screen">
// 			<div
// 				className={cn(
// 					`relative top-0 z-50 h-16 w-screen border-b border-b-border bg-nav ${oswald.variable}`,
// 					className,
// 				)}
// 			>
// 				<div className="mx-auto grid h-full w-full max-w-7xl grid-flow-col grid-cols-2 px-2 sm:px-6 lg:max-w-full lg:px-8">
// 					<div className="col-span-2 flex items-center justify-start gap-x-5">
// 						<Link
// 							href={"/"}
// 							className="mr-5 flex items-center gap-x-2"
// 						>
// 							<Image
// 								src={c.icon.svg}
// 								alt={c.hackathonName + " Logo"}
// 								width={32}
// 								height={32}
// 							/>
// 							{/* <div className="bg-muted-foreground h-[45%] rotate-[25deg] w-[2px]" /> */}
// 							<h2 className="font-oswald text-lg font-bold text-[#A7866A] dark:text-[#FEF2E6]">
// 								{c.hackathonName}
// 							</h2>
// 						</Link>
// 						<div className="col-span-2 hidden items-center justify-start gap-x-5 md:flex">
// 							<NavBarLinksGrouper />
// 						</div>
// 					</div>

// 					<div className="flex items-center justify-between space-x-2 md:justify-center">
// 						<div className="hidden gap-x-4 md:flex">
// 							{user ? (
// 								<>
// 									<Link
// 										href={
// 											registrationIsComplete
// 												? "/dash"
// 												: "/register"
// 										}
// 									>
// 										<Button
// 											variant={"outline"}
// 											className="bg-nav hover:bg-background"
// 										>
// 											{registrationIsComplete
// 												? "Dashboard"
// 												: "Complete Registration"}
// 										</Button>
// 									</Link>
// 								</>
// 							) : (
// 								<>
// 									<Link href={"/sign-in"}>
// 										<Button
// 											variant={"outline"}
// 											className="bg-nav hover:bg-background"
// 										>
// 											Sign In
// 										</Button>
// 									</Link>
// 									<Link href={"/register"}>
// 										<Button>Register</Button>
// 									</Link>
// 								</>
// 							)}
// 						</div>
// 						<ProfileButton />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export const runtime = "edge";




import { useState } from "react";
import { Button } from "@/components/shadcn/ui/button";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sand-200 ${className || ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="font-fredoka font-bold text-2xl text-primary cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            ☀️ sunhacks 
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Partners
            </button>
            <button 
              onClick={() => scrollToSection('work-with-us')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Work With Us
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-fredoka">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('partners')}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                Partners
              </button>
              <button 
                onClick={() => scrollToSection('work-with-us')}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                Work With Us
              </button>
              <div className="px-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-fredoka">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;