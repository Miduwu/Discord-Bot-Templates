module.exports = {
    name: 'santa',
    code: `
    $description[1;$message]
    $imageAPI[1;santa;{
        "text": "$message"
    }]
    `
  }