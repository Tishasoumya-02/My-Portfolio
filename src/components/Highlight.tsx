import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star } from "lucide-react";
import { useIntl } from "react-intl";
const Highlight = () => {
  const intl = useIntl();
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/10">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/20 border border-primary/20 rounded-2xl shadow-xl">
          <a
            href="https://summerofcode.withgoogle.com/archive/2023/projects/dvhArmDK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardContent className="p-12 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 text-primary/20">
                <Star className="w-8 h-8" />
              </div>
              <div className="absolute top-4 right-4 text-primary/20">
                <Star className="w-8 h-8" />
              </div>
              <div className="absolute bottom-4 left-8 text-primary/20">
                <Award className="w-6 h-6" />
              </div>
              <div className="absolute bottom-4 right-8 text-primary/20">
                <Award className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-4">
                  🎉 {intl.formatMessage({ id: "highlight.title" })}
                </Badge>

                <h3 className="text-3xl font-serif text-foreground mb-4">
                  Google Summer of Code
                </h3>

                <p className="text-xl text-primary mb-4">Plone Foundation</p>

                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {intl.formatMessage({ id: "highlight.description" })}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="bg-secondary/50">
                    Open Source
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/50">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/50">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/50">
                    Accessibility
                  </Badge>
                </div>
              </div>
            </CardContent>
          </a>
        </Card>
      </div>
    </section>
  );
};

export default Highlight;
