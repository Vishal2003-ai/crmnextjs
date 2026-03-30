import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#1a2e44] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            Humein khushi hogi aapki career journey mein madad karne mein. 
            Niche diye gaye details ke zariye humse judein.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 1. Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-md bg-orange-50">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-xl text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-orange-600 font-bold uppercase tracking-wider">Call Us</p>
                  <p className="text-lg font-bold text-[#1a2e44]">+91 8923777031</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-blue-50">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-[#1a2e44] p-3 rounded-xl text-white">
                  <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-[#1a2e44] font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-sm md:text-base font-bold text-slate-700 truncate">
                    vishalkushawahetw@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-slate-50">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-slate-600 p-3 rounded-xl text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-slate-700 font-medium">Vijay Nagar, Etawah, UP</p>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 border rounded-2xl border-dashed border-slate-200">
              <h4 className="font-bold flex items-center gap-2 mb-4">
                <Clock className="text-orange-500" size={18} /> Office Hours
              </h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex justify-between"><span>Mon - Sat:</span> <span>08:00 AM - 07:00 PM</span></li>
                <li className="flex justify-between text-red-500 font-medium"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>

          {/* 2. Inquiry Form */}
          <div className="lg:col-span-2 bg-white border rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-[#1a2e44] mb-2 flex items-center gap-2">
               Get in Touch <MessageSquare className="text-orange-500" />
            </h2>
            <p className="text-slate-500 mb-8">Kise course ke baare mein jaanna hai? Humein message bhejein.</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Full Name</label>
                  <Input placeholder="Enter your name" className="bg-slate-50 border-none h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Phone Number</label>
                  <Input placeholder="+91" className="bg-slate-50 border-none h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold">Interested Course</label>
                <Input placeholder="e.g. Tally Prime, Python, O Level" className="bg-slate-50 border-none h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Message</label>
                <Textarea placeholder="Ask your question here..." className="bg-slate-50 border-none min-h-[150px]" />
              </div>

              <Button className="w-full md:w-auto bg-orange-600 hover:bg-[#1a2e44] h-12 px-10 gap-2 text-lg transition-all">
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. Simple Map Section */}
      <section className="w-full h-[400px] bg-slate-100 mt-12 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.421516087532!2d79.006932!3d26.784577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975c6d329188d67%3A0xc666991c49646b9!2sVijay%20Nagar%2C%20Etawah%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}