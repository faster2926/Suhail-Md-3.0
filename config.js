const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919899492573";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_30_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM5LFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2LFxuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQjlUbDhCZXdKVk1WUzBIeUo3SjUvNDl3Z05neDNwMldMSUF0aDVQL05SQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiblRLOTRVRERSVmVSUVdBRzBRXzdwUVwiLFxuICBcInBob25lSWRcIjogXCI1NDg4ZTU3YS0yYTM5LTQxZWYtODViNi0yMjg0OGZlYjI4MGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMjE1LFxuICAgICAgMjI3LFxuICAgICAgNjIsXG4gICAgICA4OSxcbiAgICAgIDIxOCxcbiAgICAgIDE3NixcbiAgICAgIDIzOSxcbiAgICAgIDEzMyxcbiAgICAgIDE0OSxcbiAgICAgIDEyLFxuICAgICAgMTg1LFxuICAgICAgMTg1LFxuICAgICAgMjM0LFxuICAgICAgOTgsXG4gICAgICAxODAsXG4gICAgICAxMTksXG4gICAgICAyMjUsXG4gICAgICA3NixcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAyMDUsXG4gICAgICAxMjIsXG4gICAgICA3NCxcbiAgICAgIDY1LFxuICAgICAgMjQyLFxuICAgICAgODUsXG4gICAgICAyNDQsXG4gICAgICA0MyxcbiAgICAgIDE4MixcbiAgICAgIDksXG4gICAgICAyMDksXG4gICAgICA0MixcbiAgICAgIDMsXG4gICAgICAyNDAsXG4gICAgICAxNDgsXG4gICAgICAyNDMsXG4gICAgICAxOTYsXG4gICAgICAxNDYsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVEp5OVFDRUlpeDBNRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlc2enhkVE94eEFCd0dHM3pkRVFDU1BUSjZHRWVoVUZrRDJDYVRiUjZwVFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicW5HQ1RwMEFNMnZUU3RNQTlVekRUcTltTWlROXFsVjI5SVEwNXpzSHhUVnZZanRIaEtST0Q4b09ZRkdHclMwamFBK3lMeHhNUUpNUWNrc3R6ZEdhQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0RWU1dPRXFHV0NPazFIV3F0YU1PQmdnZlBoelNJK2pld1psR0pDK1RrWXhRNXZURXNPUW9JZFgrakJHRFhKV0hndS9GOE1WWDlKMy9NSVQ5cXQ3REE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk4OTk0OTI1NzM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ1MjQ3MzYzODIxNzE2OjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk4OTk0OTI1NzM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4MjQ0NjIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkVqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQOHg4dXZ0NC84dGlTQXMxdHZrTXA3MkNBSDAwUlJ6c0VFdkRTN3NubDBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNDI2OTkyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ4MjQ0NjI1Njc3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
