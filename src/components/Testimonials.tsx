import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Maya Chen",
    role: "Regular since 2021",
    quote:
      "Brewhaven is my second office. The oat lattes are perfect and the staff always remembers my order.",
    initials: "MC",
  },
  {
    name: "Daniel Ortiz",
    role: "Local artist",
    quote:
      "The cold brew here genuinely changed how I feel about coffee. Smooth, never bitter, always consistent.",
    initials: "DO",
  },
  {
    name: "Priya Nair",
    role: "Weekend regular",
    quote:
      "Cozy atmosphere, incredible croissants, and the matcha cloud is worth the trip alone. Love this place.",
    initials: "PN",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Loved by our neighbors
          </h2>
          <p className="mt-3 text-muted-foreground">
            Don't just take our word for it — here's what regulars have to say.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
