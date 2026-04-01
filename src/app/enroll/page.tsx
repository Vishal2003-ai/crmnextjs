"use client";

import React, { useState } from 'react';
import { submitEnrollment } from "@/app/actions/enroll"; // Server action import karein
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function EnrollPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      phoneNumber: formData.get("phoneNumber"),
      email: formData.get("email"),
      course: formData.get("course"), // Select component ke liye handle karna hoga
      address: formData.get("address"),
    };

    // Note: shadcn Select ke liye humein state use karni padti hai ya hidden input
    const result = await submitEnrollment(data);

    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4">
        <Card className="max-w-md w-full text-center p-8 border-green-100 bg-green-50 shadow-xl rounded-[2rem]">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Application Received!</h2>
          <p className="text-slate-600 mt-2">
            Career Mantra team will contact you shortly. Keep your phone reachable.
          </p>
          <Button className="mt-8 bg-indigo-600 w-full rounded-full h-12" onClick={() => window.location.href = '/'}>
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-2xl border-none rounded-[3rem] overflow-hidden">
          <CardHeader className="bg-slate-900 text-white p-10 md:p-14 text-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
            <GraduationCap className="w-14 h-14 text-blue-500 mx-auto mb-6" />
            <CardTitle className="text-4xl font-black tracking-tight">Admission 2026</CardTitle>
            <CardDescription className="text-slate-400 text-lg mt-2">
              Career Mantra Education Center • Etawah Campus
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8 md:p-14 bg-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <Input name="fullName" required placeholder="John Doe" className="h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">WhatsApp Number</label>
                  <Input name="phoneNumber" required type="tel" placeholder="+91" className="h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email (Optional)</label>
                <Input name="email" type="email" placeholder="john@example.com" className="h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500" />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Target Course</label>
                {/* Custom hidden input for Shadcn Select value */}
                <Select name="course" required>
                  <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-none">
                    <SelectValue placeholder="Select Specialization" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-slate-100 shadow-xl">
                    <SelectItem value="adca">ADCA (Professional Diploma)</SelectItem>
                    <SelectItem value="web">Full Stack Web Development</SelectItem>
                    <SelectItem value="tally">Tally Prime + GST</SelectItem>
                    <SelectItem value="olevel">NIELIT O Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Current Address</label>
                <Textarea name="address" required placeholder="Full residential address in Etawah..." className="min-h-[120px] rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500" />
              </div>

              <Button 
                disabled={loading}
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 h-16 text-xl font-bold rounded-2xl shadow-xl shadow-blue-200 transition-all gap-3"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Secure My Seat"} <Send size={20} />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}