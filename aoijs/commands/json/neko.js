module.exports = {
    name: 'neko',
    code: `
    $color[1;RANDOM]
    $image[1;$getProperty[data]]
    $description[1;Here is your neko uwu!]
    $requestAPI[anime;neko;{"type": "image"};Something went wrong]
    `
}
