import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> } // Define params as a Promise
) {
  try {
    // 1. Await the params object
    const { id } = await params;

    // 2. Fetch the post
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    })

    // 3. Handle 404 if post doesn't exist
    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    // 4. Basic error handling for server/DB issues
    return NextResponse.json({ message: 'Internal Server Error ', error }, { status: 500 })
  }
}


export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const postId = Number(id);

    // 1. Basic Validation: Ensure the ID is a valid number
    if (isNaN(postId)) {
      return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    // 2. Execute the Delete
    // Note: This will throw an error if the record doesn't exist
    const deletedPost = await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json({ message: "Post deleted successfully", deletedPost });
  } catch (error: any) {
    // 3. Handle Prisma-specific "Record not found" error (P2025)
    if (error.code === 'P2025') {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const postId = Number(id);

    // 1. Parse the request body
    const body = await req.json();
    const { title, content } = body;

    // 2. Update the record
    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title: title,
        content: content,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error: any) {
    // Handle "Record not found" error
    if (error.code === 'P2025') {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Error updating post", error: error.message },
      { status: 500 }
    );
  }
}


