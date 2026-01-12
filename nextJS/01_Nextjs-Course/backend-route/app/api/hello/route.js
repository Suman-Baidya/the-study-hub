import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 28,
    role: "Admin"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 34,
    role: "Editor"
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    age: 22,
    role: "Viewer"
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana.prince@example.com",
    age: 30,
    role: "Moderator"
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    age: 40,
    role: "SuperAdmin"
  }
];

export async function GET(request){
    try {
        return NextResponse.json({
            success: true,
            data: users,
            total: users.length
        }, {status: 200})
    } catch(error){
        return NextResponse.json({
            success: false,
            error: "Failed to get users."
        }, {status: 500})
    }
}