import { courseDetails } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  BarChart, 
  Wrench, 
  Briefcase, 
  ChevronRight 
} from "lucide-react";
import { notFound } from "next/navigation";

export default async function DetailedCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseDetails.find((c) => c.slug === slug);

  if (!course) return notFound();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Header Section */}
      <section className="bg-[#1a2e44] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-orange-500 hover:bg-orange-600 mb-4 px-4 py-1">Career Mantra Certified</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2"><Clock size={18} className="text-orange-400" /> {course.duration}</div>
            <div className="flex items-center gap-2"><BarChart size={18} className="text-orange-400" /> {course.level}</div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12 grid lg:grid-cols-3 gap-12">
        
        {/* Left Side: Course Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Syllabus Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1a2e44] mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
              Course Syllabus
            </h2>
            <div className="grid gap-4">
              {course.syllabus.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100 group hover:border-orange-200 transition-colors">
                  <span className="bg-[#1a2e44] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools Covered */}
          <section>
            <h2 className="text-2xl font-bold text-[#1a2e44] mb-6 flex items-center gap-2">
              <Wrench className="text-orange-500" /> Tools You'll Master
            </h2>
            <div className="flex flex-wrap gap-3">
              {course.tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="px-4 py-2 text-sm bg-slate-100 text-[#1a2e44]">
                  {tool}
                </Badge>
              ))}
            </div>
          </section>

          {/* Career Opportunities */}
          <section className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
            <h2 className="text-2xl font-bold text-[#1a2e44] mb-6 flex items-center gap-2">
              <Briefcase className="text-orange-500" /> Future Career Options
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {course.jobRoles.map((role) => (
                <li key={role} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle size={16} className="text-green-600" /> {role}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Side: Sidebar / Enrollment */}
        <div className="space-y-6">
          <div className="sticky top-24 border p-8 rounded-3xl shadow-xl bg-white space-y-6 border-slate-100">
            <h3 className="text-xl font-bold text-[#1a2e44]">Ready to Start?</h3>
            <p className="text-slate-500 text-sm">Join Career Mantra and transform your future with 100% Practical Training.</p>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm py-2 border-b">
                <span>Batch Mode</span>
                <span className="font-semibold">Offline / Hybrid</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b">
                <span>Next Batch</span>
                <span className="font-semibold text-orange-600">Starting Monday</span>
              </div>
            </div>

            <Button className="w-full bg-[#1a2e44] hover:bg-orange-600 h-12 text-lg">
              Book Free Demo
            </Button>
            <p className="text-[11px] text-center text-slate-400 font-medium tracking-tight">
              Get Certificate upon successful completion
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}