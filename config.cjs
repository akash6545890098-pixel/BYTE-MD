const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JmakVvaEIxWGR3WjFmYzVML20raVVqVy93UVcra3hMbnIyRVZvWCtXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlo4dzhTMEV1VkZOZmhrMnF4bUJzY1l1dXhMTm5nNHJzazRkUm9wMkl6OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSS9pSkhHTlFtTFExUmppa1dhRDNRbmxRVkJGbCt2WU5PemJLaFFpNG5ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFM2NwQ3o3ZTcyYXk1S0l1V2dyVy93MXgwZE5SdU9NdDhiOEVBZElnVndZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhCMFFJYmRucllEWVd1T2RaeFpEd3Urdk9NeG9Fb3lrVlpieG5HZGowWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRkTVZ5ZXdKT1JkcVFXK0RkUjNXdUtVb3ZYakFjUjUyVVUvYitYVlRUd1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFVQnBCb0lNNWRmMmhJbndiZnlyNlA1RVlVZCtQQTdtd2xzSzNSYklXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazQyL0ZJbWFwc295UzBWRkJ5N3JGU1l2K3Y4dmZDOU8yejhUV2ZCTUNpaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNxWldWMytEQTN3N29CaDRCSWRYWVRLUXg4V0VRRCtRditjTThLM2wyT1F1amFBcnlLbldxM21yNkU3SExQeC9vL0V6UGdSRW9UN0JZOWYyVWpjdUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IkhhN2hacy9PRE5PaWV1dzZQVjlhbkJaVEJtMkhuUXRaclpDT2dtVEVFQ1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkpCTzBVMTJGIiwibWUiOnsiaWQiOiI5MTkwNjQ1NjA4NDA6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBa2FzaCIsImxpZCI6IjcwMjUzMTk5NTAzMzc4OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTHZ4TWtGRVA2OHg5QUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBUFlicjBQUHdwR091MWJWdmVWbjVhZ0YvMmJRbVIvVXNzK1U3M0FuZXc0PSIsImFjY291bnRTaWduYXR1cmUiOiJ1OEtsc3hLZ0s1YWIzakFnT214ZlJSSlhuSFBGS3oyK25CSDBYd3lEaWYzUlRyRGxXdTZiRllIaEU4NnhwUXJSNGIvSks1Wi8xdXRoZ3JDUHZEZGFDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiajJwbndqTTVJN25PT1Jod2QyKy9oTVFGQ0FDcXYzbTZaZFc1TXp6YzR4TW9GaWRCc2NhOXRKYkdaNlcrU3l1c01DODlPeHVhRWtYbXE5dlZMbExZQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTkwNjQ1NjA4NDA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRRDJHNjlEejhLUmpydFcxYjNsWitXb0JmOW0wSmtmMUxMUGxPOXdKM3NPIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFFnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Nzk1NTU5NzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1J2In0=",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "919064560840",
  "OWNER_NAME": process.env.OWNER_NAME || "AKASH",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'false',
  "PRESENCE": process.env.PRESENCE || "null",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'false',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'false',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'false',
  "AUTO_REACT": process.env.AUTO_REACT === 'false',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "919064560840",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'false',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'false'
};
