module.exports = {
    name: 'translate',
    aliases: ["tr", "translator"],
    code: `
    $color[1;RANDOM]
    $title[1;From $getProperty[data.source] to $getProperty[data.target]]
    $description[1;$getProperty[data.translated]]
    $requestAPI[json;translate;{"text": "$messageSlice[1]", "source": "auto", "target": "$message[1]"};Sorry but i can't translate that]
    `
}
