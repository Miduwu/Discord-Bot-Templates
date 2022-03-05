module.exports = {
    name: 'spotify',
    code: `
    $attachmentAPI[spotify;{
        "image": "$authorAvatar",
        "author": "$replaceTextWithRegex[$username;/[^a-zA-Z]/;g;]",
        "album": "$replaceTextWithRegex[$serverName;/[^a-zA-Z]/;g;]",
        "title": "$replaceTextWithRegex[$message;/[^a-zA-Z]/;g;]"
    }]
    `
}