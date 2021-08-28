const { GoogleSpreadsheet } = require("google-spreadsheet");
const dotenv = require("dotenv");

dotenv.config();
const creds = require(process.env.GOOGLE_KEY);

module.exports = {
  async addRow(row) {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(row);
  },
};
