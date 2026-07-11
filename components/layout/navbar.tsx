"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isTransparent = pathname === "/" && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isTransparent
          ? "bg-transparent py-6"
          : "bg-background/80 backdrop-blur-xl border-b border-border py-3 shadow-sm",
      )}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 group bg-white py-1 px-4 rounded-2xl shadow-sm border border-border shrink-0"
        >
          <img
            src="/calibration_logo.jpg"
            alt="Mechatronics Calibration LLP Logo"
            className="h-10 md:h-12 w-auto object-contain shrink-0 transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.label}>
                  {link.dropdown ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-muted data-[state=open]:bg-muted transition-all text-base font-medium text-foreground">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[500px] gap-2 p-6 md:grid-cols-2 lg:w-[700px] bg-background rounded-3xl border border-border shadow-2xl">
                          {link.dropdown.map((item) => (
                            <li key={item.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="group block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none transition-all hover:bg-primary/5"
                                >
                                  <div className="text-sm font-bold leading-none text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                                    {item.label}
                                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </div>
                                  <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1">
                                    Precision {item.label.toLowerCase()}{" "}
                                    services.
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-base font-medium transition-all text-muted-foreground hover:text-primary hover:bg-primary/5",
                          pathname === link.href && "text-primary bg-primary/5",
                        )}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-6 flex items-center space-x-4">
            <Button className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 active:translate-y-0">
              Request Quote
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-4">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl text-foreground hover:bg-muted"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] sm:w-[450px] border-l-0 p-0 shadow-2xl"
            >
              <div className="flex flex-col h-full bg-background">
                <SheetHeader className="p-6 border-b border-border bg-muted/30">
                  <SheetTitle className="text-left">
                    <img
                      src="/calibration_logo.jpg"
                      alt="Mechatronics Calibration LLP Logo"
                      className="h-10 w-auto object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-grow overflow-y-auto px-6 pt-2 pb-6">
                  <nav className="flex flex-col">
                    {NAV_LINKS.map((link) => (
                      <div key={link.label} className="flex flex-col border-b border-border/50 last:border-0">
                        {link.dropdown ? (
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value={link.label} className="border-none">
                              <AccordionTrigger className="text-lg font-bold py-3 hover:no-underline transition-all [&[data-state=open]]:text-primary">
                                {link.label}
                              </AccordionTrigger>
                              <AccordionContent className="pb-4 pt-0 px-2">
                                <div className="flex flex-col space-y-3 border-l-2 border-primary/10 ml-2 pl-4">
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.label}
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="text-base font-medium text-muted-foreground hover:text-primary transition-all flex items-start group/link"
                                    >
                                      <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mr-3 mt-2 shrink-0 transition-all group-hover/link:bg-primary group-hover/link:scale-150" />
                                      <span className="leading-tight">{item.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "text-lg font-bold py-3 transition-all",
                              pathname === link.href
                                ? "text-primary"
                                : "text-foreground hover:text-primary",
                            )}
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="p-6 border-t border-border bg-muted/30">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 group relative overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center">
                        Request a Quote
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-success opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

