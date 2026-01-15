import { NextResponse } from "next/server";

export async function GET(){
    try {
        return NextResponse.json({
            success: true,
            message: "created ok",
            data: "all data here"
        },{status: 200})
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Faild"
        }, {status: 500})
    }
}