import { NextResponse } from "next/server"
import { users } from "../route"

export async function GET(request, { params }){
    const {id} = await params;
    const userId = parseInt(id);

    const user = users.find(u=>u.id === userId);

    try {
        return NextResponse.json({
            success: true,
            data: user,
        }, {status: 200})
    } catch(error){
        return NextResponse.json({
            success: false,
            error: "Failed to get users."
        }, {status: 500})
    }
}