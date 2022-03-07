# Using T-API with Aoi.js
Get more endpoints like this in https://api.willz.repl.co/
----
## Introduction
First of all you need to install our package wrapper to your project by using the next command in the terminal/console:

```
npm i @midowo/t-api.js
```

Now you need to add the following code in your index.js at the bottom of all
```js
// Setup the API
const TAPI = require('@midowo/t-api.js')
const api = new TAPI.All('YOUR_SECRET_API_KEY') // If you don't have one join our Support Server and ask for one!
// Connecting with Aoi.js
const ApiUtil = new TAPI.Util(api)
ApiUtil.connect_aoi(bot, {
  attachments: '$attachmentAPI',
  embeds: '$imageAPI',
  objects: '$requestAPI',
  result: '$getProperty'
})
```

## Functions Usage
You can use these functions in your normal aoi.js bot codes

**Objects**

Usage:
```js
$getProperty[property]
$requestAPI[group(json/anime);endpoint;JSON Params;Error message;Log in console?(true/false)]
```

Example: 
```js
$getProperty[data.translated]
$requestAPI[json;translate;{"text": "Hola mundo!", "source": "auto", "target": "en"};Something went wrong]
```

**Images in attachments**

Usage: `$attachmentAPI[endpoint;JSON Params;name.ext]`

Example: `$attachmentAPI[supreme;{"text": "Discord"};supreme.png]`

**Images in embed images**

Usage: `$imageAPI[index;endpoint;JSON Params;name.ext]`

Example `$imageAPI[1;supreme;{"text": "Discord"};supreme.png]`

## Commands Preview

#### 1. Beautiful
![Beautiful](https://cdn.discordapp.com/attachments/895825126308847616/949838013918224414/canvas.png)
#### 2. Eject
![Eject](https://cdn.discordapp.com/attachments/895825126308847616/949838154079272990/ejected.gif)
#### 3. Gay
![Gay](https://cdn.discordapp.com/attachments/895825126308847616/949838231099293726/canvas.png)
#### 4. Lisa
![Lisa](https://cdn.discordapp.com/attachments/895825126308847616/949838998577229904/canvas.png)
#### 5. Magik
![Magik](https://cdn.discordapp.com/attachments/895825126308847616/949841964885495868/file.png)
#### 6. Santa
![Santa](https://cdn.discordapp.com/attachments/895825126308847616/949842152488308747/canvas.png)
#### 7. Ship
![Ship](https://cdn.discordapp.com/attachments/895825126308847616/949842248219123802/ship.png)
#### 8. Simp
![Simp](https://cdn.discordapp.com/attachments/895825126308847616/949842321359384596/canvas.png)
#### 9. Spotify
![Spotify](https://cdn.discordapp.com/attachments/895825126308847616/949844224562585660/file.png)
#### 10. Sus
![Sus](https://cdn.discordapp.com/attachments/895825126308847616/949845282680631336/file.png)
#### 11. Tweet
![Tweet](https://cdn.discordapp.com/attachments/895825126308847616/949845601481293945/file.png)
#### 12. Ukraine
![Ukraine](https://cdn.discordapp.com/attachments/895825126308847616/949845912606363668/file.png)
