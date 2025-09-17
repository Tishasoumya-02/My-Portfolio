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
import { ExternalLink, Github } from "lucide-react";
import { useIntl } from "react-intl";
const Projects = () => {
  const intl = useIntl();
  const projects = [
    {
      title: "IN PROGRESS - AI Personal Assistant Web Application",
      description:
        "Personal Assistant - Organising Mails,Meets and Answering Queries.",
      image:
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU3OTY4NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Python", "AI/ML", "Langchain"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "In Volto , refactoring class component to functional component ",
      description:
        "Refactoring a legacy class component to a modern functional component using React hooks and context API. Also add Cypress tests",
      image:
        "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU3OTE3ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Redux", "Javascript", "Cypress"],
      liveUrl: "https://demo.plone.org/",
      githubUrl: "https://github.com/plone/volto/pulls/Tishasoumya-02",
    },
    {
      title: "Music Recommendation System",
      description:
        "A music recommendation system that suggests songs based on user preferences and listening history.",
      image:
        "https://images.unsplash.com/photo-1619983081563-430f63602796?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      technologies: ["React", "Node.js", "Python", "MongoDB", "Flask"],
      liveUrl: "#",
      githubUrl:
        "https://github.com/Tishasoumya-02/Music-Recommendation-Web-App",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            {intl.formatMessage({ id: "project.title" })}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {intl.formatMessage({ id: "project.description" })}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border border-border/50 rounded-2xl overflow-hidden bg-card hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-serif text-foreground mb-3">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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

              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group-hover:border-primary/50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group-hover:border-primary/50"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
