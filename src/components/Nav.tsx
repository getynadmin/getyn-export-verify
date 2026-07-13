import { Coffee, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Coffee className="h-5 w-5" />
          </span>
          <span className="text-lg">Brewhaven</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="rounded-full">Order Online</Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-6 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button className="mt-2 w-full rounded-full">Order Online</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
