import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "./ImageWithFallback";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const Conferences = () => {
  const conferences = [
    {
      title: "PloneConf 2025",
      type: "Conference",
      date: "October 2025",
      location: "Jyväskylä, Finland",
      description:
        "Annual international conference for the Plone community. Gave training on Volto customization techniques along with a colleague, attended great insightful talks by smart and talented people of Plone and Python Finland community, also attended sprints and worked on Plone MCP and got to know more about DsPY magic",
      image:
        "https://2025.ploneconf.org/@@images/logo-800-9b3c104045502705cfd45b383b4def68.png",
      technologies: ["Plone", "Python", "React", "MCP"],
      eventUrl: "https://2025.ploneconf.org/",
      role: "Trainer & Sprint Participant",
    },
    {
      title: "Beethoven Sprint 2025",
      type: "Sprint",
      date: "May 2025",
      location: "Bonn, Germany",
      description:
        "Collaborative development sprint focused on Volto improvements ,new feature development and foundational stones for Seven codename for new Plone frontend. Worked on DeepL API integration in volto and special routing pages for seven.",
      image:
        "https://kitconcept.com/en/blog/beethoven-sprint-2025/kitconcept-matzkefoto-dsc_2628.jpg/@@images/image-1600-03939ca4132698df46afd88df7f14ae7.jpeg",
      technologies: [
        "React",
        "TypeScript",
        "Volto",
        "Cypress",
        "React Router 7",
        "Multilingual",
        "REST API",
        "Python",
      ],
      eventUrl: "https://kitconcept.com/en/blog/beethoven-sprint-2025",
      role: "Developer",
    },
    {
      title: "PloneConf 2023",
      type: "Conference",
      date: "October 2023",
      location: "Eibar, Spain",
      description:
        "Participated in the annual Plone conference, presented my google summer of code project to the community , attending sessions on modern web development practices.",
      image: "https://2023.ploneconf.org/static/media/Logo.771f75de.svg",
      technologies: ["Plone", "Python", "JavaScript","React"],
      eventUrl: "https://2023.ploneconf.org/",
      role: "Speaker & Sprint Participant",
    },
  ];

  return (
    <section id="conferences" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            Conferences & Sprints
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Events, conferences, and development sprints I've participated in,
            contributing to the open source community and advancing my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {conferences.map((conference, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border border-border/50 rounded-2xl overflow-hidden bg-card hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={conference.image}
                    alt={conference.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 bg-white p-4"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        conference.type === "Conference"
                          ? "default"
                          : "secondary"
                      }
                      className="text-xs font-medium"
                    >
                      {conference.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-xl font-serif text-foreground">
                    {conference.title}
                  </CardTitle>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{conference.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{conference.location}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <Badge
                    variant="outline"
                    className="text-xs border-primary/30 text-primary"
                  >
                    {conference.role}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {conference.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {conference.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                {conference.eventUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:border-primary/50"
                    asChild
                  >
                    <a
                      href={conference.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Event Details
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
