// generate a new route file for leads on a next.js project using app router syntax
export const dynamic = 'force-dynamic'
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the request body
        console.log(body);
        return NextResponse.json(
            body    
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {"error": "An error occurred"}, 
            { status: 500 }
        );
    }
}

export async function GET(){
    return NextResponse.json(
        {"message": "GET leads"}    
    )
}