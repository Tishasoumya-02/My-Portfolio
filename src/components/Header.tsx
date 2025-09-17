import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import { useIntl } from "react-intl";

const Header = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const intl = useIntl();

  const navMenu = [
    { name: intl.formatMessage({ id: "nav.home" }), href: "#home" },
    { name: intl.formatMessage({ id: "nav.about" }), href: "#about" },
    { name: intl.formatMessage({ id: "nav.projects" }), href: "#projects" },
    { name: intl.formatMessage({ id: "nav.blog" }), href: "#blog" },
    { name: intl.formatMessage({ id: "nav.contact" }), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    onClose(); // Close menu after navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-serif text-foreground">Tisha Soumya</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navMenu.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop Language Switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64 flex flex-col">
            <SheetHeader className="text-left">
              <SheetTitle>{intl.formatMessage({ id: "nav.menu" })}</SheetTitle>
              <SheetDescription>
                {intl.formatMessage({ id: "nav.description" })}
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col space-y-6 mt-8 flex-1">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-4">
                {navMenu.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Language Switcher in Mobile */}
              <div className="pt-6 border-t border-border">
                <LanguageSwitcher />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
