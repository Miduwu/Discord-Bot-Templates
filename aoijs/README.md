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
  objects: '$requestAPI'
})
```

## Functions Usage
You can use these functions in your normal aoi.js bot codes

**Objects**

Usage: `$requestAPI[group(json/anime);endpoint;JSON Params;property;Error message;Log in console?(true/false)]`

Example: `$requestAPI[json;translate;{"text": "Hola mundo!", "source": "auto", "target": "en"};data.translated;Something went wrong]`

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
