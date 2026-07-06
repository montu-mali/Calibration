"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = pathname === "/" && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isTransparent
          ? "bg-transparent py-6"
          : "bg-white/80 dark:bg-secondary/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            whileHover={{ rotate: 90 }}
            className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20"
          >
            <span className="text-white font-bold text-2xl">C</span>
          </motion.div>
          <span className={cn(
            "text-2xl font-bold tracking-tight transition-colors duration-300",
            isTransparent ? "text-white" : "text-secondary"
          )}>
            Calibration
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.label}>
                  {link.dropdown ? (
                    <>
                      <NavigationMenuTrigger className={cn(
                        "bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 transition-all text-base font-medium",
                        isTransparent ? "text-white hover:text-white" : "text-secondary"
                      )}>
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[500px] gap-2 p-6 md:grid-cols-2 lg:w-[700px] bg-white rounded-3xl border border-slate-100 shadow-2xl">
                          {link.dropdown.map((item) => (
                            <li key={item.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="group block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none transition-all hover:bg-primary/5"
                                >
                                  <div className="text-sm font-bold leading-none text-secondary group-hover:text-primary transition-colors flex items-center justify-between">
                                    {item.label}
                                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </div>
                                  <p className="line-clamp-1 text-xs leading-snug text-slate-400 mt-1">
                                    Precision {item.label.toLowerCase()} services.
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
                      <NavigationMenuLink className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-base font-medium transition-all",
                        isTransparent
                          ? "text-white/80 hover:text-white hover:bg-white/10"
                          : "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-primary/5",
                        pathname === link.href && !isTransparent && "text-primary bg-primary/5",
                        pathname === link.href && isTransparent && "text-white bg-white/20"
                      )}>
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-6 flex items-center space-x-4">
            <ModeToggle />
            <Button className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 active:translate-y-0">
              Request Quote
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(
                "rounded-xl",
                isTransparent ? "text-white hover:bg-white/10" : "text-secondary hover:bg-slate-100"
              )}>
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[450px] border-l-0 p-0">
              <div className="flex flex-col h-full bg-white">
                <SheetHeader className="p-6 border-b border-slate-100">
                  <SheetTitle className="text-left flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">C</span>
                    </div>
                    <span className="text-xl font-bold">Calibration</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-grow overflow-y-auto p-6">
                  <nav className="flex flex-col space-y-2">
                    {NAV_LINKS.map((link) => (
                      <div key={link.label} className="flex flex-col">
                        {link.dropdown ? (
                          <div className="py-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-2 block">{link.label}</span>
                            <div className="grid grid-cols-1 gap-1">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="text-lg font-semibold text-secondary hover:text-primary p-4 rounded-2xl hover:bg-slate-50 transition-all"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            className={cn(
                              "text-xl font-bold p-4 rounded-2xl transition-all",
                              pathname === link.href ? "text-primary bg-primary/5" : "text-secondary hover:bg-slate-50"
                            )}
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="p-6 border-t border-slate-100">
                  <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20">
                    Request a Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
