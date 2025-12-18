import dbConnect from "@/lib/db";
import Student from "@/models/Student";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const students = await Student.find();
  return NextResponse.json(students);
}

export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  const student = await Student.create(data);
  return NextResponse.json(student);
}
