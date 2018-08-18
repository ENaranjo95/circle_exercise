"use strict";

const pixelFont = require("../lib/pixel-font.js");

/**
 * Convert given text to pixel font.
 *
 * Example:
 *
 * pixelate("hello");
 *
 * X  X XXXX X   X    XX
 * X  X X    X   X   X  X
 * XXXX XXX  X   X   X  X
 * X  X X    X   X   X  X
 * X  X XXXX XXX XXX  XX
 *
 * @param {string} text - String to convert to pixel font.
 * @return {string} - Converted string, with line breaks.
 */

exports.pixelate = (text) => {
  let pixel = []
  let textArr = text.toUpperCase().split('')
  textArr.forEach( (el) => { el == ' ' ?  el = 'space' : el
    for(let j = 0; j < pixelFont[el].length; j++){
      let code = pixelFont[el][j]
      let line = code.replace(/1/gi, '#')
      let final = line.replace(/0/gi, ' ')
      pixel.push(final)
    }
  });
  return pixel; // TODO: Map text to pixel font.
}
