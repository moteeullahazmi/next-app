import {  NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name: "Moteeullah GET",
        "email" : "azmiazmi@gmail.com"
    })
}

export function POST(){
    return NextResponse.json({
        name: "Moteeullah POST",
        "email" : "azmiazmi@gmail.com"
    })
}
export function PUT(){
    return NextResponse.json({
        name: "Moteeullah PUT",
        "email" : "azmiazmi@gmail.com"
    })
}export function DELETE(){
    return NextResponse.json({
        name: "Moteeullah DELETE",
        "email" : "azmiazmi@gmail.com"
    })
}