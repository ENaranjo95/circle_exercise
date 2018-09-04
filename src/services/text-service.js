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

// Refactor pixelate function

exports.pixelate = (text) => {
  const letters = []
  for(let i = 0; i < text.length; i++){
    const char = text[i].toUpperCase()
    letters.push(pixelFont[char] || pixelFont['space'])
  }
  const final = []
  for(let y = 0; y < 5; y++){
    for(let x = 0; x < letters.length; x++){
      const code = letters[x][y].replace(/1/gi, '#').replace(/0/gi, ' ')
      final.push(`${code} `)
    }
    final.push('\n')
  }
  return final.join('')
}
