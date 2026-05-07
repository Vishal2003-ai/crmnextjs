"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  GraduationCap, 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12 lg:py-20">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-900/20">
                <GraduationCap size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">CAREER MANTRA</span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-blue-500 uppercase">IT Training Hub</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
              Etawah&apos;s leading computer institute empowering students with industry-standard skills in Web Dev, Tally, and Programming.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Youtube size={18} />} />
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900/50 p-6 md:p-8 rounded-[2rem] border border-slate-800 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-2">Newsletter</h3>
              <p className="text-xs text-slate-500">Get updates on new batches and placement drives.</p>
            </div>
            <div className="flex w-full md:w-auto flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Email address" 
                className="bg-slate-950 border-slate-800 rounded-full h-12 px-6 focus-visible:ring-blue-600 w-full sm:w-64" 
              />
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full h-12 px-8 font-bold shrink-0">
                Join Now
              </Button>
            </div>
          </div>
        </div>

        <hr className="border-slate-900 mb-12" />

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <FooterGroup title="Popular Courses">
            <FooterLink href="/courses/adca">ADCA (1 Year)</FooterLink>
            <FooterLink href="/courses/web-dev">Full Stack Web Dev</FooterLink>
            <FooterLink href="/courses/tally">Tally Prime + GST</FooterLink>
            <FooterLink href="/courses/olevel">O Level (NIELIT)</FooterLink>
          </FooterGroup>

          <FooterGroup title="Quick Access">
            <FooterLink href="/verify">Verify Certificate</FooterLink>
            <FooterLink href="/admissions">Student Login</FooterLink>
            <FooterLink href="/about">About Institute</FooterLink>
            <FooterLink href="/contact">Help & Support</FooterLink>
          </FooterGroup>

          <FooterGroup title="Our Campus">
            <div className="space-y-4 text-sm text-slate-400 mt-2">
              <div className="flex gap-3">
                <MapPin className="text-blue-500 shrink-0 w-5 h-5" />
                <span>Vijay Nagar, Near Main Chauraha, Etawah, UP - 206001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0 w-4 h-4" />
                <span>+91 91490 89121</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0 w-4 h-4" />
                <span>contact@careermantra.edu</span>
              </div>
            </div>
          </FooterGroup>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600/10 to-transparent p-6 rounded-3xl border border-blue-600/20">
              <ShieldCheck className="text-blue-500 mb-3" size={32} />
              <h4 className="text-white font-bold mb-1">ISO Certified 2026</h4>
              <p className="text-xs text-slate-500">Government recognized computer education center.</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] font-medium text-slate-600 tracking-wide order-2 md:order-1">
            © 2026 CAREER MANTRA COMPUTER & EDUCATION CENTER. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 order-1 md:order-2">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-blue-500 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-blue-500 transition-colors">Terms</Link>
            <Link href="/sitemap" className="text-xs text-slate-500 hover:text-blue-500 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const FooterGroup = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="space-y-4">
    <h3 className="text-white font-bold text-sm uppercase tracking-[0.15em]">{title}</h3>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} className="group text-sm text-slate-500 hover:text-blue-500 transition-all flex items-center gap-1">
      <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500" />
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <Link 
    href={href} 
    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-90"
  >
    {icon}
  </Link>
);

export default Footer;