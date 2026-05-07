"use client";

import { courseDetails } from "@/data/courses";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, GraduationCap, ArrowRight, Star, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    // 'pt-16 md:pt-20' header gap ke liye add kiya hai
    <div className="min-h-screen bg-white pb-20 pt-16 md:pt-20">
      
      {/* --- HERO SECTION FOR COURSES --- */}
      <div className="relative bg-slate-950 py-20 lg:py-28 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full -ml-20 -mb-20" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1">
              Industry Ready Programs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Master New <span className="text-blue-500">Skills</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Career Mantra provides the most advanced technical training in Etawah. 
              Choose a course and start your professional journey today.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- COURSES GRID --- */}
      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {courseDetails.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="group h-full flex flex-col hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 rounded-[2.5rem] overflow-hidden bg-white"
              >
                {/* Image Placeholder / Icon Section */}
                <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <GraduationCap size={60} className="text-slate-300 group-hover:text-blue-500 transition-all duration-500 group-hover:scale-110" />
                  <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 border-none shadow-sm rounded-full">
                    <Star size={12} className="mr-1 fill-orange-400 text-orange-400" /> 4.9
                  </Badge>
                </div>

                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="rounded-full border-slate-200 text-slate-500 font-bold px-3">
                      <Clock size={12} className="mr-1" /> {course.duration}
                    </Badge>
                    <Badge variant="outline" className="rounded-full border-slate-200 text-slate-500 font-bold px-3">
                      <BookOpen size={12} className="mr-1" /> Beginner friendly
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-8 flex-grow">
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Master industry-standard tools and techniques with our professional training program.
                  </p>
                </CardContent>

                <CardFooter className="p-8 pt-4">
                  <Link href={`/courses/${course.slug}`} className="w-full">
                    <Button className="w-full h-14 bg-slate-900 hover:bg-blue-600 rounded-2xl font-bold text-base transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-200">
                      View Syllabus <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}