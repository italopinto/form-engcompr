const { GoogleSpreadsheet } = require("google-spreadsheet");
const dotenv = require("dotenv");

const creds = require("../config/client_key.json");
dotenv.config();

module.exports = {
  async addRow(row) {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(row);
  },
};
