"use strict";
const pixel = require("../services/text-valid")

exports.pixelate = (req, res) => {
  return res.send(pixel.validCharacters(req.body.text));
};
