"use server"

import { connectDB } from "@/lib/mongodb";
import { Student } from "@/models/Student";

// Data ke liye Interface define karein
interface EnrollmentData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  course: string;
  address: string;
}

export async function submitEnrollment(data: EnrollmentData) {
  try {
    // 1. Database Connect karein
    await connectDB();
    
    // 2. Data Validation (Check karein ki zaroori cheezein mil rahi hain)
    if (!data.fullName || !data.phoneNumber || !data.course) {
      return { 
        success: false, 
        error: "Missing required fields: Name, Phone, or Course." 
      };
    }

    // 3. New Student Object banayein
    const newStudent = new Student({
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email || "", // Agar email nahi hai toh empty string
      course: data.course,
      address: data.address,
    });

    // 4. Save to MongoDB
    const savedStudent = await newStudent.save();

    if (savedStudent) {
      console.log("✅ Data Saved Successfully in MongoDB");
      return { success: true };
    } else {
      throw new Error("Student could not be saved");
    }

  } catch (error: any) {
    // Error details ko console mein dekhein
    console.error("❌ MongoDB Save Error:", error.message);
    return { 
      success: false, 
      error: error.message || "Database saving failed" 
    };
  }
}