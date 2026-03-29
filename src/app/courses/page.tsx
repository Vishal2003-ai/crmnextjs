import { courseDetails } from "@/data/courses";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, GraduationCap, ArrowRight } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Header Section */}
      <div className="bg-[#1a2e44] text-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our <span className="text-orange-500">Professional</span> Courses
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Career Mantra offers industry-aligned programs to help you master the most in-demand technical skills.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseDetails.map((course) => (
                  <Card 
                    key={course.slug} 
                    className="group flex flex-col hover:shadow-2xl transition-all duration-300 border-none shadow-md overflow-hidden"
                  >
                    {/* Decorative Top Bar */}
                    <div className="h-2 w-full bg-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 text-3xl">
                          <GraduationCap size={28} />
                        </div>
                        <Badge variant="secondary" className="bg-slate-100 text-[#1a2e44] font-medium">
                          <Clock size={12} className="mr-1" /> {course.duration}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-[#1a2e44] group-hover:text-orange-600 transition-colors">
                        {course.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        Master industry-standard tools and techniques with our expert-led {course.title} course.
                      </p>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Link href={`/courses/${course.slug}`} className="w-full">
                        <Button className="w-full bg-[#1a2e44] hover:bg-orange-600 group-hover:gap-3 transition-all">
                          View Details <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
        </div>
      </div>
    </div>
  );
}