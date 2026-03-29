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
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Section 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-md text-primary-foreground">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">CAREER MANTRA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students with the latest computer skills. Join us to bridge the gap between education and career success.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary hover:underline">All Courses</Link></li>
              <li><Link href="/admissions" className="text-muted-foreground hover:text-primary hover:underline">Admission Process</Link></li>
              <li><Link href="/verify-certificate" className="text-muted-foreground hover:text-primary hover:underline">Verify Certificate</Link></li>
              <li><Link href="/career" className="text-muted-foreground hover:text-primary hover:underline">Job Placement</Link></li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary h-5 w-5 shrink-0" />
                <span className="text-muted-foreground">123 Education Hub, Near Main Station, Your City - 206001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary h-4 w-4 shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary h-4 w-4 shrink-0" />
                <span className="text-muted-foreground">info@careermantra.com</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to get info about new batches and scholarships.</p>
            <div className="flex flex-col gap-2">
              <Input placeholder="Your Email Address" className="bg-white" />
              <Button className="w-full gap-2">
                Subscribe <ArrowRight size={16} />
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Career Mantra Computer Center. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;