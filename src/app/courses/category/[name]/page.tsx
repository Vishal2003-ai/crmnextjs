"use client";

import { courseDetails } from "@/data/courses";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, ArrowRight, Download, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { use } from "react";

export default function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params); // Next.js 15+ compatible way
  
  const decodedName = decodeURIComponent(name).replace(/-/g, ' ');
  
  const filteredCourses = courseDetails.filter(
    (c) => c.category?.toLowerCase() === decodedName.toLowerCase()
  );

  if (filteredCourses.length === 0) return notFound();

  return (
    <div className="min-h-screen bg-slate-50 pt-16 md:pt-20">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative bg-slate-950 py-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_-20%,#3b82f620,transparent)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              href="/courses" 
              className="group text-blue-400 flex items-center gap-2 mb-8 text-sm font-bold tracking-widest uppercase"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              All Categories
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div className="space-y-4 flex-1">
                <Badge className="bg-blue-500 text-white border-none px-3 py-1 rounded-full">
                  Specialized Track
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black text-white capitalize leading-tight">
                  {decodedName} <span className="text-blue-600">.</span>
                </h1>
                <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed">
                   Career Mantra provides 100% practical exposure in {decodedName}. 
                   Ye programs industry leaders ke dwara design kiye gaye hain.
                </p>
              </div>
              
              <div className="hidden lg:block">
                 <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-[2rem] backdrop-blur-xl">
                    <p className="text-blue-500 font-bold text-2xl">{filteredCourses.length}</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter">Available Programs</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- COURSES LISTING --- */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-12">
          {filteredCourses.map((course, idx) => (
            <motion.div 
              key={course.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white border border-slate-100 rounded-[3rem] overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700"
            >
              <div className="grid lg:grid-cols-12 items-stretch">
                
                {/* Image/Icon Section */}
                <div className="lg:col-span-4 bg-slate-100 relative min-h-[300px] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="text-9xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 filter grayscale group-hover:grayscale-0">
                    {course.icon}
                  </span>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm flex items-center gap-2">
                    <Sparkles size={16} className="text-orange-500" />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-tighter">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="lg:col-span-8 p-8 md:p-14 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h2>
                  
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                    {course.details} Mastery in <span className="text-slate-900 font-bold">{course.tools.join(", ")}</span> and more.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                    {course.syllabus.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-center gap-3 text-slate-600 font-semibold group/item">
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover/item:bg-blue-600 transition-colors">
                          <CheckCircle size={14} className="text-blue-600 group-hover/item:text-white" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-50">
                    <Link href={`/courses/${course.slug}`}>
                      <Button className="bg-slate-900 hover:bg-blue-600 h-14 px-10 rounded-2xl font-bold text-base transition-all group/btn shadow-xl shadow-slate-200">
                        View Full Syllabus 
                        <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button variant="outline" className="h-14 px-8 rounded-2xl font-bold border-2 hover:bg-slate-50 gap-2">
                      <Download size={18} /> Syllabus PDF
                    </Button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}