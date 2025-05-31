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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_05_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlU2JleFdoRjFEQjRMdHJYTElIUXJtMXVmSkQwellIR1JxdXdQT2p3eUtZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyaEtWWndfNVMtVzdEUHlyLVdWMGRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlNDU2ZTQ4LTNjNTAtNDk5ZC04ODFjLTk3N2I4MDdhNzEzZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgNzgsXG4gICAgICAxNTAsXG4gICAgICAyMDUsXG4gICAgICAxNSxcbiAgICAgIDM1LFxuICAgICAgNjAsXG4gICAgICAxOTIsXG4gICAgICAxNzEsXG4gICAgICAxNjEsXG4gICAgICA5NSxcbiAgICAgIDE1OSxcbiAgICAgIDIzNCxcbiAgICAgIDUsXG4gICAgICAxODQsXG4gICAgICA2OSxcbiAgICAgIDEyNCxcbiAgICAgIDQ4LFxuICAgICAgMjA5LFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgNzYsXG4gICAgICAyMTEsXG4gICAgICAxOSxcbiAgICAgIDE2MyxcbiAgICAgIDIyOCxcbiAgICAgIDE2MCxcbiAgICAgIDI1NCxcbiAgICAgIDIwNCxcbiAgICAgIDE2OSxcbiAgICAgIDIzNCxcbiAgICAgIDE0MyxcbiAgICAgIDMyLFxuICAgICAgNzAsXG4gICAgICAxOSxcbiAgICAgIDEwLFxuICAgICAgMTg2LFxuICAgICAgMjI4LFxuICAgICAgMjE0LFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pKeTlRQ0VMSHc2c0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXNnp4ZFRPeHhBQndHRzN6ZEVRQ1NQVEo2R0VlaFVGa0QyQ2FUYlI2cFRZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktUYjkxYWhMS3FScWVrRjAyT0htZHd3RHJ6cENzOStoZk9xMkVuUG1OYTVQZjhxR2h4bmtsSHYvL1MvZlVKcWh3Y0RmK2xiOC9TdEl5LzdMZDRwL0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlB0Um53TkNyaW0rSURldlBGSG55WDRMQnpPVHZWcHFTdmdhUld4MG8wcGZQRmN2NHpNbXpTaE9FOWIrRzlJNmNHYlBGdFJuWXoreEE0R0J3YjBFRmlRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5ODk5NDkyNTczOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDUyNDczNjM4MjE3MTY6MTRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk4OTk0OTI1NzM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODY3ODcwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZFcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkVqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUDh4OHV2dDQvOHRpU0FzMXR2a01wNzJDQUgwMFJSenNFRXZEUzdzbmwwRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTQyNjk5MjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZFay5qc29uIjogIntcImtleURhdGFcIjpcImlZZlJ2Njdrbnp6OVR2Z0FDUVVWc2RiVnpKQ0hXd2F1Yk10UjV0bnZZUVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MjY5OTI0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwUWhYWHlPdnJSMFlnTUZpd1d1bGM3TVhjR0xtbTNGa2pxMzc2UExlTjVFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNDI2OTkyNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODMxNzczOTAxMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZFbS5qc29uIjogIntcImtleURhdGFcIjpcIlpPem1WWmdwUEp2dEdzaWhYMk5xWk1xbUx1ZStublpsLzN1bmZ1SE1OdWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MjY5OTI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRW4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqR2E5aTBZR0w0TDZSbnJMeE1URzI3ZnZwcFFrZEEzczFTd2ZlTm5mYzdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNDI2OTkyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODM2NTAwMzYwNFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZFby5qc29uIjogIntcImtleURhdGFcIjpcIkxNOWt3VmFvRDFEMWQzblhtQ3hkSkt3KzhZRExZeWN6aGZSaXliL1NKZE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MjY5OTI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRXAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsRHJ4WkVMd2NaS0RXQk1kN2cvVEJQc3B2MUJXWDVDcUFtRVRxUnVnUWxJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNDI2OTkyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODM2NjU1NjM3NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZFcS5qc29uIjogIntcImtleURhdGFcIjpcIm1XLzZ1SHhFOTdyd1RBT01kYXdoTWZzQjg2QUxnMlhFWkx3Unp5QkMwbEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MjY5OTI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRXIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOL0dZZGMzWlBhdFNReTIrMmJ4M245d3prSCt5U3N1TXpMUkdMNVhJUmhFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNDI2OTkyNyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkVzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaTR6RjlhczUyczdOY01tZk1NdkRIOElTY1diNHlvUXM4ZGFpK0x4MnRzZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTQyNjk5MjcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg2NzI3Mjg4NTBcIn0iCn0="  // PUT your SESSION_ID 


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
