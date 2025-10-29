import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"

export async function GET() {
  try {
    // Read the PDF file from the public directory
    const pdfPath = join(process.cwd(), "public", "Resume.pdf")
    const pdfBuffer = await readFile(pdfPath)

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Umar_Ghani_Resume.pdf"',
      },
    })
  } catch (error) {
    return new NextResponse("Resume not found", { status: 404 })
  }
}
