import { Coffee, Instagram, Facebook, Twitter, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer id="visit" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Coffee className="h-5 w-5" />
              </span>
              <span className="text-lg">Brewhaven</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-background/70">
              A quiet corner for great coffee, warm pastries, and good company.
            </p>
            <div className="mt-5 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-background/70 hover:text-background">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-background/70 hover:text-background">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-background/70 hover:text-background">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60">
              Visit Us
            </h3>
            <div className="mt-4 flex items-start gap-2 text-sm text-background/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>128 Maple Street, Portland, OR 97205</span>
            </div>
            <div className="mt-3 flex items-start gap-2 text-sm text-background/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Mon–Fri: 6:30am – 6pm<br />Sat–Sun: 7am – 5pm</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm text-background/80">
              Sign up for new roasts, seasonal drinks, and shop news.
            </p>
          </div>
        </div>

        <Separator className="my-10 bg-background/20" />

        <p className="text-center text-xs text-background/60">
          © {new Date().getFullYear()} Brewhaven Coffee Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
