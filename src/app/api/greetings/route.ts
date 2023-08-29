import { NextRequest, NextResponse } from "next/server"


export const GET = (request: NextRequest)=>{

    const name = request.nextUrl.searchParams.get("name")
    const age = request.nextUrl.searchParams.get("age")

    return NextResponse.json({
        message: `Hello From ${name}`
    })
}

export const POST =async (request:NextRequest) => {

    const body = await request.json()
    return NextResponse.json(body)
}

export const PUT =async (request: NextRequest) => {
    const body = await request.json();

    return NextResponse.json({
        message: "Udated sucessfully"
    })
}

export const DELETE = async (request :NextRequest) =>{
    const body = await request.json()

    return NextResponse.json({
        message:"Data Deleted Succesfull"
    })
}