// Google Apps Script — RSVP form handler
//
// Bound to the Google Sheet that stores RSVPs. Deployed as a web app,
// it receives POSTs from the wedding invitation's RSVP form and
// appends one row per submission.
//
// Setup: see ../google-apps-script/README.md for deployment steps.

const HEADERS = [
  'Timestamp',
  'Full Name',
  'Nickname',
  'Attending',
  'Side',
  'Plus One',
  "Plus One's Name",
  'Food Allergy',
  'Message'
];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const p = (e && e.parameter) || {};

  // Honeypot: a hidden field real visitors never fill in. Bots that blindly
  // fill every field will trip it, and we silently drop the submission.
  if (p.website) {
    return jsonResponse({ result: 'ignored' });
  }

  ensureHeaderRow(sheet);

  sheet.appendRow([
    new Date(),
    p.fullName || '',
    p.nickname || '',
    p.attending || '',
    p.side || '',
    p.plusOne || '',
    p.plusOneName || '',
    p.allergy || '',
    p.message || ''
  ]);

  return jsonResponse({ result: 'success' });
}

function ensureHeaderRow(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
