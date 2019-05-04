const express = require("express");

const server = express();

server.get("/games", async (req, res) => {
  res.status(200).json([]);
});

module.exports = server;
