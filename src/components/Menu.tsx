import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Croissant, IceCreamCone, Leaf } from "lucide-react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  tag?: string;
};

const items: MenuItem[] = [
  {
    name: "Classic Espresso",
    description: "Double shot, rich crema, roasted in-house daily.",
    price: "$3.50",
    icon: <Coffee className="h-5 w-5" />,
    tag: "Best Seller",
  },
  {
    name: "Honey Oat Latte",
    description: "Espresso, steamed oat milk, and a touch of raw honey.",
    price: "$5.25",
    icon: <Coffee className="h-5 w-5" />,
  },
  {
    name: "Iced Vanilla Cold Brew",
    description: "Slow-steeped 18 hours, vanilla bean, served over ice.",
    price: "$4.75",
    icon: <IceCreamCone className="h-5 w-5" />,
    tag: "Fan Favorite",
  },
  {
    name: "Matcha Cloud",
    description: "Ceremonial-grade matcha whisked with silky milk foam.",
    price: "$5.00",
    icon: <Leaf className="h-5 w-5" />,
  },
  {
    name: "Butter Croissant",
    description: "Flaky, golden, baked fresh every morning.",
    price: "$3.25",
    icon: <Croissant className="h-5 w-5" />,
  },
  {
    name: "Cinnamon Cortado",
    description: "Equal parts espresso and warm milk with a cinnamon dust.",
    price: "$4.50",
    icon: <Coffee className="h-5 w-5" />,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Menu
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Crafted for every kind of morning
          </h2>
          <p className="mt-3 text-muted-foreground">
            From bold espresso to delicate pastries, everything is made with care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.name}
              className="flex flex-col justify-between rounded-xl shadow-md transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {item.icon}
                  </span>
                  {item.tag && (
                    <Badge variant="secondary" className="text-xs">
                      {item.tag}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent />
              <CardFooter className="flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">{item.price}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
