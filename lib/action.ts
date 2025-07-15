import { google } from "googleapis";

export async function appendToGoogleSheet(data: any) {
  try {
    const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    if (!key) throw new Error("Key not found");
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: key.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const rowData = [
      data.first_name,
      data.last_name,
      data.email,
      data.phone,
      data.message,
      new Date().toISOString(),
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: process.env.GOOGLE_SHEETS_RANGE || "A1:F1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error appending to Google Sheet:", error);
    return null; 
  }
}
