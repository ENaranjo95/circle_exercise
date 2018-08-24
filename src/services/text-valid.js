const pixel = require('./text-service.js')

exports.testRun = (test) => {
  let invalid = "`~!@#$%^&*()-_=+{[]}|'\';:,./<>?1234567890"
  for(let i = 0; i < invalid.length; i++){
    if( text.includes(invalid[i]) ){
      return 'Words Must Only Include Letters!'
    }
  }
  return text
}


// This functions checks the validity of the word
exports.validCharacters = (text) => {
  let invalid = "`~!@#$%^&*()-_=+{[]}|'\';:,./<>?1234567890"
  for(let i = 0; i < invalid.length; i++){
    if( text.includes(invalid[i]) ){
      return 'Words Must Only Include Letters!'
    }
  }
  return pixel.pixelate(text)
}
