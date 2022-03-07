module.exports = {
    name: 'ascii',
    code: `
    \`\`\`$getProperty[data]\`\`\`
    $requestAPI[json;ascii;{"text": "$message[1]"};Something went wrong]
    `
}
