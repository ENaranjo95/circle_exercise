"use strict";
const valid = require("../services/text-valid")

exports.pixelate = (req, res) => {
  const text = req.body.text
  return res.send(valid.validChar(req.body.text));
};
