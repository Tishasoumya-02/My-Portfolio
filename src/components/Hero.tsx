import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "./ImageWithFallback";
import { useIntl } from "react-intl";
const Hero = () => {
  const intl = useIntl();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(253, 249, 247, 0.9) 0%, rgba(248, 244, 240, 0.9) 50%, rgba(240, 221, 212, 0.9) 100%),
          url('https://images.unsplash.com/photo-1601408993947-6ef9e7a1ed97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwd2F0ZXJjb2xvciUyMHRleHR1cmUlMjBibHVzaHxlbnwxfHx8fDE3NTc5OTgzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Floral accent - top right */}
      <div className="absolute top-20 right-10 opacity-30 hidden lg:block">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1666206047463-884e4ef07d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZmxvd2VycyUyMG1pbmltYWwlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzU3OTk4MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Floral accent"
          className="w-64 h-64 object-cover rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-foreground leading-tight">
            Hey, I'm <span className="text-primary">Tisha Soumya</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {intl.formatMessage({ id: "hero.bio" })}
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {intl.formatMessage({ id: "hero.button" })}
          </Button>
        </div>
      </div>

      {/* Floral accent - bottom left */}
      <div className="absolute bottom-20 left-10 opacity-20 hidden lg:block">
        <div className="w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
