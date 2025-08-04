import { db_connect } from "@/database";
import { FeedbackModel } from "@/database/models/feedbackModel";
import { deleteFile } from "@/lib/deleteFile";
import { fileuploader } from "@/lib/fileuploader";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  if (
    !formData.has("clientName") ||
    !formData.has("clientPosition") ||
    !formData.has("rating") ||
    !formData.has("feedback") ||
    !formData.has("image")
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }
  const { clientName, clientPosition, rating, feedback, image } =
    Object.fromEntries(formData);

  try {
    const filename = await fileuploader(image, "feedback");

    if (!filename) {
      return NextResponse.json(
        { error: "File upload failed" },
        { status: 500 }
      );
    }

    await db_connect();
    const feedbackData = await FeedbackModel.create({
      clientName,
      clientPosition,
      rating: parseFloat(rating),
      feedback,
      image: filename,
    });

    if (!feedbackData) {
      return NextResponse.json(
        { error: "Feedback creation failed" },
        { status: 500 }
      );
    }
    const feedbacks = await FeedbackModel.find().sort({ createdAt: 1 });
    console.log(feedbacks.length);
    if (feedbacks && feedbacks.length > 10) {
      await FeedbackModel.findByIdAndDelete(feedbacks[0]._id);
      deleteFile("feedback", feedbacks[0].image);
    }
    const paths = ["/", "/services"];
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
    const feedbackData = await FeedbackModel.find()
      .sort({ createdAt: -1 })
      .limit(10);
    if (!feedbackData) {
      return NextResponse.json(
        { error: "Feedback fetch failed" },
        { status: 500 }
      );
    }

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
