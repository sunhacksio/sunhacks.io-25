import Link from "next/link";
import c from "config";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🏆</span>
              <h3 className="text-xl font-bold text-foreground">{c.hackathonName}</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              {c.defaultMetaDataDescription || "Join us for an incredible hackathon experience where innovation meets collaboration."}
            </p>
            <div className="flex space-x-4">
              <Link href={c.links.discord} className="text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </Link>
              <Link href={c.links.twitter} className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </Link>
              <Link href={c.links.instagram} className="text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </Link>
              <Link href={c.links.github} className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-foreground transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/bug-report" className="text-muted-foreground hover:text-foreground transition-colors">
                  Report Bug
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${c.issueEmail}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {c.issueEmail}
                </a>
              </li>
              <li className="text-muted-foreground">
                {c.localUniversityName}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {c.hackathonName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;