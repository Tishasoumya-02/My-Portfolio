import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "./ImageWithFallback";
import { Github, Linkedin, Mail } from "lucide-react";
import { useIntl } from "react-intl";
const Contact = () => {
  const intl = useIntl();
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      {/* Floral accent - top left */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1666206047463-884e4ef07d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZmxvd2VycyUyMG1pbmltYWwlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzU3OTk4MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Floral accent"
          className="w-32 h-32 object-cover rounded-full"
        />
      </div>

      {/* Floral accent - bottom right */}
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1666206047463-884e4ef07d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwaW5rJTIwZmxvd2VycyUyMG1pbmltYWwlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzU3OTk4MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Floral accent"
          className="w-24 h-24 object-cover rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            {intl.formatMessage({ id: "contact.title" })}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {intl.formatMessage({ id: "contact.description" })}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-xl border border-border/50 bg-card/80 backdrop-blur-sm rounded-2xl">
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center space-x-6 pt-8 border-t border-border/50">
                <a
                  href="mailto:tishasoumya@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-secondary/50 hover:bg-primary hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tisha-soumya-380290204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-secondary/50 hover:bg-primary hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Tishasoumya-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-secondary/50 hover:bg-primary hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <p className="text-center text-sm text-muted-foreground pt-4">
                {intl.formatMessage({ id: "contact.reach" })}{" "}
                <a
                  href="mailto:tishasoumya@gmail.com"
                  className="text-primary hover:underline"
                >
                  tishasoumya@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
