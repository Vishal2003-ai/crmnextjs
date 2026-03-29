import { courseDetails } from "@/data/courses";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  
  // URL name ko format karna (e.g., "web-development" to "Web Development")
  const decodedName = decodeURIComponent(name).replace(/-/g, ' ');
  
  const filteredCourses = courseDetails.filter(
    (c) => c.category?.toLowerCase() === decodedName.toLowerCase()
  );

  if (filteredCourses.length === 0) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1a2e44] py-16 text-white">
        <div className="container mx-auto px-4">
          <Link href="/courses" className="text-orange-400 flex items-center gap-2 mb-6 hover:underline">
            <ArrowLeft size={16} /> Back to All Courses
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold capitalize">
            {decodedName} <span className="text-orange-500 text-2xl">Programs</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Career Mantra offers specialized training in {decodedName} to make you industry-ready with 100% practical exposure.
          </p>
        </div>
      </div>

      {/* Courses List */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {filteredCourses.map((course) => (
            <div key={course.slug} className="group border rounded-3xl overflow-hidden hover:shadow-2xl transition-all border-slate-100 bg-slate-50/30">
              <div className="grid md:grid-cols-3">
                
                {/* Visual Part */}
                <div className="bg-slate-100 flex items-center justify-center p-12 text-8xl group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>

                {/* Content Part */}
                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-4">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">
                      {course.duration} Certification
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-[#1a2e44] mb-4">{course.title}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {course.details} Is course mein hum latest tools jaise **{course.tools.join(", ")}** par focus karenge.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {course.syllabus.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle size={16} className="text-green-500 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link href={`/courses/${course.slug}`}>
                      <Button className="bg-[#1a2e44] hover:bg-orange-600 px-8">Full Course Details</Button>
                    </Link>
                    <Button variant="outline" className="border-orange-500 text-orange-600">Download Syllabus</Button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}