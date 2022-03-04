const aoi = require('aoi.js')
const bot = new aoi.Bot({
    token: "TOKEN",
    prefix: 'aoi' ,
    intents:"all",
    database:{
        type:"default",
        path:"./database/",
        tables:["main"],
        promisify:false  
    },
    cache:{
        users:null,
        messages:200 
    },
    debugs:{
       interpreter:true 
    },
    respondOnEdit:{
        commands:true 
    },
   suppressAllErrors: false,
errorMessage:["","{newEmbed:{title:Something went wrong!}{description:An unknown error has logged.}{color:#8700ff}}", ""] //["content","embeds","components","files"]
    })

// Events 
bot.onMessage()
bot.onInteractionCreate()

//command loader 
const loader = new aoi.LoadCommands(bot,true)
loader.setColors({
    walking:["blink","dim","fgWhite"],
    failedWalking:{
        name:["bright","fgYellow","underline"],

        text:["bright","fgRed"]
    },
    typeError:{
        command:["bright","fgYellow"],
        type:["fgYellow"],
        text:["bright","fgRed"]
    },
    failLoad:{
        command:["bright","fgMagenta"],
        type:["fgRed"],
        text:["bright","fgRed"],
        },
    loaded:{
           command:["bright","fgCyan"],
           type:["bright","fgBlue"],
           text:["bright","fgGreen"]
           },

    })
loader.load(bot.cmd,"./commands/",true)

// Setup the API
const TAPI = require('@midowo/t-api.js')
const api = new TAPI.All('ilovemidnightuwu')
// Connect the API with our bot
const ApiUtil = new TAPI.Util(api)
ApiUtil.connect_aoi(bot, {
    embeds: "$setImage",
    attachments: "$sendAttachment",
    objects: "$requestAPI"
})
