import { db_connect } from "@/database";
import { BlogModel } from "@/database/models/blogModel";
import { deleteFile } from "@/lib/deleteFile";
import { fileuploader } from "@/lib/fileuploader";
import { verifyToken } from "@/lib/jwt";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
export async function POST(request) {
  const formData = await request.formData();
  await db_connect();
  if (
    !formData.has("title") ||
    !formData.has("content") ||
    !formData.has("image")
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }
  const token = request.cookies.get("token")?.value;
  const user = await verifyToken(token);

  const { image, title, content } = Object.fromEntries(formData);
  console.log("the title is", title, "content is", content);
  try {
    const filename = await fileuploader(image, "blog");

    if (!filename) {
      return NextResponse.json(
        { error: "File upload failed" },
        { status: 500 }
      );
    }

    const feedbackData = await BlogModel.create({
      title,
      content,
      image: filename,
      author: user?.id,
    });

    if (!feedbackData) {
      return NextResponse.json(
        { error: "blog creation failed" },
        { status: 500 }
      );
    }
    const blogs = await BlogModel.find().sort({ createdAt: 1 });
    if (blogs && blogs.length > 5) {
      await BlogModel.findByIdAndDelete(blogs[0]._id);
      deleteFile("blog", blogs[0].image);
    }
    const paths = ["/", "/blogs"];
    paths.forEach((p) => revalidatePath(p));
    return NextResponse.json(feedbackData, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await db_connect();
    const blog = await BlogModel.find().sort({ createdAt: -1 });
    return NextResponse.json(blog, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
