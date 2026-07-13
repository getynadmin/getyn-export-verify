import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-neutral-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 text-center md:py-28">
        <Badge variant="secondary" className="gap-1 rounded-full px-4 py-1.5 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5" />
          Small-batch roasted, every single day
        </Badge>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          A quiet haven for your
          <span className="text-primary"> favorite cup</span>
        </h1>

        <p className="max-w-xl text-balance text-base text-white/70 md:text-lg">
          Brewhaven is a neighborhood coffee shop serving carefully sourced beans,
          slow mornings, and warm pastries. Come sit with us for a while.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="rounded-full px-8">
            Order Online
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white"
          >
            View Menu
          </Button>
        </div>

        <div className="mt-6 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
          <div>
            <p className="text-2xl font-bold text-white">12+</p>
            <p className="text-xs text-white/60">Years Brewing</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">30k</p>
            <p className="text-xs text-white/60">Happy Regulars</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-xs text-white/60">Ethically Sourced</p>
          </div>
        </div>
      </div>
    </section>
  );
}
