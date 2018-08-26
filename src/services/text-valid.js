const pixel = require('./text-service.js')
const error = new Error('Words Must Only Include Letters!')

// Checks for the validity of the word in test
exports.testRun = (text) => {
  let invalid = "`~!@#$%^&*()-_=+{[]}|'\';:,./<>?1234567890"
  for(let i = 0; i < invalid.length; i++){
    if( text.includes(invalid[i]) ){
      throw error
    }
  }
  return text
}


// This functions checks the validity of the word
exports.validChar = (text) => {
  let invalid = "`~!@#$%^&*()-_=+{[]}|'\';:,./<>?1234567890"
  for(let i = 0; i < invalid.length; i++){
    if( text.includes(invalid[i]) ){
      return 'Words Must Only Include Letters!'
    }
  }
  return pixel.pixelate(text)
}
