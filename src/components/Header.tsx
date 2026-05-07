"use client";

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
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { 
  Menu, 
  GraduationCap, 
  Phone, 
  ChevronRight, 
  LayoutGrid, 
  BookOpen, 
  Info, 
  MessageSquare 
} from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
          <div className="bg-slate-900 p-1.5 md:p-2 rounded-xl text-white group-hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100">
            <GraduationCap size={24} className="md:w-7 md:h-7" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black tracking-tight text-slate-900 leading-none">
              CAREER <span className="text-blue-600">MANTRA</span>
            </span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              Education Center
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "rounded-full")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-full">Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    <li className="row-span-3">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                           <GraduationCap size={120} />
                        </div>
                        <div className="mb-2 mt-4 text-xl font-bold">New Admissions Open</div>
                        <p className="text-sm leading-tight text-slate-300 mb-4">
                          Secure your future with NIELIT recognized certifications.
                        </p>
                        <Link href="/enroll" className="inline-flex items-center text-xs font-bold bg-blue-600 text-white w-fit px-4 py-2 rounded-full hover:bg-blue-500 transition-all">
                          ENROLL NOW <ChevronRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </li>
                    <ListItem href="/courses/web-dev" title="Modern Web Dev">Next.js & React Mastery</ListItem>
                    <ListItem href="/courses/tally" title="Finance & Tally">GST & Corporate Accounts</ListItem>
                    <ListItem href="/courses/diploma" title="Diplomas">ADCA, CCC & O Level</ListItem>
                    <ListItem href="/courses/creative" title="Creative Suite">UI/UX & Graphics</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "rounded-full")}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-3 border-l pl-6 ml-4">
            <Button variant="ghost" className="text-sm font-bold hidden lg:flex rounded-full">
               <Phone size={16} className="mr-2 text-blue-600" /> +91 91490 89121
            </Button>
            <Link href="/enroll">
              <Button className="bg-blue-600 hover:bg-slate-900 rounded-full px-6 font-bold transition-all shadow-lg shadow-blue-100">
                Enroll Now
              </Button>
            </Link>
          </div>
        </nav>

        {/* --- MOBILE IMPROVED UI --- */}
        <div className="flex items-center gap-2 md:hidden">
          <Link href="tel:+919149089121" className="p-2 text-blue-600 active:scale-90 transition-transform">
             <Phone size={20} />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl bg-slate-50">
                <Menu className="h-6 w-6 text-slate-900" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px] p-0 border-none bg-white">
              <div className="flex flex-col h-full">
                {/* Mobile Header Inside Sheet */}
                <div className="p-6 border-b flex items-center justify-between bg-slate-50/50">
                   <SheetTitle className="text-left font-black text-xl tracking-tight">
                      EXPLORE <span className="text-blue-600">MENU</span>
                   </SheetTitle>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  {/* Quick Links Group */}
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Navigation</p>
                    <MobileNavLink href="/" icon={LayoutGrid} label="Home" />
                    <MobileNavLink href="/courses" icon={BookOpen} label="All Courses" />
                    <MobileNavLink href="/about" icon={Info} label="About Campus" />
                    <MobileNavLink href="/contact" icon={MessageSquare} label="Get in Touch" />
                  </div>

                  {/* Course Categories Group */}
                  <div className="space-y-4 pt-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Course Categories</p>
                    <div className="grid grid-cols-1 gap-2">
                      <Link href="/courses/web" className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                        <span className="font-bold text-slate-700">Web Development</span>
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500" />
                      </Link>
                      <Link href="/courses/tally" className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                        <span className="font-bold text-slate-700">Tally Prime & GST</span>
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500" />
                      </Link>
                      <Link href="/courses/diploma" className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                        <span className="font-bold text-slate-700">Diplomas (ADCA/CCC)</span>
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Sticky Bottom Button */}
                <div className="p-6 border-t bg-white">
                  <Link href="/enroll">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 rounded-2xl text-lg font-bold shadow-xl shadow-blue-100 gap-2">
                      Join Course Today <ChevronRight size={20} />
                    </Button>
                  </Link>
                  <p className="text-center text-xs text-slate-400 mt-4 font-medium">
                    Etawah&apos;s No.1 Computer Center
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

// Helper Component for Mobile Nav Links
const MobileNavLink = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
  <Link href={href} className="flex items-center gap-4 p-2 text-slate-600 hover:text-blue-600 transition-colors group">
    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
      <Icon size={20} />
    </div>
    <span className="text-lg font-bold tracking-tight">{label}</span>
  </Link>
);

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
            "block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none transition-all hover:bg-slate-50 hover:text-blue-600 focus:bg-slate-50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-slate-500 mt-1.5">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;