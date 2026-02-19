import { checkDatabaseConnection } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const isConnected = await checkDatabaseConnection();

    if(!isConnected) {
        return NextResponse.json(
            { status: "error", message: "Database connection failed" },
            { status: 500 }
        )
    }

    return NextResponse.json(
        { status: "success", message: "Database connection succeeded" },
        { status: 200 }
    );
}