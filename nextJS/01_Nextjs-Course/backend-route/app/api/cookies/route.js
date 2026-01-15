import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request){
    // Read Cookies form request
    // const theme = request.cookies.get('theme')

    // console.log(theme)

    const cookieStore = await cookies()
    // const resultsPerPage = cookieStore.get("resultsPerPage")

    // console.log("Cookies", resultsPerPage)


    // return new Response("Setting cookies", {
    //     headers:{
    //         // "Set-Cookie": "theme=dark"
    //         "Set-Cookie": "resultsPerPage=20"
    //     }
    // })

    cookieStore.set("score", "100")

    
    
    return NextResponse.json({message: "Cookie set!"})


}