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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_28_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MixcbiAgICAgICAgMTAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDUyLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTGpYMDJ5U3haYjEzTWxoMW5KMHBmRnlwZG42aENyQVpJU0tqczY4cFBXbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ3FsZ09IbWhSS0txQlJyUmxsMk0zZ1wiLFxuICBcInBob25lSWRcIjogXCJhYTQyZTEwZC0xODYwLTQwNDktYmJiMC02NjliYWI3YzY4OTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICA1MixcbiAgICAgIDc1LFxuICAgICAgOTgsXG4gICAgICAzNSxcbiAgICAgIDIwNSxcbiAgICAgIDIwMixcbiAgICAgIDk4LFxuICAgICAgOSxcbiAgICAgIDQ0LFxuICAgICAgMSxcbiAgICAgIDIzMyxcbiAgICAgIDI1MSxcbiAgICAgIDIzMixcbiAgICAgIDEzOSxcbiAgICAgIDE0MCxcbiAgICAgIDIxNixcbiAgICAgIDY3LFxuICAgICAgMTE0LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAxNTIsXG4gICAgICAxODUsXG4gICAgICAxNDYsXG4gICAgICA0NyxcbiAgICAgIDQwLFxuICAgICAgMjM4LFxuICAgICAgMTQ1LFxuICAgICAgMjgsXG4gICAgICAxMTIsXG4gICAgICAxNDEsXG4gICAgICAxODYsXG4gICAgICAxNDcsXG4gICAgICA3OSxcbiAgICAgIDE4MixcbiAgICAgIDEyNixcbiAgICAgIDIyNSxcbiAgICAgIDE5OSxcbiAgICAgIDExMixcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGJKeTlRQ0VMaUp3OElHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXNnp4ZFRPeHhBQndHRzN6ZEVRQ1NQVEo2R0VlaFVGa0QyQ2FUYlI2cFRZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkgvRGNYZGg0U2IwTUxUbWtkL2RycjMyaWdaZDI1ZTFKY3hkVnNyUDBvZDBna2RQUEJlNVphVkpQL3NnNk9tQURqbjRzSldkTkVhaU1WeEdaZERpT0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5iQzJhRmJ2V1hYVjhPc3hGWkFISm1oYnN1Y055VTVEOVdnS0lxRnlJTmZoUlJpeWlsNmZyMkx6c1lBSW93TG5uRWd3THo3MXVVUUpsR3IrZmRtL2l3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5ODk5NDkyNTczOjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDUyNDczNjM4MjE3MTY6NDRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk4OTk0OTI1NzM6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MDEyMzcwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFDUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUNQLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVBBWTZnaXIrSk5LNWNhNmQrd0RwYnl1ZDFOZTJTN1dhSUVxazd4R292az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTQyNjk5NDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFDUS5qc29uIjogIntcImtleURhdGFcIjpcIlJkalFwTVJqdWU1K09XN3VjTlpXczMyN1VzVWN3Zk5lMENYdUhNNDhWd0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MjY5OTQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ5OTgzOTk4ODEyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUNSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK09hTXltazg2VWpkK1llWUJrbURFQ09HbzRBc0VXRXQzT2JvYTlabEhtaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTQyNjk5NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDAwMTc5NTIyMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝐒𝚫𝐂𝚮𝚰𝚴🍁",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "𝐒𝚫𝐂𝚮𝚰𝚴🍁:Shy<3",


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
