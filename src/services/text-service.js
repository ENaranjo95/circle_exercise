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
  let word = text.toUpperCase()
  let work = []
  for(let i = 0; i < word.length; i++){
    let letter = word.charAt(i)
    for(let j = 0; j < pixelFont[letter].length; j++){
      //console.log(pixelFont[letter][j])
      work.push(pixelFont[letter][j])
    }
  }
  return work; // TODO: Map text to pixel font.
};
