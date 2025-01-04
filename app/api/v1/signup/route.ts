import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest){
    // req.body
    const data = await req.json();
      //body extract way

    console.log(data)

    await prisma.user.create({
        data:{
            email: data.email,
            password: data.password
        }
    })
    return NextResponse.json({
        message: "You have singed up"
    })
}