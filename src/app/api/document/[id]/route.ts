import db from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("User Not Authenticated", { status: 401 });
    }

    const { title, description } = await req.json();

    const updateDocument = await db.document.update({
      where: {
        id: params.id,
        userId: userId,
      },
      data: {
        title: title,
        description: description,
      },
    });

    

    return new NextResponse("Succesfully updated data", { status: 200 });
  } catch (error) {
    return new NextResponse("PUT Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("User Not Authenticated", { status: 401 });
    }

    const deleteDocument = await db.document.delete({
      where: {
        id: params.id,
        userId: userId,
      },
    });

    
  } catch (error) {
    return new NextResponse("DELETE Error", { status: 500 });
  }
}