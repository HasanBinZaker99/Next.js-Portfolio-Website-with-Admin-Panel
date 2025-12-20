import connectToDb from "@/app/database";
import Home from "@/models/Home";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function Post(req) {
  try {
    await connectToDb();
    const extractData = await req.json();
    const saveData = await Home.create(extractData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "something goes wrong, Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "something goes wrong. Please try again",
    });
  }
}
