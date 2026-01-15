import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request){
    // Access request headers

    // const requestHeaders = new Headers(request.headers);    
    // const authHeader = requestHeaders.get("Authorization")
    // console.log("Authorization: ", authHeader)

    const headerList = await headers()
    const authHeader = headerList.get("Authorization")
    console.log("Authorization: ", authHeader)

    // return new Response("<h1> Profile Api Data </h1>", {
    //     headers:{
    //         "Content-Type":"text/html",
    //         "X-Custom-Header": "Next.js Learning"
    //     }
    // })

    const response = NextResponse.json({message: "Hello with headers"})

    response.headers.set("X-Powered-By-Suman", "Next.js 15");
    response.headers.set("Cache-Control", "no-store");

    return response;
}