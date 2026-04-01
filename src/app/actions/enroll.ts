// app/actions/enroll.ts
"use server"

import { connectDB } from "@/lib/mongodb";
import { Student } from "@/models/Student";

export async function submitEnrollment(formData: any) {
  try {
    await connectDB();
    
    const newStudent = new Student({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      course: formData.course,
      address: formData.address,
    });

    await newStudent.save();
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Database saving failed" };
  }
}