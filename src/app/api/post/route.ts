import prisma from "@/libs/db";
import { getCurrentUser } from "@/libs/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:Request){
    if(req.method!=='POST'){
        return NextResponse.json({message: "Invalid request"})
    }

    const user = await getCurrentUser();
   try {
        if(!user?.email){
            return NextResponse.json({message: "Not Authenticated"}, {status: 401});
        }
        
        const userData = await prisma.user.findUnique({
            where: {email: user.email}
        })
        const userId = userData?.id
        const {title, body} = await req.json();

        const createdPost = await prisma.post.create({
            data: {title, body, authorId: userId},
        })
        return NextResponse.json({message:"Post created successfully", userData, createdPost}, {status: 200})
   } catch (error) {
        NextResponse.json({message: "Error creating post"}, {status: 500})
   }
} 