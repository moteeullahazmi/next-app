import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
    // req.body?

    const data = await req.json();
    
    
   await prismaClient.user.create({
        
        data:{
            email: data.username,
            password: data.password
        }
    })


    return NextResponse.json({
        message: "You have been signed up"
    })
}

export async function GET(){
    return NextResponse.json({
        message: "Great"
    })
}