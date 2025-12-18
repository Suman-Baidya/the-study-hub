import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    course: String,
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
