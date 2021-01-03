'use strict';
var node_xj = require("xls-to-json");
const fs = require('fs')
var inputFile = "./data/rate21-69.xls"
var outputFile = "./data/ratings.json"

node_xj(
    {
        input: inputFile, // input xls
        output: outputFile// output json
    },
    function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log("Json file created");
        }
    }
);
