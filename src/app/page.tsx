import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Laptop, Users, Award } from "lucide-react";

const HomePage = () => {
  return (
    <main className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="px-4 py-1 border-orange-500 text-orange-600 bg-orange-50">
              Mantra for a Great Career
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a2e44]">
              Building Blocks of a <span className="text-orange-600">Successful Career</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Career Mantra Computer Center provides industry-leading technical training to help you master modern skills and secure your future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#1a2e44] hover:bg-[#25415f] px-8">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Hero Image / Logo Showcase */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center bg-white rounded-full shadow-2xl p-8 border-8 border-orange-100">
               {/* Replace with your actual uploaded logo path */}
              <Image 
                src="/career-mantra-logo.png" 
                alt="Career Mantra Logo" 
                width={400} 
                height={400}
                className="object-contain animate-pulse-slow"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 shadow-xl rounded-xl flex items-center gap-3 border border-slate-100">
              <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle2 /></div>
              <div><p className="text-sm font-bold">100% Practical</p><p className="text-xs text-slate-500">Job Oriented Training</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION / ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e44] mb-4">
              Welcome to Career Mantra Computer Center
            </h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">
              Hamara uddeshya har student ko wo technical skills dena hai jo aaj ki competitive world mein zaroori hain. Career Mantra sirf ek coaching center nahi, balki aapki safalta ka mantra hai.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Laptop size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Curriculum</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tally Prime, Web Development, aur Graphic Design jaise latest courses jo industry standards ke mutabiq hain.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-[#1a2e44] text-white border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Mentors</h3>
              <p className="text-slate-100 text-sm leading-relaxed">
                Experienced teachers jo har student par personal dhyan dete hain taaki koi bhi concept miss na ho.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Certification</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Course completion ke baad valid certificates jo aapke resume aur career value ko badhate hain.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;