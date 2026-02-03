import connectToDb from "@/app/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    console.log("Delete request received");
    await connectToDb();
    const { id } = await req.json();
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({
        success: false,
        message: "Invalid Id Provided",
      });
    }
    const result = await Education.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({
        success: true,
        message: "Education Deleted Successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Education not found or Error",
      });
    }
  } catch (e) {
    console.log(e);
  }
}
