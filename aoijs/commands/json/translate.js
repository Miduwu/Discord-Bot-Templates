module.exports = {
    name: 'translate',
    aliases: ["tr", "translator"],
    code: `
    $color[1;RANDOM]
    $description[1;$requestAPI[json;translate;{"text": "$messageSlice[1]", "source": "auto", "target": "$message[1]"};data.translated;Sorry but i can't translate that]]
    `
}