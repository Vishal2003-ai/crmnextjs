"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, Send, CheckCircle2 } from "lucide-react";

export default function EnrollPage() {
  const [submitted, setSubmitted] = useState(false);

  // Form submission handler (Frontend Logic)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan hum Database API call karenge (Step 2 mein dekhenge)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4">
        <Card className="max-w-md w-full text-center p-8 border-green-100 bg-green-50">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900">Application Submitted!</h2>
          <p className="text-slate-600 mt-2">
            Thank you for choosing Career Mantra. Humari team aapse jald hi **8923777031** par sampark karegi.
          </p>
          <Button className="mt-6 bg-[#1a2e44]" onClick={() => window.location.href = '/'}>
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-none">
            <CardHeader className="bg-[#1a2e44] text-white rounded-t-xl p-8 md:p-12 text-center">
              <GraduationCap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold">Admission Form 2026</CardTitle>
              <CardDescription className="text-slate-300 text-base">
                Career Mantra Computer Center, Vijay Nagar, Etawah
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name *</label>
                    <Input required placeholder="Student's Name" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                    <Input required type="tel" placeholder="+91 00000 00000" className="h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <Input type="email" placeholder="example@gmail.com" className="h-12" />
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Select Course *</label>
                  <Select required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Chose your course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adca">ADCA (1 Year)</SelectItem>
                      <SelectItem value="tally">Tally Prime with GST</SelectItem>
                      <SelectItem value="python">Python & Django</SelectItem>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="olevel">O Level (NIELIT)</SelectItem>
                      <SelectItem value="ccc">CCC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Address *</label>
                  <Textarea required placeholder="Enter your full address in Etawah" className="min-h-[100px]" />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-[#1a2e44] h-14 text-lg font-bold shadow-lg transition-all gap-2">
                    Submit Application <Send size={18} />
                  </Button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    By submitting, you agree to receive a callback from Career Mantra.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}