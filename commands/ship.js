module.exports = {
  name: 'ship',
  aliases: ['love'],
  code: `
  **$username** & **$username[$mentioned[1]]** are **$get[random]%** compatible! :heart:
  $attachmentAPI[ship;{
  "image1": "$authorAvatar",
  "image2": "$userAvatar[$mentioned[1]]",
  "type": "$replaceText[$replaceText[$checkCondition[$get[random]>50];true;1];false;2]"
  };ship.png]
  $let[random;$random[1;101]]
  $onlyIf[$mentioned[1]!=;You need to mention someone.]
  `
}
