import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "./ImageWithFallback";
import Tisha from "./assests/image.png";
import { useIntl } from "react-intl";

const About = () => {
  const intl = useIntl();
  const skills = [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "AI/ML",
    "MCP TOOLS",
    "Plone CMS",
    "FastAPI",
    "REST API",
    "Git & GitHub",
    "Testing (Cypress, Jest)",
    "Accessibility",
    "Multilingual",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            {intl.formatMessage({ id: "about.title" })}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-lg border border-border/50 bg-card rounded-2xl">
            <CardContent className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <div className="relative">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                    <ImageWithFallback
                      src={Tisha}
                      alt="Tisha Soumya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">👋</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 text-center lg:text-left">
                <h3 className="text-2xl font-serif text-foreground mb-4">
                  {intl.formatMessage({ id: "about.headline" })}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {intl.formatMessage({ id: "about.description" })}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {intl.formatMessage({ id: "about.extraInterests" })}
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
