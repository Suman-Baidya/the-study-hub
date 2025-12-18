import dbConnect from "@/lib/mongodb";
import Student from "@/models/Student";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await dbConnect();
  const data = await req.json();
  const student = await Student.findByIdAndUpdate(
    params.id,
    data,
    { new: true }
  );
  return NextResponse.json(student);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  await Student.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Deleted" });
}
