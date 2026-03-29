import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, GraduationCap, Phone } from "lucide-react";
import { cn } from "@/lib/utils"; // Shadcn utility

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#1a2e44] p-2 rounded-lg text-white group-hover:bg-orange-600 transition-colors">
            <GraduationCap size={28} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#1a2e44] leading-none">CAREER MANTRA</span>
            <span className="text-[10px] font-medium tracking-widest text-orange-600 uppercase">Computer Center</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#1a2e44] to-[#25415f] p-6 no-underline outline-none focus:shadow-md text-white">
                        <GraduationCap className="h-6 w-6 mb-2 text-orange-400" />
                        <div className="mb-2 mt-4 text-lg font-medium">Career Mantra</div>
                        <p className="text-sm leading-tight text-slate-300">
                          Modern skills for a successful future. Join our industry-leading certification programs.
                        </p>
                        <Link href="/courses" className="mt-4 text-xs font-bold text-orange-400 hover:underline">
                          VIEW ALL COURSES →
                        </Link>
                      </div>
                    </li>
                    {/* Category Links using the naye category routes */}
                    <ListItem href="/courses/category/web-development" title="Web Development">
                      React, Next.js, HTML/CSS & JS.
                    </ListItem>
                    <ListItem href="/courses/category/tally-accounting" title="Tally & Accounting">
                      Tally Prime, GST & Professional ERP.
                    </ListItem>
                    <ListItem href="/courses/category/graphic-design" title="Graphic Design">
                      Canva, Photoshop & Video Editing.
                    </ListItem>
                    <ListItem href="/courses/category/programming-ai" title="AI & Programming">
                      Python, Django, ML & Data Science.
                    </ListItem>
                    <ListItem href="/courses/category/professional-diploma" title="Diplomas">
                      O Level, CCC, ADCA & PGDCA.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-3 border-l pl-6 ml-2">
            <Button variant="ghost" className="text-sm font-medium hidden lg:flex gap-2">
               <Phone size={16} className="text-orange-600" /> +91 98765 43210
            </Button>
            <Button className="bg-[#1a2e44] hover:bg-orange-600">Enroll Now</Button>
          </div>
        </nav>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#1a2e44]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-10">
                <div className="font-bold text-orange-600 tracking-widest text-sm border-b pb-2">MENU</div>
                <Link href="/" className="text-lg font-semibold hover:text-orange-600 transition-colors">Home</Link>
                <Link href="/courses" className="text-lg font-semibold hover:text-orange-600 transition-colors">All Courses</Link>
                
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                   <Link href="/courses/category/web-development" className="text-sm text-slate-600">Web Development</Link>
                   <Link href="/courses/category/tally-accounting" className="text-sm text-slate-600">Tally Prime</Link>
                   <Link href="/courses/category/professional-diploma" className="text-sm text-slate-600">Diplomas (ADCA/CCC)</Link>
                </div>

                <Link href="/about" className="text-lg font-semibold hover:text-orange-600 transition-colors">About Us</Link>
                <Link href="/contact" className="text-lg font-semibold hover:text-orange-600 transition-colors">Contact</Link>
                <hr />
                <Button className="w-full bg-[#1a2e44]">Enroll Now</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none text-[#1a2e44]">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-slate-500 mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;