module.exports = {
  name: 'eject',
  code: `$description[1;**$username** $replaceText[$replaceText[$get[imposter];true;was an imposter.];false;was not an imposter]]
  $imageAPI[1;eject;{
  "text": "$username",
  "imposter": "$get[imposter]"
  };eject.gif]
  $let[imposter;$randomText[true;false]]
  `
}
