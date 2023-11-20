import {prisma, disconnect} from "@/libs/db";
import { getCurrentUser } from "@/libs/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    if(req.method!=='POST'){
        return NextResponse.json({message: "Invalid request"})
    }
    
    const user = await getCurrentUser();

    try {
        if(!user?.email){
            return NextResponse.json({message: "Not Authenticated"}, {status: 401})
        }
        const { text, userId, postId} = await req.json()

        const comment = await prisma.comment.create({
            data: {
                text,
                userId,
                postId
            }
        })
        if(comment){
           return NextResponse.json({message: "comment created successfully"}, {status: 200})
        }else{
           return NextResponse.json({message: "error creating comment"}, {status: 500})
        }
    } catch (error) {
       return NextResponse.json({message: "error creating comment"}, {status: 500})
    }finally{
        await disconnect()
    }
}