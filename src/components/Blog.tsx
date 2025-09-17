import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { useIntl } from "react-intl";
const Blog = () => {
  const intl = useIntl();
  const articles = [
    {
      title: "How to build a translations application using DeepL API’s?",
      excerpt:
        "A step-by-step guide to creating a multilingual translation app leveraging DeepL's powerful APIs for accurate and efficient translations.",
      category: "Multilingual",
      date: "September 11, 2025",
      readTime: "12 min read",
      url: "https://medium.com/ai-in-plain-english/how-to-build-a-translations-application-using-deepl-apis-b6251b5dfdf5",
    },
    {
      title:
        "How to setup a project with React 19 ,Tailwind CSS 4 and Shadcn UI",
      excerpt:
        "A comprehensive guide to kickstarting your React 19 project with the latest Tailwind CSS 4 and Shadcn UI for a modern, responsive design.",
      category: "React 19",
      date: "September 1, 2025",
      readTime: "3 min read",
      url: "https://medium.com/javascript-in-plain-english/kickstart-your-react-19-project-with-tailwind-css-4-and-shadcn-ui-61a928414fb7",
    },
    {
      title:
        "Refactor Class Components to Functional Components(Plone Foundation GSoC’23)",
      excerpt:
        "Advanced techniques and patterns for creating responsive, flexible layouts with CSS Grid that adapt to any screen size.",
      category: "Open Source",
      date: "August 24, 2023",
      readTime: "3 min read",
      url: "https://medium.com/@tishasoumya/refactor-class-components-to-function-components-plone-foundation-gsoc23-26cba7256808",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Multilingual: "bg-green-100 text-green-700 border-green-200",
      "React 19": "bg-purple-100 text-purple-700 border-purple-200",
      "Open Source": "bg-blue-100 text-blue-700 border-blue-200",
      React: "bg-orange-100 text-orange-700 border-orange-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-secondary text-secondary-foreground"
    );
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            {intl.formatMessage({ id: "blog.title" })}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {intl.formatMessage({ id: "blog.description" })}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border border-border/50 rounded-2xl bg-card hover:-translate-y-1"
            >
              <a href={`${article.url}`} target="_blank" rel="noopener noreferrer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      className={`${getCategoryColor(article.category)} border`}
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-0">
                  <span className="text-sm text-muted-foreground">
                    {article.readTime}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(article.url, "_blank")}
                    className="group-hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </a>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            View All Articles
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
