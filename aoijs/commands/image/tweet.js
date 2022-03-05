module.exports = {
    name: 'supreme',
    code: `
    $color[1;RANDOM]
    $description[1;$message]
    $imageAPI[1;tweet;{
        "text": "$message",
        "image": "$authorAvatar",
        "username": "$replaceTextWithRegex[$username;/[^a-zA-Z]/;g;]"
    }]
    `
  }