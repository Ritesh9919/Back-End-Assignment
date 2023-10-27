require("dotenv").config();
const axios = require("axios");

const API_URL = `https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.TABLE_NAME}`;

async function getData() {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  });
  const records = response.data.records;
  records.forEach((record) => {
    console.log(
      `Details: ${record.fields.FirstName} ${record.fields.LastName} ${record.fields.Status}`
    );
  });
}
getData();
