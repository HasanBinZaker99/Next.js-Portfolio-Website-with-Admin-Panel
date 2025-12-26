import connectToDb from "@/app/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDb();
    const extractData = await req.json();
    const {
      _id,
      aboutme,
      noofprojects,
      yearofexperience,
      noofclients,
      skills,
    } = extractData;

    const updateData = await About.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        aboutme,
        noofprojects,
        yearofexperience,
        noofclients,
        skills,
      },
      { new: true }
    );
    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "Data Updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something goes wrong, Please try again",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something goes wrong, Please try again",
    });
  }
}
