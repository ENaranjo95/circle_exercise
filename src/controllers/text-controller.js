"use strict";
const pixel = require("../services/text-service")
//console.log(pixel.pixelate)

exports.pixelate = (req, res) => {
  return res.send(pixel.pixelate(req.body.text));
};
