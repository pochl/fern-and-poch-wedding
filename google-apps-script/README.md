# RSVP → Google Sheet setup

One-time setup to make the RSVP form write to a Google Sheet instead of
opening an email draft.

## 1. Create the Sheet

1. Go to [sheets.google.com](https://sheets.google.com) → **Blank spreadsheet**.
2. Rename it (top-left) to something like **Fern & Poch RSVPs**.
3. Leave it otherwise empty — the script fills in the header row itself on
   the first submission.

## 2. Add the script

1. In the sheet, go to **Extensions → Apps Script**. This opens a script
   editor already bound to this sheet.
2. Delete the placeholder `function myFunction() {...}` code.
3. Paste in the full contents of [`Code.gs`](Code.gs) from this folder.
4. Click the save icon (or `Cmd+S`). Name the project something like
   **RSVP Handler** when prompted.

## 3. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → choose **Web app**.
3. Fill in:
   - **Description**: `RSVP form handler`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`  
     (must be "Anyone", not "Anyone with a Google account" — guests won't
     be signed into any particular Google account)
4. Click **Deploy**.
5. Google will show an "Authorize access" prompt — this is your own script
   asking to edit your own sheet, so it's expected. Click through:
   **Authorize access → (pick your Google account) → Advanced → Go to RSVP
   Handler (unsafe) → Allow**.
   ("Unsafe" here just means the script isn't published/verified by Google
   — normal for a personal script only you use.)
6. Copy the **Web app URL** shown (ends in `/exec`). Send this to me — it's
   what the invitation site will POST RSVP submissions to.

## Updating the script later

If you or I change `Code.gs`, edits alone don't affect the live URL. In
the Apps Script editor: **Deploy → Manage deployments → edit (pencil icon)
→ Version: New version → Deploy**. The `/exec` URL stays the same.

## Viewing responses

Just open the Google Sheet — every RSVP appears as a new row, with a
timestamp and each field from the form.
