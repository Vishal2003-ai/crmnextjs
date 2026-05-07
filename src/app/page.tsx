"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  ArrowRight, 
  Laptop, 
  Users, 
  Award, 
  Sparkles, 
  PlayCircle,
  GraduationCap
} from "lucide-react";
import { cn } from '@/lib/utils';

// Inhe aap future mein Backend API se fetch kar sakte hain
const features = [
  {
    title: "Modern Curriculum",
    desc: "Tally Prime, Web Development, aur Graphic Design jaise industry-standard courses.",
    icon: Laptop,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "Expert Mentors",
    desc: "Experienced teachers jo har student par personal dhyan dete hain.",
    icon: Users,
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600"
  },
  {
    title: "Certification",
    desc: "Govt. recognized certificates jo aapke resume ki value ko badhate hain.",
    icon: Award,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600"
  }
];

const HomePage = () => {
  return (
    <main className="flex flex-col w-full bg-white overflow-hidden pt-16 md:pt-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 lg:py-0">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-blue-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 w-[30%] h-[30%] bg-orange-50/50 blur-[100px] rounded-full" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-100 border-none px-4 py-1.5 rounded-full font-bold tracking-wide">
              <Sparkles size={14} className="mr-2" /> #1 Institute in Etawah
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Unlock Your <br />
              <span className="text-blue-600 relative">
                Digital Potential
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                  <path d="M5 15C70 5 150 5 295 15" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
              Career Mantra Computer & Education Center provides top-tier technical training to help you master skills of 2026.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button size="lg" className="bg-blue-600 hover:bg-slate-900 h-16 px-10 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-200 transition-all group">
                  Explore Courses <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/enroll">
                <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-lg font-bold border-2 border-slate-200 hover:bg-slate-50">
                  <PlayCircle className="mr-2 text-blue-600" /> Watch Demo
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="pt-8 flex items-center gap-8 border-t border-slate-100">
              <div>
                <p className="text-2xl font-black text-slate-900">5000+</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Students</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-2xl font-black text-slate-900">15+</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Courses</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Media Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[550px] aspect-square rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white">
              <Image 
                src="/hero-image.jpg" // Yahan ek achi classroom ya student image lagayein
                alt="Career Mantra Campus" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -left-6 bg-white p-5 shadow-2xl rounded-[2rem] border border-slate-50 hidden md:flex items-center gap-4"
            >
              <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
                <GraduationCap size={32} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-wider">Placement</p>
                <p className="text-lg font-bold text-slate-900">100% Support</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-8 right-10 bg-slate-900 text-white p-6 shadow-2xl rounded-[2rem] hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-blue-500" />)}
                </div>
                <span className="text-sm font-bold">New Batch: 15th May</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Limited Seats Remaining!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
              Why Career <span className="text-blue-600">Mantra?</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Etawah ka sabse purana aur bharosemand computer institute, jahan hum sirf padhate nahi, career banate hain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6", item.lightColor, item.textColor)}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="mt-8 pt-8 border-t border-slate-50">
                  <Link href="/about" className="text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 flex items-center transition-colors">
                    Learn More <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;