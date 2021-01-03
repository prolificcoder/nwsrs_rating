'use strict';
var node_xj = require("xls-to-json");
node_xj(
    {
        input: "rate21-69.xls", // input xls
        output: "ratings.json", // output json
    },
    function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log("Json file created");
        }
    }
);