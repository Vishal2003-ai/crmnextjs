// models/Student.ts
import mongoose, { Schema, model, models } from "mongoose";

const StudentSchema = new Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String },
  course: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Student = models.Student || model("Student", StudentSchema);