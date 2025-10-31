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
import { useIntl } from "react-intl";
const Projects = () => {
  const intl = useIntl();
  const projects = [
    {
      title: "Active contribution to Plone MCP",
      description:
        "Building MCP tools to automate adding content to Plone sites, heavily relying on Plone REST API",
      image:
        "https://cdn.prod.website-files.com/64128071fa22275256c1c222/6827754f0c3f7f4bc49d9f80_mcp.png",
      technologies: ["React", "TypeScript", "MCP", "AI/ML", "FastAPI"],
      githubUrl: "https://github.com/plone/plone-mcp",
    },
    {
      title: "In Volto , refactoring class component to functional component ",
      description:
        "Refactoring a legacy class component to a modern functional component using React hooks and context API. Also add Cypress tests",
      image: "https://demo.plone.org/static/media/Logo.16e25cdf.svg",
      technologies: ["React", "Redux", "Javascript", "Cypress"],
      liveUrl: "https://demo.plone.org/",
      githubUrl:
        "https://github.com/plone/volto/pulls?q=is%3Apr+author%3ATishasoumya-02+is%3Aclosed",
    },
    {
      title: "Active contribution to Volto , frontend for Plone CMS",
      description:
        "Developing new features and fixing bugs in Volto, the React-based frontend for Plone CMS, enhancing user experience and accessibility.",
      image:
        "https://raw.githubusercontent.com/plone/volto/main/logos/volto-colorful.png",
      technologies: ["React", "Javascript", "TypeScript", "Python"],
      githubUrl: "https://github.com/plone/volto",
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
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:border-primary/50"
                    asChild={true}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:border-primary/50"
                    asChild={true}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
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

export default Projects;
